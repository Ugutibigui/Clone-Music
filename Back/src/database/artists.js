const connect = require('./connection')

async function getArtists(limit) {
    const conn = await connect()
    const sql = 'SELECT * FROM users WHERE artist = 1 LIMIT ?'
    const values = [limit]
    const [result] =  await conn.query(sql, values)
    return result
}

module.exports = {
    getArtists
}