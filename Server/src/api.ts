import express from 'express';
const cors = require('cors');
const helmet = require('helmet');
const { appRoutes } = require('./routes/appRoutes');
// const { auth } = require('./auth');
/**
 * API
 */
class Api {
  /**
   * APIサーバー生成
   * @returns {express}
   */
  generate() {
    const app: express.Express = express();
    app.use(cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTION',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }));
    app.use(helmet());
    app.use(express.json());
    // this.app.use('/', (req, res, next) => auth.verify(req, res, next));
    appRoutes.set(app);
    return app;
  }
}

module.exports = new Api().generate();