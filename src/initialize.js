const mongoose = require('mongoose')
const dotenv = require('dotenv')

function loadEnv () {
  dotenv.config()
  const { SLACK_URL, SLACK_CHANNEL, DB_URL } = process.env
  console.log({ SLACK_URL, SLACK_CHANNEL, DB_URL })
}

function initDB (dburl) {
  const db = mongoose.connection
  db.on('error', console.error)
  db.once('open', function () {
    console.log('Connected to mongod server')
  })
  mongoose.set('useUnifiedTopology', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.connect(dburl, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
}

loadEnv()
initDB(process.env.DB_URL)
