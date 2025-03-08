const sendResponse = (res, statusCode, success, message, data = null) => {
    res.status(statusCode).json({
      success,
      message,
      data
    });
  };
  
  const successResponse = (res, message, data = null, statusCode = 200) => {
    sendResponse(res, statusCode, true, message, data);
  };
  
  const errorResponse = (res, message, statusCode = 400) => {
    sendResponse(res, statusCode, false, message);
  };
  
  module.exports = { successResponse, errorResponse };
  