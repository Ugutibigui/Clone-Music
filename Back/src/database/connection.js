const connect = async () => {
    const mysql = require("mysql2/promise");

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    let user = "root"
    let password = ""
    let host = "localhost" // Fazer .env ao finalizar para segurança
    let port = "3306"
    let db = "clonemusic"

    const connection = await mysql.createConnection(`mysql://${user}:${password}@${host}:${port}/${db}`)
    //       usuario:senha@host:porta/bancodedados

    console.log("Conexão com Banco de Dados efetuada")
    global.connection = connection
    
    return connection
}

module.exports = connect