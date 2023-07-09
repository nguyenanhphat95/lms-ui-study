"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var defaultRanges_1 = require("../defaultRanges");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var DefinedRanges = (function (_super) {
    __extends(DefinedRanges, _super);
    function DefinedRanges(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rangeOffset: 0,
            focusedInput: -1
        };
        _this.handleRangeChange = _this.handleRangeChange.bind(_this);
        return _this;
    }
    DefinedRanges.prototype.handleRangeChange = function (range) {
        var _a;
        var _b = this.props, onChange = _b.onChange, ranges = _b.ranges, focusedRange = _b.focusedRange;
        var selectedRange = ranges[focusedRange[0]];
        if (!onChange || !selectedRange)
            return;
        onChange((_a = {},
            _a[selectedRange.key || "range" + (focusedRange[0] + 1)] = __assign(__assign({}, selectedRange), range),
            _a));
    };
    DefinedRanges.prototype.getSelectedRange = function (ranges, staticRange) {
        var focusedRangeIndex = ranges.findIndex(function (range) {
            if (!range.startDate || !range.endDate || range.disabled)
                return false;
            return staticRange.isSelected(range);
        });
        var selectedRange = ranges[focusedRangeIndex];
        return { selectedRange: selectedRange, focusedRangeIndex: focusedRangeIndex };
    };
    DefinedRanges.prototype.render = function () {
        var _this = this;
        var _a = this.props, onPreviewChange = _a.onPreviewChange, ranges = _a.ranges, renderStaticRangeLabel = _a.renderStaticRangeLabel, rangeColors = _a.rangeColors, className = _a.className, minDate = _a.minDate, maxDate = _a.maxDate;
        return (<div className={classnames_1.default(styles_module_scss_1.default.definedRangesWrapper, className)}>
        {this.props.headerContent}
        <div className={styles_module_scss_1.default.staticRanges}>
          {this.props.staticRanges.map(function (staticRange, i) {
            var _a;
            var _b = _this.getSelectedRange(ranges, staticRange), selectedRange = _b.selectedRange, focusedRangeIndex = _b.focusedRangeIndex;
            var isDisabled = staticRange.isDisabled(minDate, maxDate);
            var labelContent;
            if (staticRange.hasCustomRendering) {
                labelContent = renderStaticRangeLabel(staticRange);
            }
            else {
                labelContent = staticRange.label;
            }
            return (<button type="button" className={classnames_1.default(styles_module_scss_1.default.staticRange, (_a = {},
                _a[styles_module_scss_1.default.staticRangeSelected] = Boolean(selectedRange),
                _a))} style={{
                color: selectedRange
                    ? selectedRange.color || rangeColors[focusedRangeIndex]
                    : null
            }} disabled={isDisabled} key={i} onClick={function () {
                return _this.handleRangeChange(staticRange.range(_this.props));
            }} onFocus={function () { return onPreviewChange(staticRange.range(_this.props)); }} onMouseOver={function () {
                return onPreviewChange(staticRange.range(_this.props));
            }} onMouseLeave={function () {
                if (typeof _this.props.onPreviewChange === 'function') {
                    _this.props.onPreviewChange();
                }
            }}>
                <span tabIndex={-1} className={styles_module_scss_1.default.staticRangeLabel}>
                  {labelContent}
                </span>
              </button>);
        })}
        </div>

        <div className={styles_module_scss_1.default.inputRanges}>
          {this.props.inputRanges.map(function (rangeOption, i) {
            var isDisabled = rangeOption.isDisabled(minDate, maxDate);
            return (<div className={styles_module_scss_1.default.inputRange} key={i}>
                <input className={styles_module_scss_1.default.inputRangeInput} onFocus={function () {
                return _this.setState({ focusedInput: i, rangeOffset: 0 });
            }} onBlur={function () { return _this.setState({ rangeOffset: 0 }); }} placeholder={'-'} onChange={function (e) {
                var value = parseInt(e.target.value, 10);
                value = isNaN(value)
                    ? null
                    : Math.max(Math.min(99999, value), 0);
                _this.handleRangeChange(rangeOption.range(value, _this.props));
            }} min={0} max={99999} value={rangeOption.getCurrentValue
                ? rangeOption.getCurrentValue(ranges[_this.props.focusedRange[0]] || {})
                : ''} disabled={isDisabled}/>
                <span className={styles_module_scss_1.default.inputRangeLabel}>
                  {rangeOption.label}
                </span>
              </div>);
        })}
        </div>
        {this.props.footerContent}
      </div>);
    };
    DefinedRanges.defaultProps = {
        inputRanges: defaultRanges_1.defaultInputRanges,
        staticRanges: defaultRanges_1.defaultStaticRanges,
        ranges: [],
        rangeColors: ['#3d91ff', '#3ecf8e', '#fed14c'],
        focusedRange: [0, 0]
    };
    return DefinedRanges;
}(react_1.Component));
exports.default = DefinedRanges;
//# sourceMappingURL=index.jsx.map