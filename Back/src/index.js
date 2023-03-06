const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express();
const port = 8000

app.use(cors({
      origin: 'http://localhost:8000'
}))

app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      next();
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const createUser = require("./Router/user/createUser")
app.use("/user/createUser", createUser)

const login = require("./Router/user/login")
app.use("/user/login", login)

const logado = require("./Router/user/logado")
app.use("/user/verifyLogin", logado)

const logoff = require("./Router/user/logoff")
app.use("/user/logoff", logoff)

app.listen(port, () => {
      console.log("Servidor Ligado")
})