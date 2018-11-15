# jsor

> jsor is a fast and very small JavaScript library with only 2.0 KB.

It helps convert javascript objects into HTML documents, this makes the code cleaner, clearer and more readable, the programming is simpler, easier and more reusable, it is compatible with most browsers since it uses native javascript.

If you are new to jsor, we recommend that you take a look at the information below.

# Browser
Script tag
```javascript
<script src="https://unpkg.com/jsor@1.0.4/dist/jsor.min.js"></script>
```

# Node
To include jsor in Node, first install with npm.
```javascript
$ npm install jsor
```

# Example

```javascript
import JSOR from 'jsor';
 
console.log(
    JSOR.render({tag: 'div', id:1, className: 'my-class', childNodes: [
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
import JSOR from 'jsor';

//data from the backend
var data = '{"tag":"div","className":"my-class","id":"1","childNodes":[{"tag":"p","innerHTML":"First element"},{"tag":"p","innerHTML":"Second element"}]}';

console.log(
    JSOR.render(JSON.parse(data))
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
import JSOR from 'jsor';

var data = [{name: 'First element'}, {name: 'Second element'}]
 
console.log(
    JSOR.render({tag: 'div', className: 'container', childNodes: data.map(function (e) {
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
import JSOR from 'jsor';

let enabled = false;

console.log(
    JSOR.render({tag: 'div', id:1, className: 'my-class', childNodes: [
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
const FirstElement = (props) => {
  return {tag: 'div', onClick: props.handleChange, childNodes: [
    {tag: 'h1', innerHTML: 'First element'}
  ]};
};

const SecondElement = (props) => {
  return {tag: 'div', onClick: props.handleChange, childNodes: [
    {tag: 'h1', innerHTML: 'Second element'}
  ]};
};

class Parent {
  constructor(props) {
    this.props = props;
  }
  handleChange(event) {
    console.log(event.target.innerHTML);
  }
  render() {
    return {tag: 'div', className: 'btn', style: {color: '#999'}, id: 'parent', childNodes: [
      {tag: FirstElement, handleChange: this.handleChange},
      {tag: SecondElement, handleChange: this.handleChange},
      this.props.childNodes
    ]};
  }
}

console.log(
  JSOR.render({tag: Parent, hide: true, childNodes: [
    {tag: 'div', childNodes: [
      {tag: 'h1', innerHTML: 'Third element'}
    ]}
  ]})
);

/* logs:
<div class="btn" id="parent" style="color: rgb(153, 153, 153);">
  <div><h1>First element</h1></div>
  <div><h1>Second element</h1></div>
  <div><div><h1>Third element</h1></div></div>
</div>
*/
```