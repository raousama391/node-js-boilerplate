const {
  assistantRoute,
} = require(`../routes`);

module.exports.prepareV1Routes = (app) => {
  const prefix = '/api/v1/';

  app.use(`${prefix}assistant`, assistantRoute);
};
