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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwiperItem = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("swiper/react");
var defaultProps = {};
var SwiperItem = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), children = _a.children, className = _a.className;
    return <react_2.SwiperSlide className={className}>{children}</react_2.SwiperSlide>;
};
exports.SwiperItem = SwiperItem;
exports.default = react_2.SwiperSlide;
//# sourceMappingURL=index.jsx.map