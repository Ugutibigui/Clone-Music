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

    const name = req.query.nome || ''

    const gender = req.query.gender || ''

    const userId = req.query.user || ''
    const user = parseInt(userId)

    const desc = req.query.desc || ''

    const limitNumber = req.query.limit || ''
    const limit = parseInt(limitNumber)

    const musics = await musicDatabase.getMusics(date, views, name, gender, user, smallerDate, BiggerDate, desc, limit)
    return res.status(200).json(musics)
}

module.exports = {
    getMusics
}