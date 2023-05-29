async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection
    const mysql = require("mysql2/promise");
    let user = "root"
    let password = ""
    let host = "localhost"
    let port = "3306"
    let db = "clonemusic"
    const connection = await mysql.createConnection(`mysql://${user}:${password}@${host}:${port}/${db}`)
    //       usuario:senha@host:porta/bancodedados
    console.log("Conexão com Banco de Dados efetuada")
    global.connection = connection
    return connection
}

async function searchInfosLogin(param) {
    const conn = await connect();
    const sql = 'SELECT * FROM users WHERE email = ? and password = SHA2(?,256);'
    const values = [param.email, param.password]
    return await conn.query(sql, values)
}

async function checkUser(param) {
    const conn = await connect()
    const sql = 'SELECT * FROM users WHERE email = ?'
    const values = [param.email]
    return await conn.query(sql, values)
}


async function createUser(param) {
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