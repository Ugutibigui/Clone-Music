const connect = require("../database/connection")

async function getPlaylists(userId, limit, search) {
    const conn = await connect()

    let sql = 'SELECT * FROM playlist where 1 = 1'

    const values = []

    if (userId) {
        sql +=  ' AND userId = ?'
        values.push(userId)
    }

    if (limit) {
        sql += ' LIMIT ?'
        values.push(limit)
    }

    const [result] = await conn.query(sql, values)
    return result
}

module.exports = {
    getPlaylists
}