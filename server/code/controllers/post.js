const parse = require('co-body');
const queryParse = require('query-string').parse;
const xssClean = require('node-xss').clean;
const DB = require('../services/db');
const topicsModel = DB.getInstance().model('topics');
const postsModel = DB.getInstance().model('posts');
const channelsModel = DB.getInstance().model('channels');
const usersModel = DB.getInstance().model('users');
const ErrorCode = require('../constants/errorcode');
const score = require('../services/score')
const {
  verifyRequiredFields,
  getParamUnmatchedError,
  reportErrorMessage ,
} = require('../services/utils');

const RequiredFields = ['channelId', 'title', 'content'];
const EditableFields = ['title', 'content'];
const TopicWritableFields = ['userId', 'channelId', 'userName', 'title', 'lastCommentTime'];
const TopicReadFields = ['id', 'userId', 'userName', 'channelId', 'lastCommentUser', 'lastCommentTime',
  'count', 'isTop', 'title', 'createdAt',];
const PostReadFields = ['id', 'content'];

module.exports.create = async ctx => {
  const data = await parse(ctx);
  if (!verifyRequiredFields(data, RequiredFields)) {
    ctx.body = getParamUnmatchedError();
    return
  }
  try {
    const topicId = await DB.getInstance().transaction(async transaction => {
      const topicId = await createTopic(data, ctx.state.user, transaction)
      await createPost(topicId, data.content, transaction)
      await incUserPostCount(ctx.state.user, transaction)
      await updateChannel(data.channelId)

      return topicId
    })

    score(ctx.state.user.id, 'addPost')

    ctx.body = {
      state: true,
      id: topicId,
    }
  } catch (e) {
    reportErrorMessage(e)
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.list = async ctx => {
  let {offset, limit, channel = 0} = queryParse(ctx.request.querystring);
  offset = +offset || 0
  limit = +limit || 10
  limit = Math.min(50, limit)
  const where = {
    state: 'enable',
  }

  if (channel) {
    where.channelId = channel
  }

  try {
    const {count, rows} = await getPostList(where, offset, limit)

    const channelIds = getChannelIds(rows)
    const channelRows = await channelsModel.findAll({
      where: {id: channelIds},
      attributes: ['id', 'name'],
    })

    const channelMap = {}
    channelRows.forEach(channel => {
      channelMap[channel.id] = channel.name
    })


    const rowsWithChannel = rows.map(row => {
      return Object.assign({channelName: channelMap[row.channelId]}, row.dataValues)
    })

    ctx.set('X-total', count);
    ctx.set('X-offset', offset);
    ctx.set('X-limit', limit);
    ctx.body = rowsWithChannel
  } catch (e) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.getDetail = async ctx => {
  const id = ctx.params.id
  try {
    const [topicRow, postRow] = await getDetail(id)
    if (!topicRow || !postRow) {
      ctx.status = 404
      ctx.body = {
        err_no: ErrorCode.NOT_FOUND,
        err_message: 'post not found'
      }
      return
    }
    ctx.body = Object.assign(topicRow.dataValues, {content: postRow.content})
  } catch (e) {
    reportErrorMessage(e)
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.remove = async ctx => {
  const id = ctx.params.id
  const {id: userId, role} = ctx.state.user
  try {
    const topicRow = await topicsModel.findOne({
      where: {id}
    })
    if (!topicRow) {
      ctx.status = 404
      ctx.body = {
        err_no: ErrorCode.NOT_FOUND,
        err_message: 'post not found'
      }
      return
    }
    if (topicRow.userId !== userId && +role === 0) {
      ctx.status = 403
      ctx.body = {
        err_no: ErrorCode.NO_PERMISSION,
        err_message: 'no permission',
      }
      return
    }
    DB.getInstance().transaction(async transaction => {
      await topicRow.destroy({transaction})
      await postsModel.destroy({
        where: {topicId: id},
        transaction,
      })
    })
    score(ctx.state.user.id, 'deletePost')
    ctx.body = {state: true}
  } catch (e) {
    reportErrorMessage(e)
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.edit = async ctx => {
  const id = ctx.params.id
  const {id: userId} = ctx.state.user
  const data = await parse(ctx);
  const {title, content} = data;
  try {
    const [topicRow, postRow] = await getDetail(id)
    if (!topicRow || !postRow) {
      ctx.status = 404
      ctx.body = {
        err_no: ErrorCode.NOT_FOUND,
        err_message: 'post not found'
      }
      return
    }
    if (topicRow.userId !== userId) {
      ctx.status = 403
      ctx.body = {
        err_no: ErrorCode.NO_PERMISSION,
        err_message: 'no permission',
      }
      return
    }
    await editPost(title, content, topicRow, postRow)
    ctx.body = {}
  } catch (e) {
    reportErrorMessage(e)
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

// top or untop etc
module.exports.patch = async ctx => {
  const id = ctx.params.id
  // TODO
}

function getChannelIds(rows) {
  const channelIds = []
  rows.forEach(row => {
    if (!channelIds.includes(row.channelId)) {
      channelIds.push(row.channelId)
    }
  })
  return channelIds
}

async function createTopic(data, user, transaction) {
  const {id: userId, name: userName} = user
  const topicRow = await topicsModel.create(Object.assign({}, data, {
    userId,
    userName,
    lastCommentTime: new Date,
  }), {
    fields: TopicWritableFields,
    transaction,
  })
  return topicRow.get('id')
}

async function incUserPostCount(user, transaction) {
  const {id} = user
  const userRow = await usersModel.findOne({
    where: {id}
  })
  if (userRow) {
    userRow.count += 1
  }
  await userRow.save({
    returning: false,
    transaction,
  })
}

async function createPost(topicId, content, transaction) {
  return postsModel.create({
    topicId,
    content: xssClean(content),
  }, {transaction})
}

async function updateChannel(channelId, transaction) {
  const channelRow = await channelsModel.findOne({
    where: {id: channelId},
  })
  if (channelRow) {
    channelRow.lastCommentTime = new Date
    channelRow.count += 1
    await channelRow.save({
      returning: false,
      transaction,
    })
  }
}

async function getPostList(where, offset, limit) {
  return topicsModel.findAndCountAll({
    where,
    offset,
    limit,
    attributes: TopicReadFields,
    order: [['isTop', 'desc'], ['lastCommentTime', 'desc']]
  })
}

async function getDetail(id) {
  return Promise.all([
    topicsModel.findOne({
      where: {id},
      attributes: TopicReadFields,
    }),
    postsModel.findOne({
      where: {topicId: id},
      attributes: PostReadFields,
    })
  ])
}

async function editPost(title, content, topicRow, postRow) {
  return DB.getInstance().transaction(async transaction => {
    if (title && title !== topicRow.title) {
      await topicRow.update({title}, {transaction})
    }
    if (content && content !== postRow.content) {
      await postRow.update({
        content: xssClean(content),
      }, {transaction})
    }
  })
}
