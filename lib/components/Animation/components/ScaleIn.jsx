"use strict";
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
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var ScaleIn = function (_a) {
    var children = _a.children, duration = _a.duration, component = _a.component, rest = __rest(_a, ["children", "duration", "component"]);
    var Component = framer_motion_1.motion[component];
    return (<Component initial={{ opacity: 0, scale: 1.25 }} animate={{ opacity: 1, scale: 1.0 }} exit={{ opacity: 0, scale: 1.25 }} transition={{
        duration: duration,
        type: 'spring',
        stiffness: 250,
        damping: 17.5,
    }} {...rest}>
      {children}
    </Component>);
};
ScaleIn.displayName = 'ScaleIn';
exports.default = ScaleIn;
//# sourceMappingURL=ScaleIn.jsx.map