const express = require('express')
const router = express.Router()

const artistController = require("./controllers/artistController")
const flowController = require("./controllers/flowController")
const channelController = require("./controllers/channelController")
const musicController = require("./controllers/musicController")

router.get('/artists', artistController.getArtists)
router.get('/flows', flowController.getFlows)
router.get('/channels', channelController.getChannels)
router.get('/musics', musicController.getMusics)

module.exports = router