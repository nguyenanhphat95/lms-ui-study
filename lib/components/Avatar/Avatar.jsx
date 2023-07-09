"use strict";
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
exports.Avatar = void 0;
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function useLoaded(_a) {
    var src = _a.src, srcSet = _a.srcSet;
    var _b = __read(React.useState(null), 2), loaded = _b[0], setLoaded = _b[1];
    React.useEffect(function () {
        if (!src && !srcSet) {
            return undefined;
        }
        setLoaded(false);
        var active = true;
        var image = new Image();
        image.src = src;
        image.srcSet = srcSet;
        image.onload = function () {
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = function () {
            if (!active) {
                return;
            }
            setLoaded('error');
        };
        return function () {
            active = false;
        };
    }, [src, srcSet]);
    return loaded;
}
exports.Avatar = React.forwardRef(function Avatar(props, ref) {
    var _a;
    var alt = props.alt, childrenProp = props.children, className = props.className, _b = props.component, Component = _b === void 0 ? 'div' : _b, imgProps = props.imgProps, sizes = props.sizes, src = props.src, srcSet = props.srcSet, _c = props.variant, variant = _c === void 0 ? 'circular' : _c, other = __rest(props, ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);
    var children = null;
    var loaded = useLoaded({ src: src, srcSet: srcSet });
    var hasImg = src || srcSet;
    var hasImgNotFailing = hasImg && loaded !== 'error';
    if (src && hasImgNotFailing) {
        children = (<img alt={alt} src={src} srcSet={srcSet} sizes={sizes} className={styles_module_scss_1.default.img} {...imgProps}/>);
    }
    else if (childrenProp != null) {
        children = childrenProp;
    }
    else if (hasImg && alt) {
        children = alt[0];
    }
    else {
        children = <img className={styles_module_scss_1.default.fallback} src="/static/images/defaultAvatar.png"/>;
    }
    return (<Component className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default.system, styles_module_scss_1.default[variant], (_a = {},
        _a[styles_module_scss_1.default.colorDefault] = !hasImgNotFailing,
        _a), className)} ref={ref} {...other}>
      {children}
    </Component>);
});
exports.default = exports.Avatar;
//# sourceMappingURL=Avatar.jsx.map