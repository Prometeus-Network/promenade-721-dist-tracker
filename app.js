require('dotenv').config()

const healthcheck = require('./healthcheck')
const trackAll721s = require('./services/erc721tracker')

trackAll721s()
healthcheck();
