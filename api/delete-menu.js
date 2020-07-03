const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()


const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

const handler = async (req, res) => {
  const result = await Menu.deleteOne({ _id: req.body._id }).lean()
  console.log({deletedCount: result.deletedCount})
  res.json({
    status: result.deletedCount > 0 ? 'succeeded' : 'failed'
  })
}

module.exports = allowCors(handler)
