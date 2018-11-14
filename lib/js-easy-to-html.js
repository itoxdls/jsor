'use strict'

const jsEasyToHtml = function (p) {
    if (p.tag instanceof Function) {
        return jsEasyToHtml(p.tag.apply(this, [p]));
    }
    let element = document.createElement(p.tagName || p.tag || 'div');
    Object.keys(p).map(function (g) {
        if (['tag', 'tagName', 'className', 'innerHTML', 'childNodes', 'style', 'setAttribute'].indexOf(g) === -1) {
            element[g.toLowerCase()] = p[g];
        }
        if (['className'].indexOf(g) !== -1) {
            element[g] = p[g];
        }
        if (g === 'innerHTML') {
            element.appendChild(document.createTextNode(p[g]));
        }
        if (g === 'childNodes' && p.childNodes !== false) {
            if (!p.childNodes instanceof Array) {
                p.childNodes = [p.childNodes];
            }
            p.childNodes.map(function (n) {
                if (n === true || n === false) {
                    return;
                }
                if (window['jQuery'] && n instanceof window['jQuery']) {
                    return element.appendChild(n.get(0));
                }
                if (typeof n === 'object' && n.nodeName) {
                    return element.appendChild(n);
                }
                if (n instanceof Array) {
                    return element.appendChild(jsEasyToHtml({'childNodes': n}));
                }
                element.appendChild(jsEasyToHtml(n));
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

module.exports = jsEasyToHtml;