// assert es la libreria que nos permite verificar cosas
const assert = require('assert')
// instanciamos el codifo de nuestra libreria
const Html = require('./lib/js-easy-to-html')

if(typeof document === 'undefined'){
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(`...`, { url: "https://example.org/" });
  global.document = dom.window.document;
}

// describe es la forma en la que describimos que pasrá
describe('js-easy-to-html', function() {
  it('should return a string representing a greeting', function() {
    assert.equal(
      Html({tag: 'div', id:1, style:{color:'#999'}, childNodes: [
        {tag: 'p', innerHTML:'First element'},
        {tag: 'p', innerHTML:'Second element'}
      ]}).outerHTML,
      '<div id="1" style="color: rgb(153, 153, 153);"><p>First element</p><p>Second element</p></div>'
    )
  })
})