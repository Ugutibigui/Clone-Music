const express = require('express')

const router = express.Router()
const db = require("../../database/repository")

router.post('/', async (req, res) => {
    const email = req.body.email

    let response = {
        ok: false,
        message: ""
    }

    try {
        const [existingUser] = await db.checkUser({email})
        const exists = existingUser.length == 0 
        
        response.ok = exists
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send("Ocorreu um erro ao checar email de usuario")
    }
})

module.exports = router;