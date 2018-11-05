# js-easy-to-html
Js extension, javascript preprocessor to convert js objects to html elements, is a much cleaner syntax and we can generate it from the backend

# Install
```javascript
$ npm install js-easy-to-html
```

# Example

```javascript
var Html = require('js-easy-to-html');
 
console.log(
    Html({tag: 'div', id=1, className: 'my-class', childNodes: [
      {tag: 'p', innerHTML:'First element'},
      {tag: 'p', innerHTML:'Second element'}
    ]});
)

/* logs:
<div class=the_class id=1>
  <p>First element</p>
  <p>Second element</p>
</div>
*/
```

# Example backend data

```javascript
var Html = require('js-easy-to-html');

//data from the backend
var data = {tag: 'div', className: 'my-class', id:1, childNodes: [{tag: 'p', innerHTML:'First element'},{tag: 'p', innerHTML:'Second element'}]};

console.log(
    Html(data)
);

/* logs:
<div class=the_class id=1>
  <p>First element</p>
  <p>Second element</p>
</div>
*/
```

# Example each data

```javascript
var Html = require('js-easy-to-html');

var data = [{name: 'First element'}, {name: 'Second element'}]
 
console.log(
    Html({tag: 'div', className: 'container', childNodes: data.map(function (e) {
                return {tag:'p', innerHTML:e.name};
    })});
)

/* logs:
<div class=the_class id=1>
  <p>First element</p>
  <p>Second element</p>
</div>
*/
```