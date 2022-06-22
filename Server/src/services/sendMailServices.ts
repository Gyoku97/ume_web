import { createTransport } from 'nodemailer';
const { sesSetting } = require('../settings/SESSetting');
const { mailTemplateSetting } = require('../settings/mailTemplateSetting');

class SendMail {
  async sendMail(template: string, name: string, message: string, receiver:string = sesSetting.sender) {
    const smtp = createTransport({
      host: sesSetting.smtpEndpoint,
      port: sesSetting.port,
      secure: false,
      auth: {
        user: sesSetting.smtpUsername,
        pass: sesSetting.smtpPassword
      }
    });
    
    const { content } = await mailTemplateSetting.mailText(template, name, message);
    console.log(template, name, message)
    interface MailOptions {
      from: string;
      to: string;
      subject: string;
      text: string;
    }
    const mailOptions: MailOptions = {
      from: sesSetting.sender,  // 送信元
      to: receiver,    // 送信先
      subject: content.subject,            // 件名
      text: content.text,            // 通常のメール本文
    };
  
    try{
      let info = await smtp.sendMail(mailOptions)
      console.log("Message sent! Messsage ID: ", info.messageId)
      return {'Error': false, 'Message': 'Message sent! Messsage ID: ' + info.messageId}
    }catch(e){
      throw new Error('SendMail Error');
    }
  }
}
module.exports = { sendMail: new SendMail() };