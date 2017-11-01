module.exports = (app) => {

    app.get('/produtos', (req, res) => {
       const mysql = require('mysql');

       const connection = mysql.createConnection({
           host : 'localhost',
           user : 'root',
           password : 'caelum',
           database : 'casadocodigo'
       });

       connection.query('SELECT * FROM livros', (error, result) =>{
           res.render('produtos/lista',{lista:result});
       });

       connection.end();
    });

}