const http = require('http');
const porta = 3000;
const ip = 'localhost';

http.createServer(function (req, res){
  console.log('Recebendo request');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><h2>Mensagem de teste</h2></body></html>');
}).listen(porta, ip, function(){
    console.log('Servidor executando em http://'+ip+':'+porta);
    console.log('Para derrubar o servidor: ctrl + c');
})