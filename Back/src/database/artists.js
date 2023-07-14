const connect = require('./connection')

async function getArtists(limit, user, name) {
    const conn = await connect()
    let sql = 'SELECT * FROM users WHERE artist = 1'

    const values = []

    if (user) {
        sql += ' AND userId = ?'
        values.push(user)
    }
    
    if (name) {
        sql += ' AND name LIKE ?'
        values.push(name)
    }

    if (limit) {
        sql += ' LIMIT ?'
        values.push(limit)
    }

    const [result] =  await conn.query(sql, values)
    return result
}

module.exports = {
    getArtists
}