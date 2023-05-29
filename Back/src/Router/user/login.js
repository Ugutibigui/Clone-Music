const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const db = require("../../db/db")

router.post('/', async (req, res) => {
      let info = req.body;
      const email = info.email
      const password = info.password

      var param = {
            email: email,
            password: password
      }

      var response = {
            ok: false,
            message: ""
      }

      try {
            if (!email || !password) {
                  return { erro: 'Dados insuficientes.' }
            }

            const [login] = await db.searchInfosLogin(param);

            if (login.length > 0) { 
                   let Token = await jwt.sign({
                        id: login.id,
                        name: login.name,
                        email: login.email
                  }, 'passwordForToken');

                  //salva o token nos cookies

                  response.ok = true
                  response.message = 'logged'
                  res.cookie('Token', Token);
                  res.status(200).send(response)
            } else {
                  response.ok = false
                  response.message = 'E-mail ou senha incorretos'
                  res.json(response)
            }
      } catch (err) {
            console.log(err)
            res.send("Ocorreu um erro interno")
      }
      
})

module.exports = router;