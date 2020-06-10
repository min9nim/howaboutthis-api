require('../src/initialize')

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')
const axios = require('axios').default

const menuToSlack = async (req, res) => {
    let selected
    if(req.query._id){
        selected = await Menu.findOne({_id: req.query._id}).lean()
    }else{
        const docs = await Menu.find().lean()
        const randomIndex = Math.floor(Math.random()*docs.length)
        selected = docs[randomIndex]
    }

    let result
    try{
        result = await axios.post(process.env.SLACK_URL, {
            text: selected.title + '\n' + selected.url,
            channel: process.env.SLACK_CHANNEL,
        })
        console.log('result', result.data)
    }catch (e) {
        console.error(e)
        res.json({
            status: 'failed',
            result: e.message,
        })
        return
    }

    res.json({
        status: 'succeeded',
        result: result.data,
    })
}

module.exports = allowCors(menuToSlack)
