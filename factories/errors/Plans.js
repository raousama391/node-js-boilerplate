const AppError = require('./AppError');

module.exports = class PlansErrorsFactory {
  static PlanCreationFailed() {
    return new AppError({message: 'Plan creation failed', statusCode: 400});
  }

  static NoPlansFound() {
    return new AppError({message: 'No plans found', statusCode: 404});
  }

  static NoSingleFound() {
    return new AppError({message: 'No plan found', statusCode: 404});
  }
};
