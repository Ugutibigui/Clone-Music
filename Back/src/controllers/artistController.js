const artistDatabase = require('../database/artists')

const getArtists = async (req, res) => {
    const number = req.query.limit || 500
    const limit = parseInt(number)

    const userId = req.query.user || ''
    const user = parseInt(userId)

    const artists = await artistDatabase.getArtists(limit, user)
    return res.status(200).json(artists)
}

module.exports = {
    getArtists
}