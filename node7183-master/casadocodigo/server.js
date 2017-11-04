// import { app, coiso } from './custom-express'
const app = require('./custom-express')()
const ip = 'localhost'
const port = 3001

app.listen(port, () => {
  console.log('Servidor de pé em ' +
  'http://' + ip + ':' + port)
  console.log(`Servidor de pé em http://${ip}:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
