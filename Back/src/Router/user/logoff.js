const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()
const db = require("../../database/repository")

router.post('/', async (req, res, next) => {

      var response = {
            ok: true,
            message: "Logoff"
      }
      
      res.clearCookie("Token");
      res.send(response)
})

module.exports = router;