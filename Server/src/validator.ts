/**
 * バリデーター
 */
class Validator {
  /**
   * uuidのチェック
   * @param {string} uuid
   * @returns {boolean}
   */

  isString(string: string) {
    return true;
  }

  /**
   * パスワードのチェック
   * @param {string} password
   * @returns {boolean}
   */
  isMailAddress(mail: string) {
    return true;
  }
}

module.exports = { validator: new Validator() };
