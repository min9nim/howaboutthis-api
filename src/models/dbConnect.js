const mongoose = require('mongoose')

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

const DBURL = 'mongodb://dev:dev123@ds333768.mlab.com:33768/howaboutthis'

mongoose.connect(DBURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
})

module.exports = mongoose
