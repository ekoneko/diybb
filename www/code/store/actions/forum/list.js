import * as http from 'utils/http'
import requestList, {requestFn} from 'utils/requestList'
import ActionTypes from 'store/ActionTypes'

const request = dispatch => {
  dispatch({
    type: ActionTypes.FORUM_LIST_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.FORUM_LIST_RECEIVE,
    payload,
  })
}

export default requestList(
  requestFn('/channels'),
  request,
  response
)
