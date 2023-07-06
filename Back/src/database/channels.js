const connect = require('./connection')

async function getChannels(local) {
    const conn = await connect()
    const sql = "SELECT * FROM channels WHERE local = ?" 
    const values = [local]
    const [result] = await conn.query(sql, values)
    return result
}

module.exports = {
    getChannels
}
