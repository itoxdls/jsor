// assert es la libreria que nos permite verificar cosas
const assert = require('assert')
// instanciamos el codifo de nuestra libreria
const jsor = require('./lib/jsor')

if(typeof document === 'undefined'){
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(`...`, { url: "https://example.org/" });
  global.window = dom.window;
  global.document = dom.window.document;
}

// describe es la forma en la que describimos que pasrá
describe('jsor', function() {
  it('should return a string representing a greeting', function() {
    assert.equal(
      jsor.render({tag: 'div', className: 'btn', id:1, style:{color:'#999'}, setAttribute:{color:'negro'}, childNodes: [
        {tag: 'p', innerHTML:'First element'},
        {tag: 'p', innerHTML:'Second element'}
      ]}).outerHTML,
      '<div class="btn" id="1" style="color: rgb(153, 153, 153);" color="negro"><p>First element</p><p>Second element</p></div>'
    )
  })
})