const connect = async () => {
    const mysql = require("mysql2/promise");

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const user = process.env.DB_USER
    const password = process.env.DB_PASS
    const host = process.env.DB_HOST 
    const port = process.env.DB_PORT
    const db = process.env.DB_NAME

    const connection = await mysql.createConnection(`mysql://${user}:${password}@${host}:${port}/${db}`)

    console.log("Conexão com Banco de Dados efetuada")
    global.connection = connection
    
    return connection
}

module.exports = connect