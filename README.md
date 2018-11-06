# js-easy-to-html
Js extension, javascript preprocessor to convert js objects to html elements, is a much cleaner syntax and we can generate it from the backend

# Install
```javascript
$ npm install js-easy-to-html
```

# Example

```javascript
import Html from 'js-easy-to-html';
 
console.log(
    Html({tag: 'div', id:1, className: 'my-class', childNodes: [
      {tag: 'p', innerHTML:'First element'},
      {tag: 'p', innerHTML:'Second element'}
    ]})
);

/* logs:
<div id="1" class="my-class">
  <p>First element</p>
  <p>Second element</p>
</div>
*/
```

# Example backend data

```javascript
import Html from 'js-easy-to-html';

//data from the backend
var data = '{"tag":"div","className":"my-class","id":"1","childNodes":[{"tag":"p","innerHTML":"First element"},{"tag":"p","innerHTML":"Second element"}]}';

console.log(
    Html(JSON.parse(data))
);

/* logs:
<div class="my-class" id="1">
  <p>First element</p>
  <p>Second element</p>
</div>
*/
```

# Example each data

```javascript
import Html from 'js-easy-to-html';

var data = [{name: 'First element'}, {name: 'Second element'}]
 
console.log(
    Html({tag: 'div', className: 'container', childNodes: data.map(function (e) {
      return {tag:'p', innerHTML:e.name};
    })})
);

/* logs:
<div class="container">
  <p>First element</p>
  <p>Second element</p>
</div>
*/
```

# Simple example, hidden element

```javascript
import Html from 'js-easy-to-html';

let enabled = false;

console.log(
    Html({tag: 'div', id:1, className: 'my-class', childNodes: [
      !enabled || {tag: 'p', innerHTML:'First element'},
      {tag: 'p', innerHTML:'Second element', style:{display:enabled || 'none'}},
      {tag: 'p', innerHTML:'Third element', className:enabled || 'hidde'}
    ]})
);

/* logs:
<div id="1" class="my-class">
  <p style="display: none;">Second element</p>
  <p class="hidde">Third element</p>
</div>
*/
```