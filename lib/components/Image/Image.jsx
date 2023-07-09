"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var compose_1 = __importDefault(require("@App/utils/compose"));
var useImageFallback_1 = __importDefault(require("@App/utils/hooks/useImageFallback"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var LazyLoadImage_1 = __importDefault(require("./../LazyLoadImage"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Image = function (props) {
    var fallback = props.fallback, src = props.src, alt = props.alt, onError = props.onError, className = props.className, rest = __rest(props, ["fallback", "src", "alt", "onError", "className"]);
    var _a = __read(useImageFallback_1.default(src, fallback), 2), sourceOfImage = _a[0], onFallback = _a[1];
    react_1.useEffect(function () {
        var isMissingSource = !src;
        var isDiffFallback = sourceOfImage !== fallback;
        var shouldCallFallback = isMissingSource && isDiffFallback;
        if (shouldCallFallback) {
            onFallback();
        }
    }, [src, sourceOfImage, fallback]);
    var handleOnError = compose_1.default(onFallback, onError);
    var imageClassName = classnames_1.default(styles_module_scss_1.default.image, className);
    return (<img alt={alt} src={sourceOfImage} onError={handleOnError} className={imageClassName} {...rest}/>);
};
exports.Image = Image;
var WrapperLazyLoadImage = function (props) {
    var src = props.src, lazyload = props.lazyload, fallback = props.fallback;
    var customProps = __assign({}, props);
    if (customProps.src) {
        delete customProps.src;
    }
    if (lazyload) {
        if (customProps.lazyload) {
            delete customProps.lazyload;
        }
        var dataSrc = src || fallback;
        return <LazyLoadImage_1.default data-src={dataSrc} {...customProps}/>;
    }
    return <exports.Image {...props}/>;
};
exports.default = WrapperLazyLoadImage;
//# sourceMappingURL=Image.jsx.map