const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')
const axios = require('axios').default

const menuToSlack = async (req, res) => {
    let selected
    console.log('req.query', req.query)
    if(req.query._id){
        selected = await Menu.findOne({_id: req.query._id}).lean()
    }else{
        const docs = await Menu.find().lean()
        const randomIndex = Math.floor(Math.random()*docs.length)
        selected = docs[randomIndex]
    }
    const result = await axios.post(process.env.SLACK_URL, {
        text: selected.title + '\n' + selected.url,
    })
    console.log('result', result.data)
    console.log('selected', selected)
    res.json({
        status: 'succeeded',
        result: result.data,
    })
}

module.exports = allowCors(menuToSlack)
