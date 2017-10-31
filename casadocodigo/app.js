const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
    console.log('Recebeu requisição');
    res.send('<h1>Listagem de produtos</h1>');
})

const server = app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});

