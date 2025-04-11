function greet(name) {
}
module.exports = { greet };
const { login } = require('./auth/login');
module.exports.auth = { login };
