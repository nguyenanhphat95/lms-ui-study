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
var numberFormat_1 = require("@App/utils/numberFormat");
var get_1 = __importDefault(require("lodash/get"));
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("../Input"));
var defaultProps = {
    defaultValue: ''
};
var NumberOnly = react_1.forwardRef(function (props, ref) {
    var _a = __read(react_1.useState(numberFormat_1.formatNumberInputValue(get_1.default(props, 'value'))), 2), value = _a[0], setValue = _a[1];
    var _b = __assign(__assign({}, defaultProps), props), min = _b.min, max = _b.max, onChange = _b.onChange, rest = __rest(_b, ["min", "max", "onChange"]);
    var _handleInputChange = function (e, onChange) {
        var previousValue = value;
        var newValue = get_1.default(e, 'target.value');
        var previousNumber = previousValue;
        var newNumber = newValue;
        var isMaxRange = newNumber > Number.MAX_SAFE_INTEGER;
        var isLessThanMin = min !== null &&
            typeof min !== 'undefined' &&
            newNumber < min &&
            newNumber.toString().trim() !== '';
        var isGreaterThanMax = max !== null &&
            typeof max !== 'undefined' &&
            newNumber > max &&
            newNumber.toString().trim() !== '';
        if (isNaN(newNumber) ||
            (!isNaN(newNumber) && (isMaxRange || isLessThanMin))) {
            setValue(previousNumber);
            if (onChange) {
                onChange(previousNumber);
            }
            return;
        }
        if (isGreaterThanMax) {
            setValue(max);
            if (onChange) {
                onChange(max);
            }
            return;
        }
        setValue(newNumber);
        if (onChange) {
            onChange(newNumber);
        }
        return;
    };
    return (<Input_1.default {...rest} onChange={function (e) {
        return _handleInputChange(e, onChange);
    }} value={value}/>);
});
exports.default = NumberOnly;
//# sourceMappingURL=NumberOnly.jsx.map