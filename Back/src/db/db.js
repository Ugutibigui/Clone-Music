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