const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const Comment = require('../src/models/comment')

const handler = async (req, res) => {
  const result = await Comment.deleteOne({ _id: req.body._id }).lean()
  console.log({deletedCount: result.deletedCount})
  res.json({
    status: result.deletedCount > 0 ? 'succeeded' : 'failed'
  })
}

module.exports = allowCors(handler)
