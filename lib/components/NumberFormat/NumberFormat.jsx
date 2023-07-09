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
var react_1 = __importDefault(require("react"));
var react_number_format_1 = __importDefault(require("react-number-format"));
var Input_1 = __importDefault(require("../Input"));
var defaultProps = {
    thousandSeparator: ',',
    decimalSeparator: '.',
    decimalPrecision: 2,
    decimalScale: 2,
};
var NumberFormatWrapper = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), min = _a.min, max = _a.max, thousandSeparator = _a.thousandSeparator, decimalSeparator = _a.decimalSeparator, decimalPrecision = _a.decimalPrecision, decimalScale = _a.decimalScale, rest = __rest(_a, ["min", "max", "thousandSeparator", "decimalSeparator", "decimalPrecision", "decimalScale"]);
    return (<react_number_format_1.default thousandSeparator={thousandSeparator} decimalSeparator={decimalSeparator} decimalPrecision={decimalPrecision} decimalScale={decimalScale} customInput={Input_1.default} isAllowed={function (values) {
        var formattedValue = values.formattedValue, floatValue = values.floatValue;
        if (formattedValue === '')
            return true;
        else if (max && floatValue > max)
            return false;
        else if (min && floatValue < min)
            return false;
        return true;
    }} allowNegative={false} {...rest}/>);
};
exports.default = NumberFormatWrapper;
//# sourceMappingURL=NumberFormat.jsx.map