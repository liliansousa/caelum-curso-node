
const express = require('../../custom-express')()
const request = require('supertest')(express)

describe('#ProdutosRoutes', () => {
  it('lista de produtos como html', (done) => {
    request.get('/produtos')
           .set('Accept', 'text/html')
           .expect('Content-type', /html/)
           .expect(200, done)
  })

  it('lista de produtos como json', (done) => {
    request.get('/produtos')
           .set('Accept', 'application/json')
           .expect('Content-type', /json/)
           .expect(200, done)
  })
})
