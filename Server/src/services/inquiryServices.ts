import express from 'express';
const { sendMail } = require('../services/sendMailServices');

class InquiryServices {
  async inquiry(req: express.Request) {
    const { name, email, message } = req.body;
    try{
      await sendMail.sendMail('inquirySender', name, message, email);
      await sendMail.sendMail('inquiryReceiver', name, message);
      return {'Error': false, 'Message': 'Message sent!'};
    }catch(e){
      throw new Error('SendMail Error');
    }
  }
}

module.exports = {inquiryServices: new InquiryServices()};
