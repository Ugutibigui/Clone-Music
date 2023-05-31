const express = require('express')

const router = express.Router()
const db = require("../../database/repository")

router.post('/', async (req, res, next) => {
      let info = req.body;

      var response = {
            ok: false,
            message: ""
      }

      try{
            await db.createUser(info)
            response.ok = true
            response.message = "Deu certo"
            res.send(response)

      } catch (err){
            console.log(err)
            res.send(err)
      }
})

module.exports = router;