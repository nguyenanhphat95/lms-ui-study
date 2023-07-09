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
var DownArrow_1 = __importDefault(require("lms-icons/components/DownArrow"));
var react_1 = __importStar(require("react"));
var Collapse_1 = __importDefault(require("../Collapse"));
var Icon_1 = __importDefault(require("../Icon"));
var Panel_1 = __importDefault(require("../Panel"));
var PanelBody_1 = __importDefault(require("../PanelBody"));
var PanelHeader_1 = __importDefault(require("../PanelHeader"));
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    defaultValue: true,
};
var Accordion = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), children = _a.children, title = _a.title, onToggle = _a.onToggle, defaultValue = _a.defaultValue;
    var _b = __read(react_1.useState(defaultValue), 2), expand = _b[0], toggle = _b[1];
    var _handleToggle = function () {
        toggle(!expand);
        if (onToggle) {
            onToggle(!expand);
        }
    };
    return (<Panel_1.default borderRadius={false}>
      <PanelHeader_1.default className={styles_module_scss_1.default["panel-header"]} onClick={_handleToggle}>
        <Typography_1.default size={Typography_1.TypoSizes.body1} weight={Typography_1.TypoWeights.bold} className={styles_module_scss_1.default["title"]}>
          {title}
        </Typography_1.default>
        <span className={styles_module_scss_1.default["collapible-icon"]}>
          <Icon_1.default className={expand ? styles_module_scss_1.default["expand"] : styles_module_scss_1.default["collapse"]} width={18} height={18} component={DownArrow_1.default}/>
        </span>
      </PanelHeader_1.default>
      <PanelBody_1.default>
        <Collapse_1.default in={expand}>{children}</Collapse_1.default>
      </PanelBody_1.default>
    </Panel_1.default>);
};
exports.default = Accordion;
//# sourceMappingURL=Accordion.jsx.map