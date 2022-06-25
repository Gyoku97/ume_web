const serverlessExpress = require('@vendia/serverless-express');
const api = require('./dist/api');
const { logger } = require('./logger');

exports.handler = async (event, context) => {
  logger.info(event, context);
  const server = await serverlessExpress.createServer(api);
  const response = await serverlessExpress.proxy(server, event, context);
  logger.info(response);
  return response;
};