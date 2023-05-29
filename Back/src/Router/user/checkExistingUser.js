const express = require('express')

const router = express.Router()
const db = require("../../db/db")

router.post('/', async (req, res) => {
    const { email } = req.body

    try {
        const [existingUser] = await db.checkUser(email)
        const exists = existingUser.length > 0 // ajustar depois

        res.json({ exists })
    } catch (error) {
        console.log(err)
        res.send("Ocorreu um erro ao checar email de usuario")
    }
})

module.exports = router;