const express = require('express')

const router = express.Router()
const db = require("../../database/playlist")

router.post('/', async(req, res, next) => {
    const info = req.body

    const response = {
        ok: false, 
        message: ""
    }

    try {
        await db.createPlayMusic(info)
        response.ok = true
        response.message = 'Música adicionada à playlist com sucesso'
        res.send(response)
    } catch (error) {
        console.log(`Erro em AddToPlaylist.js\nErro: ${error}`)
        response.message = error
        res.send(response)
    }
})

module.exports = router