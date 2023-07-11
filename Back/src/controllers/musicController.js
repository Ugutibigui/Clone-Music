const musicDatabase = require('../database/music')

const getMusics = async (req, res) => {
    const dateNumber = req.query.date || ''
    const date = parseInt(dateNumber)

    const viewsNumber = req.query.views || ''
    const views = parseInt(viewsNumber)

    const name = req.query.nome || ''

    const gender = req.query.gender || ''

    const userId = req.query.user || ''
    const user = parseInt(userId)

    const musics = await musicDatabase.getMusics(date, views, name, gender, user)
    return res.status(200).json(musics)
}

module.exports = {
    getMusics
}