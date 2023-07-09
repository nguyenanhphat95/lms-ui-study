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
exports.Pagination = void 0;
var compose_1 = __importDefault(require("@App/utils/compose"));
var NextPage_1 = __importDefault(require("lms-icons/components/NextPage"));
var PrevPage_1 = __importDefault(require("lms-icons/components/PrevPage"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var const_1 = require("./const");
var hooks_1 = require("./hooks");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var utils_1 = require("./utils");
var defaultProps = {
    component: "div",
    displayNumber: 5,
};
var Pagination = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, totalOfPage = _a.total, currentOfPage = _a.current, displayOfButton = _a.displayNumber, className = _a.className, onChangePage = _a.onChangePage, rest = __rest(_a, ["component", "total", "current", "displayNumber", "className", "onChangePage"]);
    var _b = hooks_1.useRangeAndList({
        currentOfPage: currentOfPage,
        totalOfPage: totalOfPage,
        displayOfButton: displayOfButton,
    }), listOfButton = _b.list, rangeOfButton = _b.range;
    var isAllowedPrev = currentOfPage - const_1.STEP_VALUE < const_1.START_INDEX;
    var isAllowedNext = currentOfPage + const_1.STEP_VALUE > totalOfPage;
    var classOfComponent = classnames_1.default(styles_module_scss_1.default.pagination, className);
    var classOfIconPrev = classnames_1.default(styles_module_scss_1.default.icon, styles_module_scss_1.default.prev, isAllowedPrev && styles_module_scss_1.default.disabled);
    var classOfIconNext = classnames_1.default(styles_module_scss_1.default.icon, styles_module_scss_1.default.next, isAllowedNext && styles_module_scss_1.default.disabled);
    var _c = __read(react_1.useState(utils_1.getLabelFromIndex(currentOfPage)), 2), setInputValue = _c[1];
    var handleOnChangePage = react_1.useCallback(function (selectedPage) {
        return onChangePage(Math.min(totalOfPage, Math.abs(selectedPage)));
    }, [onChangePage, totalOfPage]);
    var handleOnClickButton = react_1.useCallback(function (nextPage) { return function () {
        return compose_1.default(handleOnChangePage, function (selectedPage) {
            return setInputValue(selectedPage);
        })(nextPage);
    }; }, [totalOfPage, handleOnChangePage, setInputValue]);
    var contentOfButton = react_1.useMemo(function () {
        return listOfButton.map(function (value) { return (<li role="presentation" key={value} className={classnames_1.default(styles_module_scss_1.default.item, value === currentOfPage && styles_module_scss_1.default.active)} onClick={handleOnClickButton(value)}>
          <span>{utils_1.getLabelFromIndex(value)}</span>
        </li>); });
    }, [rangeOfButton, listOfButton, currentOfPage, handleOnClickButton]);
    var showContentOfFirstPage = rangeOfButton.start > const_1.START_INDEX;
    var contentOfFirstPage = showContentOfFirstPage && (<li role="presentation" key={const_1.START_INDEX} className={classnames_1.default(styles_module_scss_1.default.item, const_1.START_INDEX === currentOfPage && styles_module_scss_1.default.active)} onClick={handleOnClickButton(const_1.START_INDEX)}>
      <span>{utils_1.getLabelFromIndex(const_1.START_INDEX)}</span>
    </li>);
    var showContentOfLastPage = rangeOfButton.end < totalOfPage;
    var contentOfLastPage = showContentOfLastPage && (<li role="presentation" key={totalOfPage} className={classnames_1.default(styles_module_scss_1.default.item, totalOfPage === currentOfPage && styles_module_scss_1.default.active)} onClick={handleOnClickButton(totalOfPage)}>
      <span>{utils_1.getLabelFromIndex(totalOfPage)}</span>
    </li>);
    var showContentOfPrevIndicator = rangeOfButton.start > const_1.START_INDEX + 1;
    var contentOfPrevIndicator = showContentOfPrevIndicator && (<li className={styles_module_scss_1.default.indicator}>
      <span>...</span>
    </li>);
    var showContentOfNextIndicator = rangeOfButton.end + 1 < totalOfPage;
    var contentOfNextIndicator = showContentOfNextIndicator && (<li className={styles_module_scss_1.default.indicator}>
      <span>...</span>
    </li>);
    var indexOfPrev = Math.max(const_1.START_INDEX, currentOfPage - const_1.STEP_VALUE);
    var indexOfNext = Math.min(totalOfPage, currentOfPage + const_1.STEP_VALUE);
    return (<Component {...rest} className={classOfComponent}>
      <ul className={styles_module_scss_1.default["navigate-button"]} key={totalOfPage}>
        <li role="presentation" className={classOfIconPrev} onClick={handleOnClickButton(indexOfPrev)}>
          <Icon_1.default width={12} height={12} component={PrevPage_1.default}/>
        </li>
        {contentOfFirstPage}
        {contentOfPrevIndicator}
        {contentOfButton}
        {contentOfNextIndicator}
        {contentOfLastPage}
        <li role="presentation" className={classOfIconNext} onClick={handleOnClickButton(indexOfNext)}>
          <Icon_1.default size={12} height={12} component={NextPage_1.default}/>
        </li>
      </ul>
    </Component>);
};
exports.Pagination = Pagination;
exports.default = exports.Pagination;
//# sourceMappingURL=Pagination.jsx.map