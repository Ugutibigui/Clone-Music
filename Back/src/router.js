 const express = require('express')
const router = express.Router()

const artistController = require("./controllers/artistController")
const flowController = require("./controllers/flowController")
const channelController = require("./controllers/channelController")
const musicController = require("./controllers/musicController")
const fansController = require("./controllers/fansController")
const playlistController = require("./controllers/playlistController")
const usercontrollers = require("./controllers/userController")

router.get('/artists', artistController.getArtists)
router.get('/flows', flowController.getFlows)
router.get('/channels', channelController.getChannels)
router.get('/musics', musicController.getMusics)
router.get('/list', musicController.getListMusic)
router.get('/fans', fansController.getFans)
router.get('/playlist', playlistController.getPlaylist)
router.get('/user', usercontrollers.getUsers)

module.exports = router