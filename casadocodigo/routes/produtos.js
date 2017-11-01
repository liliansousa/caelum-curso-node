var connectionFactory = require('../infra/connectionFactory');

module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        const connection = connectionFactory();

        connection.query('SELECT * FROM livros', (error, result) =>{
            res.render('produtos/lista',{lista:result});
        });
        
        connection.end();
    })
}