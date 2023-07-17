const connect = require("./connection")

async function getFans(user, amount) {
    const conn = await connect()
    let sql = 'SELECT * FROM fans WHERE 1=1'

    const values = []

    if (user) {
        sql += ' AND userId = ?'
        values.push(user)
    }

    if (amount) {
        sql += ' AND fansCount >= ?'
        values.push(amount)
    }

    const [result] =  await conn.query(sql, values)
    return result
}

module.exports = {
    getFans
}