const AppError = require('./AppError');
const GeneralErrorsFactory = require('./general');
const UsersErrorsFactory = require('../errors/users');
const AuthErrors = require('./AuthErrors');
const StandardsErrorsFactory = require('./Standards');
const PlansErrorsFactory = require('./Plans');
const LearningBlockErrorsFactory = require('./learningBlock');
const SubscriptionErrorsFactory = require('./subscription');
const PublicLinksErrorsFactory = require('./PublicLinks');
const AssistantErrorsFactory = require('./Assistants');

module.exports = {
  AppError,
  GeneralErrorsFactory,
  UsersErrorsFactory,
  AuthErrors,
  StandardsErrorsFactory,
  PlansErrorsFactory,
  LearningBlockErrorsFactory,
  SubscriptionErrorsFactory,
  PublicLinksErrorsFactory,
  AssistantErrorsFactory,
};
