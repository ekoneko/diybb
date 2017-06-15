const DB = require('../services/db');
const userScoresModel = DB.getInstance().model('userScores');

const eventTagList = {
  addPost: {num: 3},
  addComment: {num: 1},
  deletePost: {num: -3},
  deleteComment: {num: -1},
}

module.exports = async function (userId, eventTag) {
  const score = eventTagList[eventTag]
  if (!score && !+score.num) {
    return false
  }
  const userRow = await userScoresModel.findOne({
    where: {userId}
  })
  if (!userRow) {
    return
  }

  userRow[score.type || 'score0'] += +score.num
  await userRow.save({
    returning: false,
  })
}
