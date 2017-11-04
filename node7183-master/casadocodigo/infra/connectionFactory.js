const mysql = require('mysql')


function connectionFactory() {
  const connection = mysql.createConnection({
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE
  })

  return connection
}

module.exports = () => connectionFactory
