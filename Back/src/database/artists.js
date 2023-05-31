const connect = require('./connection')

async function getArtists() {
    const conn = await connect()
    const sql = 'select * from users where artist = 1'
    return await conn.query(sql)
}

module.exports = {
    getArtists
}