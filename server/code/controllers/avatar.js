const fs = require('fs')
const path = require('path')
const util = require('util')
const gm = require('gm').subClass({imageMagick: true})
const sendFile = require('koa-sendfile')
const ErrorCode = require('../constants/errorcode')

const AvatarImgSize = 200

module.exports.get = async ctx => {
  const id = ctx.params.id
  const avatarPath = path.resolve(process.env.DATA_PATH, 'avatar', id.toString())
  const stats = await sendFile(ctx, avatarPath)
  if (!stats) ctx.throw(404)
}

module.exports.set = async ctx => {
  const {user} = ctx.state
  const savePath = path.resolve(process.env.DATA_PATH, 'avatar', user.id.toString())

  const file = ctx.request.body.files.avatar

  if (file.size > 1024000) {
    ctx.body = {
      err_no: ErrorCode.FILE_TOO_LARGE,
      err_message: 'file too large',
    }
    return
  }


  try {
    await uploadAvatar(file, savePath)
    ctx.body = {}
  } catch (e) {
    console.log(e)
    ctx.body = {
      err_no: ErrorCode.FILE_CLIP_FAILED,
      err_message: 'file resize failed',
    }
  }
}

async function uploadAvatar(file, savePath) {
  return new Promise((resolve, reject) => {
    const image = gm(file.path)
    image.size((err, size) => {
      if (err) {
        return reject(err)
      }
      let width, height
      if (size.width > size.height) {
        height = AvatarImgSize;
        width = size.width / size.height * AvatarImgSize;
      } else {
        width = AvatarImgSize;
        height = size.height / size.width * AvatarImgSize;
      }
      image
        .resize(width, height)
        .crop(AvatarImgSize, AvatarImgSize, 0, 0)
        .write(path.join(savePath), err => {
          if (err) {
            return reject(err)
          }
          fs.unlink(file.path)
          resolve()
        })
    })
  })
}
