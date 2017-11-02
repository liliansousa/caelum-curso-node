module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.lista( (error, result) =>{
            res.render('produtos/lista',{lista:result});
        });

        app.get('/produtos/form', function(req,res){
            res.render('produtos/form');
        })

        app.post('/produtos',function (req,res){
            const livro = req.body;

            const connection = app.infra.connectionFactory();
            const produtos = new app.infra.ProdutoDao(connection);

            produtos.salva(livro, function(exception, result){
                res.render('produtos/salvo');
            })
        })
        
        connection.end();
    })
}