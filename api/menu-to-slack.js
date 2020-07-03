const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')
const axios = require('axios').default

const handler = async (req, res) => {

  try {
    if (!req.body) {
      throw Error('payload is not found')
    }
    let selected
    if (req.body._id) {
      selected = await Menu.findOne({ _id: req.body._id }).lean()
    } else {
      const docs = await Menu.find().lean()
      const randomIndex = Math.floor(Math.random() * docs.length)
      selected = docs[randomIndex]
    }

    const channel = req.body.channel
    if (!channel) {
      throw Error('channel is required')
    }
    const {data} = await axios.post(process.env.SLACK_URL, {
      text: selected.title + '\n👉 ' + selected.url + '\n📝 ' + process.env.WEB_URL,
      channel
    })
    console.log('result', data)
    res.json({
      status: 'succeeded',
      result: data
    })
  } catch (e) {
    console.error(e)
    res.json({
      status: 'failed',
      result: e.message
    })
  }
}

module.exports = allowCors(handler)
