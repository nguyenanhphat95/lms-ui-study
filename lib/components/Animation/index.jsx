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
exports.Animation = exports.AnimationTypes = void 0;
var react_1 = __importDefault(require("react"));
var Fade_1 = __importDefault(require("./components/Fade"));
var ScaleIn_1 = __importDefault(require("./components/ScaleIn"));
var ScaleOut_1 = __importDefault(require("./components/ScaleOut"));
var SlideLeft_1 = __importDefault(require("./components/SlideLeft"));
var SlideRight_1 = __importDefault(require("./components/SlideRight"));
var SlideTop_1 = __importDefault(require("./components/SlideTop"));
var AnimationTypes;
(function (AnimationTypes) {
    AnimationTypes["Fade"] = "Fade";
    AnimationTypes["SlideTop"] = "SlideTop";
    AnimationTypes["SlideRight"] = "SlideRight";
    AnimationTypes["SlideLeft"] = "SlideLeft";
    AnimationTypes["ScaleIn"] = "ScaleIn";
    AnimationTypes["ScaleOut"] = "ScaleOut";
})(AnimationTypes = exports.AnimationTypes || (exports.AnimationTypes = {}));
var animations = new Map()
    .set(AnimationTypes.Fade, Fade_1.default)
    .set(AnimationTypes.SlideTop, SlideTop_1.default)
    .set(AnimationTypes.SlideRight, SlideRight_1.default)
    .set(AnimationTypes.SlideLeft, SlideLeft_1.default)
    .set(AnimationTypes.ScaleIn, ScaleIn_1.default)
    .set(AnimationTypes.ScaleOut, ScaleOut_1.default);
var defaultProps = {
    component: 'div',
    className: null
};
var Animation = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), component = _a.component, type = _a.type, children = _a.children, rest = __rest(_a, ["component", "type", "children"]);
    var Framer = animations.get(type);
    return (<Framer {...rest} component={component}>
      {children}
    </Framer>);
};
exports.Animation = Animation;
exports.Animation.displayName = 'Animation';
exports.default = exports.Animation;
//# sourceMappingURL=index.jsx.map