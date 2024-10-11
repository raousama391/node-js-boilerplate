const AppError = require('./AppError');

module.exports = class StandardsErrorsFactory {
  static StandardCreationFailed(error) {
    return new AppError({
      message: error || 'Standard creation failed',
      statusCode: 400,
    });
  }

  static StandardDoNotExist() {
    return new AppError({
      message: 'Standard does not exist',
      statusCode: 404,
      body: {exists: false},
    });
  }
};
