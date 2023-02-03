const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express();
const port = 8000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

const login = require("./Router/user/login")
app.use("/user/login", login)

const logado = require("./Router/user/logado")
app.use("user/verifyLogin", logado)

const logoff = require("./Router/user/logoff")
app.use("user/logoff", logoff)


app.use("/", (req, res) => {
      res.send("bom dia")
})

app.listen(port, () => {
      console.log("Servidor Ligadoo")
})