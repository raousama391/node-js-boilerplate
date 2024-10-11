const AppResponse = require('./AppResponse');

module.exports = class AssistantResponses {

  static MessageRetrievedSuccessfully(message) {
    return new AppResponse({
      message: 'Message retrieved successfully',
      statusCode: 200,
      body: {message},
    });
  }

};