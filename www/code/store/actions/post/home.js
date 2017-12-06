import * as http from 'utils/http'
import requestList, {requestFn} from 'utils/requestList'
import ActionTypes from 'store/ActionTypes'

const request = dispatch => {
  dispatch({
    type: ActionTypes.POST_HOME_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.POST_HOME_RECEIVE,
    payload,
  })
}

export default requestList(
  requestFn('/posts'),
  request,
  response
)
