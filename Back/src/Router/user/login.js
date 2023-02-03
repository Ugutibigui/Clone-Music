const express = require('express')
const router = express.Router()
const db = require("../../db/db")

router.post('/', async (req, res) => {
    let info = req.body;
    console.log(info)
     res.send("teste")
    try {
      console.log("Teste")
    } catch (err) {

    }

})

module.exports = router;