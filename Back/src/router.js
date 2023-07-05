const express = require('express')
const router = express.Router()

const artistController = require("./controllers/artistController")
const flowController = require("./controllers/flowController")

router.get('/artists', artistController.getArtists)
router.get('/flows', flowController.getFlows)

module.exports = router