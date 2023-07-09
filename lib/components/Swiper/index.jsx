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
exports.PaginationTypes = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var swiper_1 = __importStar(require("swiper"));
var react_2 = require("swiper/react");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var SwiperTypes_1 = require("./SwiperTypes");
Object.defineProperty(exports, "PaginationTypes", { enumerable: true, get: function () { return SwiperTypes_1.PaginationTypes; } });
var defaultProps = {
    component: 'div',
    centeredSlides: true,
    speed: 300,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    autoplay: false,
    pagination: false,
    lazy: false,
    virtual: false
};
var Swiper = function (props) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, children = _b.children, className = _b.className, loop = _b.loop, centeredSlides = _b.centeredSlides, speed = _b.speed, slidesPerView = _b.slidesPerView, spaceBetween = _b.spaceBetween, autoplay = _b.autoplay, pagination = _b.pagination, virtual = _b.virtual, lazy = _b.lazy, rest = __rest(_b, ["component", "children", "className", "loop", "centeredSlides", "speed", "slidesPerView", "spaceBetween", "autoplay", "pagination", "virtual", "lazy"]);
    swiper_1.default.use([
        swiper_1.Autoplay,
        swiper_1.Pagination,
        swiper_1.Virtual,
        swiper_1.Lazy,
        swiper_1.Navigation,
        swiper_1.Thumbs,
        swiper_1.Controller
    ]);
    var classOfSwiper = classnames_1.default(styles_module_scss_1.default.swiper, className, (_a = {},
        _a[styles_module_scss_1.default['has-pagination-bullet']] = pagination,
        _a));
    return (<Component className={classOfSwiper}>
      <react_2.Swiper centeredSlides={centeredSlides} loop={!virtual && loop} virtual={virtual} speed={speed} slidesPerView={slidesPerView} spaceBetween={spaceBetween} autoplay={autoplay} pagination={pagination} lazy={lazy} {...rest}>
        {children}
      </react_2.Swiper>
    </Component>);
};
Swiper.displayName = 'Swiper';
exports.default = Swiper;
//# sourceMappingURL=index.jsx.map