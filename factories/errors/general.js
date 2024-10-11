const AppError = require('./AppError');

module.exports = class GeneralErrorsFactory {
  static invalidTokenErr({customMessage} = {}) {
    return new AppError({
      message: customMessage || 'invalid token',
      statusCode: 400,
    });
  }

  static badRequestErr({customMessage} = {}) {
    return new AppError({
      message: customMessage || 'bad request',
      statusCode: 400,
    });
  }

  static internalErr({customMessage, statusCode, err} = {}) {
    return new AppError({
      message: customMessage || 'Something went wrong',
      statusCode: statusCode || 500,
      err,
    });
  }

  static missingObjectId() {
    return new AppError({
      message: 'ID missing. Please provide and id',
      statusCode: 400,
    });
  }

  static invalidObjectId() {
    return new AppError({
      message: 'ID invalid. Please provide a valid ID',
      statusCode: 400,
    });
  }

  static invalidFileFormat() {
    return new AppError({
      message: 'File invalid. Please provide a valid format file',
      statusCode: 400,
    });
  }

  static invalidAccessErr() {
    return new AppError({
      message: 'Invalid Access',
      statusCode: 403,
    });
  }
};
