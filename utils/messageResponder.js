const _  = require('lodash')

const messageResponder = function(req, res) {
    const body = _.get(req, ['body'], {})
    const status = _.get(req, ['status'], 200)
    const success = status < 300 ? true : false
    const message = {
        body,
        status,
        success
    }
    res.send(message).status(status) 
}

module.exports = messageResponder