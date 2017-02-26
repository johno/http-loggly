'use strict'

const winston = require('winston')
require('winston-loggly-bulk')

winston.add(winston.transports.Loggly, {
  token: process.env.LOGGLY_TOKEN,
  subdomain: process.env.LOGGLY_SUBDOMAIN,
  tags: [process.env.LOGGLY_TAG || __dirname],
  json: true
})

const eos = require('end-of-stream')
const isBlank = require('is-blank')

module.exports = (req, res) => {
  if (isBlank(process.env.LOGGLY_TOKEN)) {
    throw new Error('nsv-log expected LOGGLY_TOKEN to be set')
  }

  const start = Date.now()

  winston.log('info', 'request', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    remoteAddress: req.connection.remoteAddress,
    remotePort: req.connection.remotePort
  })

  eos(res, err => {
    if (err) {
      return winston.log('error', err.stack)
    }

    winston.log('info', 'response', {
      method: res.method,
      url: res.url,
      headers: res.headers,
      statusCode: res.statusCode,
      remoteAddress: req.connection.remoteAddress,
      remotePort: req.connection.remotePort,
      elapsed: Date.now() - start
    })
  })
}

module.exports.logger = winston.log
