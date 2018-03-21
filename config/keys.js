if (process.env.process == 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
