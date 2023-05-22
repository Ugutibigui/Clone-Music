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


async function createUser(param) {
    const conn = await connect()
    const sql = 'INSERT INTO users(email, password, name, age, sex, artist) VALUES(?, SHA2(?,256), ?, ?, ?, ?);'
    const values = [param.email, param.password, param.username, param.age, param.sex, param.artist]
    await conn.query(sql, values)
}

module.exports = {
    searchInfosLogin,
    createUser
}