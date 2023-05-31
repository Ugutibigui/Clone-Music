const connect = require('./connection')

const searchInfosLogin = async (param) => {
    const conn = await connect();
    const sql = 'SELECT * FROM users WHERE email = ? and password = SHA2(?,256);'
    const values = [param.email, param.password]
    return await conn.query(sql, values)
}

const checkUser = async (param) => {
    const conn = await connect()
    const sql = 'SELECT * FROM users WHERE email = ?'
    const values = [param.email]
    return await conn.query(sql, values)
}


const createUser = async (param) => {
    const conn = await connect()
    const sql = 'INSERT INTO users(email, password, name, username, age, sex, artist) VALUES(?, SHA2(?,256), ?, ?, ?, ?, ?);'
    const values = [param.email, param.password, param.name, param.username, param.age, param.sex, param.artist]
    const result = await conn.query(sql, values)
    const userId = result[0].insertId;

    if (param.artist === 1) {
        const sqlFans = 'INSERT INTO fans(userId, fansCount) VALUES (?, 0);'
        const valueFans = [userId]
        await conn.query(sqlFans, valueFans);
    }
}

module.exports = {
    searchInfosLogin,
    checkUser,
    createUser
}