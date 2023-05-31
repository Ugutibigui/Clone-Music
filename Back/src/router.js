const express = require('express')
const router = express.Router()

const artistController = require("./controllers/artistController")

router.get('/artists', artistController.getArtists)

module.exports = router