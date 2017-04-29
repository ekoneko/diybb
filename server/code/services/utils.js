const ErrorCode = require('../constants/errorcode');

module.exports.verifyRequiredFields = (inputArray, requiredField) => {
  if (typeof inputArray !== 'object') {
    return false;
  }
  for (let i = requiredField.length - 1; i >= 0; i--) {
    if (inputArray[requiredField[i]] === undefined) {
      return false;
    }
  }
  return true;
}

module.exports.getParamUnmatchedError = () => {
  return {
    err_no: ErrorCode.PARAMS_UNMATCHED_ERROR,
    err_message: 'params not match'
  }
}
