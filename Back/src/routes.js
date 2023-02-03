const routes = require("express").Router();

routes.get("/", (req, res) => {
      return res.json({hello: 'world'})
})

module.exports = routes