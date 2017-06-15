const parse = require('co-body');
const queryParse = require('query-string').parse;
const xssClean = require('node-xss').clean;
const DB = require('../services/db');
const topicsModel = DB.getInstance().model('topics');
const channelsModel = DB.getInstance().model('channels');
const commentsModel = DB.getInstance().model('comments');
const ErrorCode = require('../constants/errorcode');
const score = require('../services/score')
const {
  verifyRequiredFields,
  getParamUnmatchedError,
  reportErrorMessage ,
} = require('../services/utils');

const WritableFields = ['content'];

module.exports.create = async ctx => {
  const {postId} = ctx.params
  const data = await parse(ctx);
  if (!verifyRequiredFields(data, WritableFields)) {
    ctx.body = getParamUnmatchedError();
    return
  }

  const {id: userId, name: userName} = ctx.state.user
  try {
    ctx.body = await DB.getInstance().transaction(async transaction => {
      const topic = await topicsModel.findOne({where: {id: postId}})
      if (!topic) {
        ctx.status = 404
        ctx.body = {
          err_no: ErrorCode.NOT_FOUND,
          err_message: 'post not found',
        }
        return
      }
      const commentRow = await commentsModel.create({
        topicId: postId,
        userId,
        userName,
        content: xssClean(data.content),
      }, {transaction})
      await updatePostLastComment(topic, userId, userName, transaction)
      await updateChannelLastComment(topic.channelId, transaction)

      score(userId, 'addComment')

      return commentRow.dataValues
    })
  } catch (e) {
    reportErrorMessage(e)
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.list = async ctx => {
  const {postId} = ctx.params
  let {offset, limit} = queryParse(ctx.request.querystring);
  offset = +offset || 0
  limit = +limit || 10
  limit = Math.min(50, limit)

  try {
    const {count, rows} = await commentsModel.findAndCountAll({
      where: {topicId: postId},
      offset,
      limit,
      order: 'createdAt desc'
    })

    ctx.set('X-total', count);
    ctx.set('X-offset', offset);
    ctx.set('X-limit', limit);
    ctx.body = rows
  } catch (e) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.edit = async ctx => {
  const {postId, commentId} = ctx.params
  const data = await parse(ctx);
  const {id: userId} = ctx.state.user
  const commentRow = await commentsModel.findOne({
    where: {topicId: postId, id: commentId}
  })
  if (!commentRow) {
    ctx.status = 404
    ctx.body = {
      err_no: ErrorCode.NOT_FOUND,
      err_message: 'post not found'
    }
    return
  }
  if (commentRow.userId !== userId) {
    ctx.status = 403
    ctx.body = {
      err_no: ErrorCode.NO_PERMISSION,
      err_message: 'no permission',
    }
    return
  }
  await commentRow.update({
    content: xssClean(data.content)
  })
  ctx.body = commentRow.dataValues
}

module.exports.remove = async ctx => {
  const {id: userId} = ctx.state.user
  const {postId, commentId} = ctx.params
  await commentsModel.destroy({
    where: {topicId: postId, id: commentId, userId},
  })
  score(userId, 'deleteComment')
  ctx.body = {}
}

function updatePostLastComment(topic, userId, userName, transaction) {
  return topic.update({
    lastCommentUser: JSON.stringify({
      id: userId,
      name: userName,
    }),
    lastCommentTime: new Date(),
    count: topic.count + 1,
  }, {transaction})
}

async function updateChannelLastComment(channelId, transaction) {
  const channelRow = await channelsModel.findOne({
    where: {id: channelId},
  })
  if (channelRow) {
    channelRow.lastCommentTime = new Date
    await channelRow.save({
      returning: false,
      transaction,
    })
  }
}
