async function connect(){
      if(global.connection && global.connection.state !== 'disconnected')
          return global.connection
      const mysql = require("mysql2/promise");
      let user = "root"
      let password = "12345"
      let host = "localhost"
      let port = "3306"
      let db = "clonemusic"
      const connection =  await mysql.createConnection(`mysql://${user}:${password}@${host}:${port}/${db}`)
                                              //       usuario:senha@host:porta/bancodedados
      console.log("conectou")
      global.connection = connection
      return connection
  }

  async function searchInfosLogin(param){
      const conn = await connect();
      console.log("aqui")
      const sql = 'SELECT * FROM users WHERE email = ? and password = SHA2(?,256);'
      const values = [param.email, param.password]
      return await conn.query(sql,values)
  }
  

  async function createUser(param){
    const conn = await connect()
    const sql = 'INSERT INTO users(name, email, password) VALUES(?,?,SHA2(?,256));'
    const values = [param.name, param.email, param.password]
    await conn.query(sql, values)
  }

  module.exports = {
      searchInfosLogin,
      createUser
  }