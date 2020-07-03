const {loadEnv} = require('../src/initialize')
loadEnv()

const allowCors = require('../src/utils/cors')

const handler = async (req, res) => {
  res.json({
    status: 'succeeded',
    result: { SLACK_CHANNEL: process.env.SLACK_CHANNEL }
  })
}

module.exports = allowCors(handler)
