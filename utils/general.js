require('dotenv').config();
const config = require('config');

// Use process.env as a fallback if config doesn't have 'env'
const currentEnv = config.has('env') ? config.get('env') : process.env.NODE_ENV || 'development';

const envVariables = config.has('envVariables') ? config.get('envVariables') : {
  prod: 'production',
  dev: 'development'
};

const isEnvProd = currentEnv === envVariables.prod;
const isEnvDev = currentEnv === envVariables.dev;

// Use a default value for frontendURL if it's not in the config
const frontendURL = config.has('frontendURL') ? config.get('frontendURL') : 'http://localhost:3000';
const corsOrigin = isEnvProd ? frontendURL : true;

module.exports = {
  currentEnv,
  isEnvProd,
  isEnvDev,
  corsOrigin,
};