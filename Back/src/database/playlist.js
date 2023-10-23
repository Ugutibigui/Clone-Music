const connect = require("../database/connection")

async function getPlaylists(userId, playId, limit) {
    const conn = await connect()

    let sql = 'SELECT * FROM playlist where 1 = 1'

    const values = []

    if (userId) {
        sql +=  ' AND userId = ?'
        values.push(userId)
    }

    if (playId) {
        sql += ' AND playId = ?'
        values.push(playId)
    }

    if (limit) {
        sql += ' LIMIT ?'
        values.push(limit)
    }

    const [result] = await conn.query(sql, values)
    return result
}

async function createPlayMusic(param) {
    const conn = await connect()

    const sql = 'INSERT INTO listmusic(playId, idMusic) VALUES (?, ?)'
    const values = [param.playId, param.idMusic]
    await conn.query(sql, values)
}

module.exports = {
    getPlaylists,
    createPlayMusic,
}