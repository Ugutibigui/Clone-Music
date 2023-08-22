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

      let response = {
            ok: false,
            message: '',
            userInfo: ''
      }

      try {
            if (!email || !password) {
                  return { erro: 'Dados insuficientes.' }
            }

            const [login] = await db.searchInfosLogin(param)

            const secret = process.env.SECRET

            if (login.length > 0) {
                  const Token = jwt.sign({ // Obtendo Token
                        id: login[0].userId,
                        name: login[0].name,
                        email: login[0].email,
                        photo: login[0].photo,
                        artist: login[0].artist === 0 ? false : true
                  }, secret, { expiresIn: '1h' })

                  const payload = Token.split('.')[1] // Decodificando Token
                  const decodedPayload = JSON.parse(atob(payload))
                  const userInformation = decodedPayload

                  response.ok = true
                  response.message = 'logged'
                  response.userInfo = userInformation
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