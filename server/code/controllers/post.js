const parse = require('co-body');
const queryParse = require('query-string').parse;
const DB = require('../services/db');
const topicsModel = DB.getInstance().model('topics');
const postsModel = DB.getInstance().model('posts');
const channelsModel = DB.getInstance().model('channels');
const ErrorCode = require('../constants/errorcode');
const {
  verifyRequiredFields,
  getParamUnmatchedError,
  reportErrorMessage ,
} = require('../services/utils');

const RequiredFields = ['userId', 'channelId', 'userName', 'title', 'content'];
const EditableFields = ['title', 'content'];
const TopicWritableTopicFields = ['userId', 'channelId', 'userName', 'title', 'lastCommentTime'];
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
      const topicId = await createTopic(data, transaction)
      await createPost(topicId, data.content, transaction)
      await updateChannel(data.channelId)

      return topicId
    })
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
  let {offset, limit} = queryParse(ctx.request.querystring);
  offset = +offset || 0
  limit = +limit || 10
  limit = Math.min(50, limit)
  const where = {
    state: 'enable',
  }

  try {
    const {count, rows} = await getPostList(where, offset, limit)

    ctx.set('X-total', count);
    ctx.set('X-offset', offset);
    ctx.set('X-limit', limit);
    ctx.body = rows
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
  try {
    DB.getInstance().transaction(async transaction => {
      await topicsModel.destroy({
        where: {id},
        transaction,
      })
      await postsModel.destroy({
        where: {topicId: id},
        transaction,
      })
    })
    ctx.body = {state: true}
  } catch (e) {
    reportErrorMessage(e)
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.edit = async ctx => {
  const id = ctx.params.id
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
    } else {
      await editPost(title, content, topicRow, postRow)
      ctx.body = {state: true}
    }
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

async function createTopic(data, transaction) {
  const topicRow = await topicsModel.create(Object.assign({}, data, {
    lastCommentTime: new Date,
  }), {
    fields: TopicWritableTopicFields,
    transaction,
  })
  return topicRow.get('id')
}

async function createPost(topicId, content, transaction) {
  return postsModel.create({topicId, content,}, {transaction})
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
    order: 'isTop desc, lastCommentTime desc'
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
      await postRow.update({content}, {transaction})
    }
  })
}
