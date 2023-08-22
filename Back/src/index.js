require('dotenv').config()

const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express();
const port = 8000

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const router = require('./router')
app.use(router)

const createUser = require("./Router/user/createUser")
app.use("/user/createUser", createUser)

const login = require("./Router/user/login")
app.use("/user/login", login)

const logado = require("./Router/user/logado")
app.use("/user/verifyLogin", logado)

const logoff = require("./Router/user/logoff")
app.use("/user/logoff", logoff)

const checkUser = require("./Router/user/checkExistingUser")
app.use("/user/checkExistingUser", checkUser)

const privateRoute = require("./Router/user/privateRoute")
app.use("/user/:id", privateRoute)

const createMusic = require("./Router/music/createMusic")
app.use("/music/createMusic", createMusic)

app.listen(port, () => {
      console.log("Servidor Online!")
})