require('dotenv').config()

const { send } = require('micro')
const log = require('./')

module.exports = (req, res) => {
  log(req, res)
  send(res, 200, 'Yay')
}
