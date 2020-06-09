const mongoose = require('./dbConnect')


const Schema = mongoose.Schema
const menuSchema = new Schema({
  title: String,
  category: String,
  url: String,
  desc: String,
  image: String,
  createdAt: Number,
  updatedAt: Number,
})

module.exports = mongoose.model('Menu', menuSchema, 'menus')
