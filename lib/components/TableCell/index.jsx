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
exports.TableCell = exports.TableCellAligns = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var TableCellAligns;
(function (TableCellAligns) {
    TableCellAligns["inherit"] = "inherit";
    TableCellAligns["left"] = "left";
    TableCellAligns["center"] = "center";
    TableCellAligns["right"] = "right";
    TableCellAligns["justify"] = "justify";
})(TableCellAligns = exports.TableCellAligns || (exports.TableCellAligns = {}));
var defaultProps = {
    component: 'td',
    inHeader: false,
    align: TableCellAligns.inherit,
};
var TableCell = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), component = _a.component, className = _a.className, inHeader = _a.inHeader, align = _a.align, rest = __rest(_a, ["component", "className", "inHeader", "align"]);
    var Component = (inHeader ? 'th' : component) || 'td';
    var tableBodyClassName = classnames_1.default(styles_module_scss_1.default.cell, className, align && styles_module_scss_1.default["align-" + String(align)]);
    return <Component {...rest} className={tableBodyClassName}/>;
};
exports.TableCell = TableCell;
exports.default = exports.TableCell;
//# sourceMappingURL=index.jsx.map