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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RightArrowV3_1 = __importDefault(require("lms-icons/components/RightArrowV3"));
var classnames_1 = __importDefault(require("classnames"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var react_1 = __importStar(require("react"));
var react_image_gallery_1 = __importDefault(require("react-image-gallery"));
var Icon_1 = __importDefault(require("../Icon"));
var Image_1 = __importDefault(require("../Image"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    images: [],
    lazyLoad: true,
    showPlayButton: false,
};
var Gallery = react_1.default.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), images = _a.images, className = _a.className, rest = __rest(_a, ["images", "className"]);
    var refOfRoot = ref || react_1.default.useRef(null);
    var formatGalleryImages = react_1.useCallback(function () {
        return images.map(function (x) { return ({
            original: x.url,
            thumbnail: x.url,
            thumbnailClass: styles_module_scss_1.default["wrapper-image-thumbnail"],
        }); });
    }, [images]);
    function _renderThumbInner(image) {
        return (<Image_1.default className={styles_module_scss_1.default["image-thumbnail"]} src={image.thumbnail}/>);
    }
    function _handleClickImage() {
        if (refOfRoot && refOfRoot.current && refOfRoot.current.fullScreen) {
            refOfRoot.current.fullScreen();
        }
    }
    var _renderLeftNav = function (onClick, disabled) {
        return (<Icon_1.default onClick={onClick} component={RightArrowV3_1.default} className={classnames_1.default(styles_module_scss_1.default["left-arrow"], styles_module_scss_1.default["arrow"])}/>);
    };
    var _renderRightNav = function (onClick, disabled) {
        return (<Icon_1.default onClick={onClick} component={RightArrowV3_1.default} className={classnames_1.default(styles_module_scss_1.default["right-arrow"], styles_module_scss_1.default["arrow"])}/>);
    };
    var classOfRoot = classnames_1.default(styles_module_scss_1.default["root"], className);
    if (!isEmpty_1.default(images)) {
        return (<react_image_gallery_1.default ref={refOfRoot} items={formatGalleryImages()} additionalClass={classOfRoot} renderThumbInner={_renderThumbInner} onClick={_handleClickImage} renderLeftNav={_renderLeftNav} renderRightNav={_renderRightNav} {...rest}/>);
    }
    return null;
});
exports.default = react_1.default.memo(Gallery);
//# sourceMappingURL=Gallery.jsx.map