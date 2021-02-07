const SimpleNodeLogger = require('simple-node-logger');
const opts = {
  timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

(function repeatMe() {
  setTimeout(() => {
    log.info('Hello Kubernetes');
    repeatMe();
  }, 100)
})();
