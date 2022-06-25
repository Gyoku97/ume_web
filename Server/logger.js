class ApplicationLogger {
  /**
   * ネイティブメソッドの機能を封印
   */
  native() {}

  /**
   * ファイル名、行番号をログに埋め込む
   */
  showStack() {
    Object.defineProperty(global, '__line', {
      get() { return new Error().stack.split('\n')[3].split(':').reverse()[1]; },
    });
    Object.defineProperty(global, '__fname', {
      get() { return new Error().stack.split('\n')[3].split(/[: ]/).reverse()[2]; },
    });
  }

  /**
   * ロガーの生成
   */
  generateLogger() {
    const typeLevel = ['fatal', 'error', 'warn', 'info', 'debug'];
    const outLevel = typeLevel.indexOf('debug');
    const output = console;
    const simpleLogger = {
      info: output.info,
      error: output.error,
    };
    const logger = {};
    typeLevel.forEach((type, level) => {
      simpleLogger[type] = output[type]
      || (type === 'fatal' ? simpleLogger.error : simpleLogger.info);
      output[type] = this.native;
      logger[type] = (...argv) => {
        // eslint-disable-next-line
        simpleLogger[type](__fname, __line, ...argv);
      };
      if (level > outLevel) {
        logger[type] = this.native;
      }
    });
    global.logger = logger;
  }

  /**
   * アプリケーションのロガーを生成
   */
  generate() {
    this.showStack();
    this.generateLogger();

    return global.logger;
  }
}

const logger = new ApplicationLogger().generate();
logger.logger = logger;
module.exports = logger;
