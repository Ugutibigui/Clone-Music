const express = require('express')

const router = express.Router()
const db = require('../../database/repository')

router.post('/', async(req, res, next) => {
    const info = req.body

    const response = {
        ok: false,
        message: ""
    }

    try {
        await db.createPlaylist(info)
        response.ok = true
        response.message = 'Playlist Criada'
        res.send(response)
    } catch (error) {
        console.log(`Erro em CreatePlaylist.js\nErro: ${error}`)
        res.send(error)
    }
})

module.exports = router