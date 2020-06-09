const allowCors = require('../src/utils/cors')
const Menu = require('../src/models/menu')

const addMenuHandler = async (req, res) => {
    await Menu.create(req.body)
    res.json({
        status: 'succeeded',
    })
}

module.exports = allowCors(addMenuHandler)
