const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

const addMenuHandler = async (req, res) => {
  const doc = await Menu.create(req.body)
  res.json({
    status: 'succeeded',
    result: doc
  })
}

module.exports = allowCors(addMenuHandler)
