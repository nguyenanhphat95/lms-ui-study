"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var onImgError = function (event, defaultImage) {
    if (event.target.nodeName === 'IMG') {
        event.target.src = defaultImage;
        if (event.target.srcset) {
            event.target.srcset = defaultImage;
        }
        event.target.classList && event.target.classList.add('default');
    }
};
var defaultImg = '/static/images/default.png';
var storedImage = {};
var LazyLoadImage = (function (_super) {
    __extends(LazyLoadImage, _super);
    function LazyLoadImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLoad = function (e) {
            var src = e.target.src;
            if (!storedImage[src]) {
                storedImage[src] = true;
            }
        };
        return _this;
    }
    LazyLoadImage.prototype._customProps = function (props) {
        var src = props.src, className = props.className;
        var dataSrc = props["data-src"], defaultSrc = props.default, rest = __rest(props, ['data-src', "default"]);
        if (!src) {
            src = defaultSrc || defaultImg;
        }
        if (storedImage[dataSrc]) {
            src = dataSrc;
            className = className && className.replace('lazyload', '');
        }
        return __assign({ src: src, className: className, 'data-src': dataSrc }, rest);
    };
    LazyLoadImage.prototype.render = function () {
        var _this = this;
        return (<img onLoad={this.onLoad} onError={function (e) {
            onImgError(e, _this.props.default || defaultImg);
        }} alt={this.props.alt} {...this._customProps(this.props)}/>);
    };
    return LazyLoadImage;
}(react_1.PureComponent));
exports.default = LazyLoadImage;
//# sourceMappingURL=index.jsx.map