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
exports.TextArea = void 0;
var get_1 = __importDefault(require("lodash-es/get"));
var react_1 = __importDefault(require("react"));
var Input_1 = __importStar(require("../Input"));
var hook_1 = require("./hook");
var utils_1 = require("./utils");
var defaultProps = {
    component: 'textarea',
    minRows: 5,
    maxRows: Infinity,
    size: Input_1.InputSizes.lg
};
var TextArea = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), minRows = _a.minRows, maxRows = _a.maxRows, rest = __rest(_a, ["minRows", "maxRows"]);
    var _b = __read(hook_1.useAutoHeight({ refInput: rest.ref }), 2), otherInput = _b[0], detailsOfSize = _b[1];
    var elementOfInput = rest.ref && rest.ref.current;
    var lineHeight = utils_1.getLineHeight(elementOfInput);
    var minHeight = lineHeight + utils_1.getBoxSize(elementOfInput);
    var rowsOfInput = Math.min(Math.max(detailsOfSize.linesNumber, minRows), maxRows);
    return (<>
      <Input_1.default rows={rowsOfInput} style={__assign(__assign({}, rest.style), { minHeight: minHeight, overflow: get_1.default(detailsOfSize, 'overflow') })} {...rest}/>
      {otherInput}
    </>);
};
exports.TextArea = TextArea;
exports.default = exports.TextArea;
//# sourceMappingURL=TextArea.jsx.map