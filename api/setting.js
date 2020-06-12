require('../src/initialize')

const allowCors = require('../src/utils/cors')

const getMenusHandler = async (req, res) => {
  res.json({
    status: 'succeeded',
    result: { SLACK_CHANNEL: process.env.SLACK_CHANNEL }
  })
}

module.exports = allowCors(getMenusHandler)
