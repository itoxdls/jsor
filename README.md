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
    var Html({tag: 'div', className: 'my-class', id:47, childNodes: [
      {tag: 'p', innerHTML:'First element'},
      {tag: 'p', innerHTML:'Second element'}
    ]});
)

/* logs:
<div class=the_class id=47>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
*/
```

# Example backend data

```javascript
var Html = require('js-easy-to-html');

var data = {tag: 'div', className: 'my-class', id:47, childNodes: [{tag: 'p', innerHTML:'First element'},{tag: 'p', innerHTML:'Second element'}]};

console.log(Html(data));
```

# Example each data

```javascript
var Html = require('js-easy-to-html');

var data = [{name: 'First paragraph'}, {name: 'Second paragraph'}]
 
console.log(
    var Html({tag: 'div', className: 'container', childNodes: data.map(function (e) {
                return {tag:'p', innerHTML:e.name};
            })});
)

/* logs:
<div class=the_class id=47>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
*/
```