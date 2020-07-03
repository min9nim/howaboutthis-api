const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const Comment = require('../src/models/comment')

const addMenuHandler = async (req, res) => {
  await Comment.deleteOne({ _id: req.body._id })
  res.json({
    status: 'succeeded'
  })
}

module.exports = allowCors(addMenuHandler)
