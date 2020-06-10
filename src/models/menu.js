const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
  url: String,
  title: String,
  desc: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
    required: 'Must have start date - default value is the created date'
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: 'Must have start date - default value is the created date'
  },
})

module.exports = mongoose.model('Menu', menuSchema, 'menus')
