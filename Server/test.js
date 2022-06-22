const AWS = require('aws-sdk');

// 米国東部（バージニア北部） - 西部なら us-west-2
AWS.config.update({ region: 'ap-northeast-1' });
const ses = new AWS.SES();

const params = {
  Destination: {
    ToAddresses: [
      '904705882@qq.com',
    ],
  },
  Message: {
    Body: {
      Text: {
        Data: 'こんにちは、テストメールです',
        Charset: 'utf-8'
      },
    },
    Subject: {
      Data: 'こんにちは、こんにちは！',
      Charset: 'utf-8',
    },
  },
  // From
  Source: 'jiayukai1997@gmail.com',
};

ses.sendEmail(params, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res);
});