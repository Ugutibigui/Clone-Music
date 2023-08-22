const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const db = require("../../database/repository")

router.post('/', async (req, res) => {
      let info = req.body

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

            const secret = process.env.SECRET

            if (login.length > 0) { 
                  const Token = jwt.sign({
                        id: login.id,
                        name: login.name,
                        email: login.email
                  }, secret);

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