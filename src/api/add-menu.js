const allowCors = require('../utils/cors')

const addMenuHandler = (req, res) => {
    console.log(typeof req.body)
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies
    })
}

module.exports = allowCors(addMenuHandler)
