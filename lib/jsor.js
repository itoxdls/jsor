const JSOR = {
    Component: class Component {
        constructor(props){
            this.props = props;
            this.state;
        }
        setState (state){
            this.state = {...this.state, ...state};
            let ne = JSOR.render(this.render.apply(this, [this.props]));
            this.___render.replaceWith(ne);
            this.___render = ne;
        }
    },
    render: function (p) {
        if (p.tag instanceof Function) {
            let cl = new p.tag(p);
            if (cl instanceof p.tag) {
                cl.___render = JSOR.render(cl.render.apply(cl, [p]));
                ['componentDidMount'].map(m => cl[m] && cl[m]());
                return cl.___render;
            }
            return JSOR.render(p.tag.apply(null, [p]));
        }
        let np = p.tagName || p.tag || 'div';
        let nsn = (np.indexOf(':') !== -1 ? np : ':' + np).split(':'), n = nsn[1], ns = nsn[0];

        let element = typeof p === 'string' || typeof p === 'number' 
        ? document.createTextNode(p) 
        : (ns ? document.createElementNS('http://www.' + ns, n) : document.createElement(n));
        Object.keys(p).map(function (g) {
            if (g.indexOf('on') === 0) {
                return element[g.toLowerCase()] = p[g];
            }
            if (g === 'innerHTML' && p[g] !== null && typeof(p[g]) === 'object') {
                element.appendChild(JSOR.render(p[g]));
                return;
            }
            if (g === 'childNodes' && p.childNodes !== false) {
                if (!Array.isArray(p.childNodes)) {
                    p.childNodes = [p.childNodes];
                }
                p.childNodes.map(function (n) {
                    if (n === true || n === false || typeof n === 'undefined') {
                        return;
                    }
                    if (window['jQuery'] && n instanceof window['jQuery']) {
                        return element.appendChild(n.get(0));
                    }
                    if (typeof n === 'object' && n.nodeName) {
                        return element.appendChild(n);
                    }
                    if (n instanceof Array) {
                        return n.map(function (n) {
                            n && element.appendChild(JSOR.render(n));
                        });
                    }
                    element.appendChild(JSOR.render(n));
                });
                return;
            }
            if (g === 'setAttribute') {
                return Object.keys(p.setAttribute).map(function (a) {
                    element.setAttribute(a, p.setAttribute[a]);
                });
            }
            if (g === 'style') {
                return Object.keys(p.style).map(function (s) {
                    element.style[s] = p.style[s];
                });
            }
            element[g] = p[g];
        });
        return element;
    }
}

module.exports = JSOR;