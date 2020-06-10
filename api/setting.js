require('../src/initialize')

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

const getMenusHandler = async (req, res) => {
    const docs = await Menu.find()
    // console.log(docs)
    res.json({
        status: 'succeeded',
        result: {SLACK_CHANNEL: process.env.SLACK_CHANNEL},
    })
}

module.exports = allowCors(getMenusHandler)
