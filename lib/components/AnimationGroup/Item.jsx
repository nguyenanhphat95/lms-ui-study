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
exports.AnimationItem = exports.AnimationItemTypes = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var AnimationItemTypes;
(function (AnimationItemTypes) {
    AnimationItemTypes["SlideTop"] = "SlideTop";
})(AnimationItemTypes = exports.AnimationItemTypes || (exports.AnimationItemTypes = {}));
var animations = new Map().set(AnimationItemTypes.SlideTop, {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '17.5%' },
    transition: {
        type: 'spring',
        stiffness: 275,
        damping: 17.5
    }
});
var defaultProps = {
    component: 'div',
    className: null
};
var AnimationItem = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), component = _a.component, type = _a.type, children = _a.children, rest = __rest(_a, ["component", "type", "children"]);
    var Framer = framer_motion_1.motion[component];
    var variants = animations.get(type);
    return (<Framer {...rest} variants={variants}>
      {children}
    </Framer>);
};
exports.AnimationItem = AnimationItem;
exports.AnimationItem.displayName = 'AnimationItem';
exports.default = exports.AnimationItem;
//# sourceMappingURL=Item.jsx.map