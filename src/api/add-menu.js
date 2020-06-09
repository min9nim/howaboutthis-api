const allowCors = require('../utils/cors')
const Menu = require('../models/menu')

const addMenuHandler = async (req, res) => {
    console.log(typeof req.body)
    await Menu.create(req.body)
    console.log('done')
    res.json({
        status: 'succeeded',
    })
}

module.exports = allowCors(addMenuHandler)
