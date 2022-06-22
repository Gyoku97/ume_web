class SESSetting {
  get sesSetting() {
    return {
      smtpEndpoint : "email-smtp.ap-northeast-1.amazonaws.com",
      port : 587,
      smtpUsername : "AKIA5PDLJMUSB2YCCS4T",
      smtpPassword : "BLarad39B52SzAPS99c2K9zHAd4RfX168DQIVnC1a9t8",
      sender: "jiayukai1997@gmail.com",
    };
  }
}

const { sesSetting } = new SESSetting();
module.exports = { sesSetting };
