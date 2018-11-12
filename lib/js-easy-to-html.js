const html = function (p, register) {
    if (p.tag instanceof Function) {
        p = p.tag.apply(this, [p]);
    }
    let element = document.createElement(p.tagName || p.tag);
    Object.keys(p).map(function (g) {
        if (['tag', 'tagName', 'innerHTML', 'childNodes', 'style', 'setAttribute'].indexOf(g) === -1) {
            element[g] = p[g];
        }
        if (g === 'innerHTML') {
            element.appendChild(document.createTextNode(p[g]));
        }
        if (g === 'childNodes' && p.childNodes !== false) {
            p.childNodes.map(function (n) {
                if (n === true || n === false) {
                    return;
                }
                element.appendChild(html(n));
            });
        }
        if (g === 'setAttribute') {
            Object.keys(p.setAttribute).map(function (a) {
                element.setAttribute(a, p.setAttribute[a]);
            });
        }
        if (g === 'style') {
            Object.keys(p.style).map(function (s) {
                element.style[s] = p.style[s];
            });
        }
    });
    return element;
}
module.exports = html;