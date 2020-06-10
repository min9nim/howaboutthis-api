const mongoose = require('mongoose')

// load .env
require('dotenv').config()

const {SLACK_URL, SLACK_CHANNEL, DB_URL} = process.env
console.log({SLACK_URL, SLACK_CHANNEL, DB_URL})

// 디비설정
const db = mongoose.connection
db.on('error', console.error)
db.once('open', function() {
  console.log('Connected to mongod server')
})

//console.log("== argv ==")
//console.log(process.argv);

// const dbConfig = require('../../dbConfig')
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
})

module.exports = mongoose
