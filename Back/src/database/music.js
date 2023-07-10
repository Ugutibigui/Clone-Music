const connect = require("../database/connection")

async function getMusics(date, views) {
    const conn = await connect()

    let sql = 'SELECT * FROM music WHERE 1=1'

    const values = []
    if (date) {
        sql += ' AND date LIKE "%?%"'
        values.push(date)
    }

    if (views) {
        sql += ' AND views >= ?'
        values.push(views)
    }

    const [result] = await conn.query(sql, values)
    return result
}

module.exports = {
    getMusics
}