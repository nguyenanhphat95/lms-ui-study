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
exports.Layout = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("../Container"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Layout = function (props) {
    var _a, _b;
    var _c = Object.assign({ classes: {} }, props), className = _c.className, open = _c.open, children = _c.children, navbar = _c.navbar, classes = _c.classes, sidebar = _c.sidebar, footer = _c.footer, rest = __rest(_c, ["className", "open", "children", "navbar", "classes", "sidebar", "footer"]);
    return (<Container_1.default {...rest} fluid className={styles_module_scss_1.default.container}>
      <div className={classnames_1.default(styles_module_scss_1.default.navbar, classes.navbar)}>{navbar}</div>
      <div className={classnames_1.default(styles_module_scss_1.default.layout, (_a = {},
        _a[styles_module_scss_1.default.open] = open,
        _a))}>
        {sidebar && (<div className={classnames_1.default(styles_module_scss_1.default.sidebar, classes.sidebar)}>{sidebar}</div>)}
        <div className={classnames_1.default(styles_module_scss_1.default.main, classes.main, (_b = {},
        _b[styles_module_scss_1.default['full-width']] = !sidebar,
        _b))}>
          <Container_1.default className={classnames_1.default(styles_module_scss_1.default.content, classes.content)} fluid>
            {children}
          </Container_1.default>
          {footer && (<div className={classnames_1.default(styles_module_scss_1.default.footer, classes.footer)}>{footer}</div>)}
        </div>
      </div>
    </Container_1.default>);
};
exports.Layout = Layout;
exports.default = exports.Layout;
//# sourceMappingURL=index.jsx.map