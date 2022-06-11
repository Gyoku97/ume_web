import express from 'express';
const logger = require('../logger');
const { userService } = require('../services/inquiryService');
const { userRequest } = require('../request/inquiryRequest');

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
      userRequest.inquiry(req);
    } catch (e) {
      logger.warn(e);
      return res.status(400).json({ error: e });
    }

    try {
      const responseBody = await userService.inquiry(req);
      logger.debug(responseBody);
      return res.status(200).json(responseBody);
    } catch (e) {
      logger.error(e);
      return res.status(500).json({ error: e });
    }
  }
}

module.exports = { inquiryController: new InquiryController() };
