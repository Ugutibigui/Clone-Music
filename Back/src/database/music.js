const connect = require("../database/connection")

async function getMusics(date, views, name, gender, user, smaller, bigger, descViews, descDate, limit, nationality) {
    const conn = await connect()

    let sql = 'SELECT * FROM music WHERE 1=1'

    const values = []
    if (date) {
        sql += ' AND YEAR(date) LIKE ?'
        values.push(`%${date}%`)
    }

    if (smaller) {
        sql += ' AND YEAR(date) <= ?'
        values.push(smaller)
    }

    if (bigger) {
        sql += ' AND YEAR(date) >= ?'
        values.push(bigger)
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
        sql += ' AND userId LIKE ?'
        values.push(`%${user}%`)
    }

    if (nationality) {
        sql += ' AND nationality = ?'
        values.push(nationality)
    }

    if (descViews) {
        sql += ' ORDER BY views DESC'
    }

    if (descDate) {
        sql += ' ORDER BY date DESC'
    }

    if (limit) {
        sql += ' LIMIT ?'
        values.push(limit)
    }

    const [result] = await conn.query(sql, values)
    return result
}

module.exports = {
    getMusics
}