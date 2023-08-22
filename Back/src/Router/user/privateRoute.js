const express = require('express')
const router = express.Router()

const db = require("../../database/repository")

router.get("/", db.checkToken, async (req, res) => {
    const id = req.params.id

     const [user] = await db.checkById(id)

     console.log(user)
})