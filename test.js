// assert es la libreria que nos permite verificar cosas
const assert = require('assert')
// instanciamos el codifo de nuestra libreria
const mylib = require('./lib')

// describe es la forma en la que describimos que pasrá
describe('MyLib', function() {
  describe('#hello()', function() {
    it('should return a string representing a greeting', function() {
      assert.equal(mylib.hello(), "Hello!")
    })
  })
})