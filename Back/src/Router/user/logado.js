const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()
const db = require("../../db/db")

router.post('/', async (req, res, next) => {
      let info = req.body;

      var response = {
            ok: false,
            message: ""
      }

      var Auth = rew.cookie.Token || null

      if (typeof (Auth) == 'undefined' || Auth == '' || Auth == null) {
            response.message = "Não autorizado"
            return res.send( response )
      } else {
            try {
                  Token = await jwt.verify(Auth, 'passwordForToken');
                  next()
                  response.ok = true
                  res.send( response )
            } catch (err) {
                  response.message = "Não autorizado"
                  return res.send( response )
            }
      }
})

module.exports = router;