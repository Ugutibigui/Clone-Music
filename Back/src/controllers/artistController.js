const artistDatabase = require('../database/artists')

const getArtists = async (req, res) => {
    const number = req.query.limit || 200;
    limit = parseInt(number)
    const artists = await artistDatabase.getArtists(limit)
    return res.status(200).json(artists)
}

module.exports = {
    getArtists
}