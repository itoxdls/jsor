# js-easy-to-html

> jsEasyToHtml is a fast and very small JavaScript library with only 2.0 KB.

It helps convert javascript objects into HTML documents, this makes the code cleaner, clearer and more readable, the programming is simpler, easier and more reusable, it is compatible with most browsers since it uses native javascript.

If you are new to jsEasyToHtml, we recommend that you take a look at the information below.

# Browser
Script tag
```javascript
<script src="https://unpkg.com/js-easy-to-html@1.0.22/dist/js-easy-to-html.min.js"></script>
```

# Node
To include jsEasyToHtml in Node, first install with npm.
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

# Separate by components

```javascript
var ChildA = (props) => {
  return {tag: 'div', onClick: props.handleChange, childNodes: [
      {tag: 'h1', innerHTML: 'Score: 1'}
  ]};
};

var ChildB = (props) => {
  return {tag: 'div', onClick: props.handleChange, childNodes: [
      {tag: 'h1', innerHTML: 'Score: 2'}
  ]};
};

var Parent = () => {
  handleChange = function (event) {
      console.log(event.target.innerHTML);
  };
  return {tag: 'div', id: 'parent', childNodes: [
      {tag: ChildA, handleChange: this.handleChange},
      {tag: ChildB, handleChange: this.handleChange}
  ]};
};

console.log(
  Html({tag: Parent})
);

/* logs:
<div id="parent">
  <div>
    <h1>Score: 1</h1>
  </div>
  <div>
    <h1>Score: 2</h1>
  </div>
</div>
*/
```