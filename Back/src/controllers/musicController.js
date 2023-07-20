const musicDatabase = require('../database/music')

const getMusics = async (req, res) => {
    const dateNumber = req.query.date || ''
    const date = parseInt(dateNumber)

    const smallerDateNumber = req.query.smaller
    const smallerDate = parseInt(smallerDateNumber)

    const BiggerDateNumber = req.query.bigger
    const BiggerDate = parseInt(BiggerDateNumber)

    const viewsNumber = req.query.views || ''
    const views = parseInt(viewsNumber)

    const name = req.query.name || ''

    const gender = req.query.gender || ''

    const userId = req.query.user || ''
    const user = parseInt(userId)

    const descViews = req.query.descviews || ''

    const descDate = req.query.descdate || ''

    const limitNumber = req.query.limit || ''
    const limit = parseInt(limitNumber)

    const nationality = req.query.nationality || ''

    const musics = await musicDatabase.getMusics(date, views, name, gender, user, smallerDate, BiggerDate, descViews, descDate, limit, nationality)
    return res.status(200).json(musics)
}

module.exports = {
    getMusics
}