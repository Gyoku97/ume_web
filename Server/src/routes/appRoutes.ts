import express from 'express';
const { sendMail } = require('../services/sendMailServices');
const { inquiryController } = require('../controllers/inquiryControllers');

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
    app.route('/sendMailTest')
    .post((req: express.Request, res: express.Response) => {
      sendMail.sendMail('inquirySender','KK', 'こんにちは','904705882@qq.com');
      return res.status(200).json({ message: 'test' });
    });
    app.route('/sendMessage')
    .post((req: express.Request, res: express.Response) => {
      inquiryController.inquiry(req, res);
    });
  }
}

module.exports = { appRoutes: new AppRoutes() };