require('../src/initialize')

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

module.exports = allowCors(async (req, res) => {
  const doc = await Menu.findOneAndUpdate({_id: req.body._id}, {...req.body, updatedAt: Date.now()})
  res.json({
    status: 'succeeded',
    result: doc
  })
})
