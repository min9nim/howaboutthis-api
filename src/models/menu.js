const mongoose = require('./dbConnect')

const Schema = mongoose.Schema
const menuSchema = new Schema({
  id: { type: String, unique: true, required: true },
  url: String,
  title: String,
  desc: String,
  image: String,
  author: {
    name: String,
    id: String,
  },
  createdAt: Number,
  updatedAt: Number,
})

module.exports = mongoose.model('Menu', menuSchema, 'menus')
