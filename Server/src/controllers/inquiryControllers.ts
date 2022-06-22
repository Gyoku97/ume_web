import express from 'express';
// const logger = require('../logger');
const { inquiryServices } = require('../services/inquiryServices');
const { inquiryRequest } = require('../request/inquiryRequest');

/**
 * userコントローラー
 */
class InquiryController {
  /**
   * ユーザ作成
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async inquiry(req: express.Request, res: express.Response) {
    try {
      inquiryRequest.inquiry(req);
    } catch (e) {
      console.warn(e);
      return res.status(400).json({ error: e });
    }

    try {
      const responseBody : String = await inquiryServices.inquiry(req);
      console.debug(responseBody);
      return res.status(200).json(responseBody);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: e });
    }
  }
}

module.exports = { inquiryController: new InquiryController() };
