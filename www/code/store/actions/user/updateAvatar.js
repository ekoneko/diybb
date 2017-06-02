import {sendFile} from '../../http'

export default function updateAvatar(file) {
  return dispatch => {
    return sendFile({
      file,
      url: '/api/avatar',
      name: 'avatar',
    })
  }
}
