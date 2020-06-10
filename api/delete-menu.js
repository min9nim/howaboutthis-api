require('../src/initialize')

const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

const addMenuHandler = async (req, res) => {
    console.log('req.body._id', req.body._id)
    await Menu.deleteOne({_id: req.body._id})
    res.json({
        status: 'succeeded',
    })
}

module.exports = allowCors(addMenuHandler)
