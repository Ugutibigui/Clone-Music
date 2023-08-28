const connect = require('./connection')

async function getUsers(limit, user) {
    const conn = await connect()

    let sql = 'SELECT * FROM users WHERE 1 = 1'
    const values = []

    if (user) {
        sql += ' AND userId = ?'
        values.push(user)
    }

    if (limit) {
        sql += ' LIMIT ?'
        values.push(limit)
    }

    const [result] =  await conn.query(sql, values)
    return result
}

module.exports = {
    getUsers
}