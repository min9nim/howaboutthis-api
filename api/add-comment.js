const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const Comment = require('../src/models/comment')

const addMenuHandler = async (req, res) => {
  const {menuId, author, content} = req.body
  const doc = await Comment.create({menuId, author, content})
  res.json({
    status: 'succeeded',
    result: doc
  })
}

module.exports = allowCors(addMenuHandler)
