const express = require('express')

const router = express.Router()
const db = require("../../database/repository")

router.post('/', async (req, res, next) => {
    let info = req.body

    let response = {
        ok: false,
        message: ""
    }

    try {
        await db.createMusic(info)
        response.ok = true
        response.message = "Música criada"
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router;