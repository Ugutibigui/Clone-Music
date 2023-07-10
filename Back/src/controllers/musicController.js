const musicDatabase = require('../database/music')

const getMusics = async (req, res) => {
    const dateNumber = req.query.date || ''
    const date = parseInt(dateNumber)

    const viewsNumber = req.query.views || ''
    const views = parseInt(viewsNumber)

    const musics = await musicDatabase.getMusics(date, views)
    return res.status(200).json(musics)
}

module.exports = {
    getMusics
}