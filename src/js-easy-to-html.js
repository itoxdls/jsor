const html = function(p) {
    var j = document.createElement(p.tagName || p.tag);
    Object.keys(p).map(function (g) {
        if (['tag', 'tagName', 'childNodes', 'style', 'setAttribute'].indexOf(g) === -1) {
            j[g] = p[g];
        }
    });
    if (p.childNodes) {
        var l = p.childNodes.length;
        for (var i = 0; i < l; i++) {
            if (!p.childNodes[i]) {
                continue;
            }
            var element = html(p.childNodes[i]);
            j.appendChild(element);
        }
    }
    if (p.style) {
        var s;
        for (s in p.style)
        {
            j.style[s] = p.style[s];
        }
    }
    if (p.setAttribute) {
        var s;
        for (s in p.setAttribute) {
            j.setAttribute(s, p.setAttribute[s]);
        }
    }
    return j
}
module.exports = (e) => html(e).outerHTML;