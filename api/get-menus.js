const {loadEnv, initDB} = require('../src/initialize')
loadEnv()
initDB()

const allowCors = require('../src/utils/cors')
const {propEq} = require('ramda')
const Menu = require('../src/models/menu')
const Comment = require('../src/models/comment')

const getMenusHandler = async (req, res) => {
  const comments = await Comment.find().lean()
  const docs = await Menu.find().sort({createdAt: -1}).lean()
  const commentsAdded = docs.map(doc => {
    doc.comments = comments.filter(propEq('menuId', doc._id))
    return doc
  })

  // console.log(docs)
  res.json({
    status: 'succeeded',
    result: commentsAdded
  })
}

module.exports = allowCors(getMenusHandler)
