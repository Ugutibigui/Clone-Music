const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const port = 8000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const login = require("./Router/user/login")
app.use("/user/login", login)

app.listen(port, () => {
      console.log("Servidor Ligadoo")
})