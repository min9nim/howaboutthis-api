const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  author: String,
  menuId: mongoose.Schema.Types.ObjectId,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('Comment', schema, 'comments')
