const mysql = require('mysql');
const databaseName = 'casadocodigo';

function createConnection(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'caelum',
        database: 'casadocodigo'
    });
}
//module.exports = () => createConnection
module.exports = function(){
    return createConnection;
}