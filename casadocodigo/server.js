const app = require('./custom-express')();

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});