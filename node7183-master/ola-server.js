/* https://github.com/CaelumAulas/node7183 */

const http = require('http')
const ip = '127.0.0.1' //localhost  0.0.0.0
const port = 3000

http.createServer(function(req, res) {
  const routes = []
  routes['/'] = '<h1>HOME</h1>'
  routes['/contatos'] = '<h1>CONTATOS</h1>'

  res.writeHead(200, {'Content-type': 'text/html'})
  res.end(routes[req.url] || '<h1>404</h1>')

}).listen(port, ip, function() {
  console.log('Servidor de pé em http://localhost:3000')
  console.log('Pra derrubar o servidor: ctrl + c')
})
