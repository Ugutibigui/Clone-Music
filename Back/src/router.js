const express = require('express')
const router = express.Router()

const artistController = require("./controllers/artistController")
const flowController = require("./controllers/flowController")
const channelController = require("./controllers/channelController")

router.get('/artists', artistController.getArtists)
router.get('/flows', flowController.getFlows)
router.get('/channels', channelController.getChannels)

module.exports = router