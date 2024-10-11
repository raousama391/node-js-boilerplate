const AppError = require('./AppError');

module.exports = class LearningBlockErrorsFactory {
  static NoLearningBlocksFound() {
    return new AppError({message: 'No learning blocks found', statusCode: 404});
  }

  static LearningBlockCreationFailed() {
    return new AppError({
      message: 'Learning block creation failed',
      statusCode: 400,
    });
  }

  static LearningBlockDuplicationFailed() {
    return new AppError({
      message: 'Learning block duplication failed',
      statusCode: 400,
    });
  }

  static LearningBlockDeletionFailed() {
    return new AppError({
      message: 'Learning block deletion failed',
      statusCode: 400,
    });
  }

  static LearningBlockUpdationFailed() {
    return new AppError({
      message: 'Learning block updation failed',
      statusCode: 400,
    });
  }

  static LearningBlockFileDeletionFailed() {
    return new AppError({
      message: 'Learning block file updation failed',
      statusCode: 400,
    });
  }
};
