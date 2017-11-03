module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.lista( (error, result) =>{
            res.format({
                html: function(){
                    res.render('produtos/lista',{lista:result});
                },
                json: () =>{
                    res.json(result)
                }
            }); 
        });
    
        app.get('/produtos/form', function(req,res){
            res.render('produtos/form');
        })

        app.post('/produtos',function (req,res){
            const livro = req.body;

            req.assert('titulo','Titulo deve ser preenchido').notEmpty();
            req.assert('preco','Preco deve ser um numero').isFloat();

            const errors= req.validationErrors();

            if (errors){
                console.log('Há erros de validação');
                res.format({
                    html : () => {
                        res.status(400).render('produtos/form', {validationErrors: errors});
                    },
                    json : () => {
                        res.status(400).send(errors);
                    }
                })
            }


            const connection = app.infra.connectionFactory();
            const produtos = new app.infra.ProdutoDao(connection);

            produtos.salva(livro, function(exception, result){
                res.redirect('produtos/');
            })
        })
        
        connection.end();
    })
}