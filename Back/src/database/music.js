const connect = require("../database/connection")

async function getMusics(date, views, name, gender, user) {
    const conn = await connect()

    let sql = 'SELECT * FROM music WHERE 1=1'

    const values = []
    if (date) {
        sql += ' AND date LIKE ?'
        values.push(`%${date}%`)
    }

    if (views) {
        sql += ' AND views >= ?'
        values.push(views)
    }

    if (name) {
        sql += ' AND name LIKE ?'
        values.push(`%${name}%`)
    }

    if (gender) {
        sql += ' AND gender = ?'
        values.push(gender)
    }

    if (user) {
        sql += ' AND userId = ?'
        values.push(user)
    }

    const [result] = await conn.query(sql, values)
    return result
}

module.exports = {
    getMusics
}