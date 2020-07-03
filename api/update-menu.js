const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

const handler = async (req, res) => {
  const doc = await Menu.findOneAndUpdate({_id: req.body._id}, {...req.body, updatedAt: Date.now()})
  res.json({
    status: 'succeeded',
    result: doc
  })
}
module.exports = allowCors(handler)
