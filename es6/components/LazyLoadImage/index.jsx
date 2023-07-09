var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { PureComponent } from 'react';
const onImgError = (event, defaultImage) => {
    if (event.target.nodeName === 'IMG') {
        event.target.src = defaultImage;
        if (event.target.srcset) {
            event.target.srcset = defaultImage;
        }
        event.target.classList && event.target.classList.add('default');
    }
};
const defaultImg = '/static/images/default.png';
const storedImage = {};
class LazyLoadImage extends PureComponent {
    constructor() {
        super(...arguments);
        this.onLoad = (e) => {
            const src = e.target.src;
            if (!storedImage[src]) {
                storedImage[src] = true;
            }
        };
    }
    _customProps(props) {
        let { src, className } = props;
        const { 'data-src': dataSrc, default: defaultSrc } = props, rest = __rest(props, ['data-src', "default"]);
        if (!src) {
            src = defaultSrc || defaultImg;
        }
        if (storedImage[dataSrc]) {
            src = dataSrc;
            className = className && className.replace('lazyload', '');
        }
        return Object.assign({ src, className, 'data-src': dataSrc }, rest);
    }
    render() {
        return (<img onLoad={this.onLoad} onError={e => {
            onImgError(e, this.props.default || defaultImg);
        }} alt={this.props.alt} {...this._customProps(this.props)}/>);
    }
}
export default LazyLoadImage;
//# sourceMappingURL=index.jsx.map