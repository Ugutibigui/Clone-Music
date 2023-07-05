const connect = require('./connection')

async function getFlows() {
    const conn = await connect()
    const sql = 'SELECT * FROM flow'
    const [result] = await conn.query(sql)
    return result
}

module.exports = {
    getFlows
}