import express from 'express';

class AppRoutes {
  /**
   * APIルート設定
   * @param {express} app
   */
  set(app: express.Application) {
    app.route('/test')
    .get((req: express.Request, res: express.Response) => {
      return res.status(200).json({ message: 'test' });
    });
    app.route('sendMessage')
    .post((req: express.Request, res: express.Response) => {
      
    });
  }
}

module.exports = { appRoutes: new AppRoutes() };