import express from 'express';
const { validator } = require('../validator');

/**
 * userリクエストチェック
 */
class InquiryRequest {
  /**
   * 
   * @param {object} req
   * @param {object} req.body
   * @param {string} req.body.name
   * @param {string} req.body.email
   * @param {string} req.body.message
   */
    inquiry(req:express.Request) {
    const { name, email, message } = req.body;
    if (!validator.isString(name)) throw new Error('Bad Request');
    if (!validator.isString(email)) throw new Error('Bad Request');
    if (!validator.isMailAddress(message)) throw new Error('Bad Request');
  }
}
module.exports = { inquiryRequest: new InquiryRequest() };
