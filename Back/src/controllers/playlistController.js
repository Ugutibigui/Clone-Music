const playlistDatabase = require("../database/playlist")

const getPlaylist = async (req, res) => {
    const userIdNumber = req.query.user || ''
    const userId = parseInt(userIdNumber)

    const playIdNumber = req.query.playid || ''
    const playId = parseInt(playIdNumber)

    const limitNumber = req.query.limit || ''
    const limit = parseInt(limitNumber)

    const playlists = await playlistDatabase.getPlaylists(userId, playId, limit)
    return res.status(200).json(playlists)
}

module.exports = {
    getPlaylist
}