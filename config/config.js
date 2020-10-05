require('dotenv').config()

const config = {
  production: {
    host: 'localhost',
    user: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    database: process.env.APP_DATABASE,
    port: 3306,
  },
  default: {
    host: 'localhost',
    user: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    database: process.env.APP_DATABASE,
    port: 3306,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};