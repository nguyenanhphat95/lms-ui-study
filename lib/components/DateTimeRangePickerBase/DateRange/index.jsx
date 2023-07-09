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
var classnames_1 = __importDefault(require("classnames"));
var addDays_1 = __importDefault(require("date-fns/addDays"));
var differenceInCalendarDays_1 = __importDefault(require("date-fns/differenceInCalendarDays"));
var endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
var isBefore_1 = __importDefault(require("date-fns/isBefore"));
var isWithinInterval_1 = __importDefault(require("date-fns/isWithinInterval"));
var max_1 = __importDefault(require("date-fns/max"));
var min_1 = __importDefault(require("date-fns/min"));
var startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
var react_1 = __importStar(require("react"));
var Calendar_1 = __importDefault(require("../Calendar"));
var utils_1 = require("../utils");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var DateRange = (function (_super) {
    __extends(DateRange, _super);
    function DateRange(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.setSelection = _this.setSelection.bind(_this);
        _this.handleRangeFocusChange = _this.handleRangeFocusChange.bind(_this);
        _this.updatePreview = _this.updatePreview.bind(_this);
        _this.calcNewSelection = _this.calcNewSelection.bind(_this);
        _this.setTime = _this.setTime.bind(_this);
        _this.state = {
            focusedRange: props.initialFocusedRange || [
                utils_1.findNextRangeIndex(props.ranges),
                0
            ],
            preview: null
        };
        return _this;
    }
    DateRange.prototype.calcNewSelection = function (value, isSingleValue) {
        var _a;
        if (isSingleValue === void 0) { isSingleValue = true; }
        var focusedRange = this.props.focusedRange || this.state.focusedRange;
        var _b = this.props, ranges = _b.ranges, onChange = _b.onChange, maxDate = _b.maxDate, moveRangeOnFirstSelection = _b.moveRangeOnFirstSelection, disabledDates = _b.disabledDates;
        var focusedRangeIndex = focusedRange[0];
        var selectedRange = ranges[focusedRangeIndex];
        if (!selectedRange || !onChange)
            return {};
        var startDate = selectedRange.startDate, endDate = selectedRange.endDate;
        if (!endDate)
            endDate = new Date(startDate);
        var nextFocusRange;
        if (!isSingleValue) {
            startDate = value.startDate;
            endDate = value.endDate;
        }
        else if (focusedRange[1] === 0) {
            var dayOffset = differenceInCalendarDays_1.default(endDate, startDate);
            startDate = value;
            endDate = moveRangeOnFirstSelection ? addDays_1.default(value, dayOffset) : null;
            if (maxDate && endDate !== null) {
                endDate = min_1.default([endDate, maxDate]);
            }
            nextFocusRange = [focusedRange[0], 1];
        }
        else {
            endDate = endOfDay_1.default(value);
        }
        var isStartDateSelected = focusedRange[1] === 0;
        if (isBefore_1.default(endDate, startDate)) {
            isStartDateSelected = !isStartDateSelected;
            _a = __read([startOfDay_1.default(endDate), endOfDay_1.default(startDate)], 2), startDate = _a[0], endDate = _a[1];
        }
        var inValidDatesWithinRange = disabledDates.filter(function (disabledDate) {
            return isWithinInterval_1.default(disabledDate, {
                start: startDate,
                end: endDate
            });
        });
        if (inValidDatesWithinRange.length > 0) {
            if (isStartDateSelected) {
                startDate = addDays_1.default(max_1.default(inValidDatesWithinRange), 1);
            }
            else {
                endDate = addDays_1.default(min_1.default(inValidDatesWithinRange), -1);
            }
        }
        if (!nextFocusRange) {
            var nextFocusRangeIndex = utils_1.findNextRangeIndex(this.props.ranges, focusedRange[0]);
            nextFocusRange = [nextFocusRangeIndex, 0];
        }
        return {
            wasValid: !(inValidDatesWithinRange.length > 0),
            range: { startDate: startDate, endDate: endDate },
            nextFocusRange: nextFocusRange
        };
    };
    DateRange.prototype.setSelection = function (value, isSingleValue) {
        var _a;
        var _b = this.props, onChange = _b.onChange, ranges = _b.ranges, onRangeFocusChange = _b.onRangeFocusChange;
        var focusedRange = this.props.focusedRange || this.state.focusedRange;
        var focusedRangeIndex = focusedRange[0];
        var selectedRange = ranges[focusedRangeIndex];
        if (!selectedRange)
            return;
        var newSelection = this.calcNewSelection(value, isSingleValue);
        onChange((_a = {},
            _a[selectedRange.key || "range" + (focusedRangeIndex + 1)] = __assign(__assign({}, selectedRange), newSelection.range),
            _a));
        this.setState({
            focusedRange: newSelection.nextFocusRange,
            preview: null
        });
        if (typeof onRangeFocusChange === 'function') {
            onRangeFocusChange(newSelection.nextFocusRange);
        }
    };
    DateRange.prototype.setTime = function (value, type) {
        var _a;
        var _b = this.props, onChange = _b.onChange, ranges = _b.ranges;
        var focusedRange = this.props.focusedRange || this.state.focusedRange;
        var focusedRangeIndex = focusedRange[0];
        var selectedRange = ranges[focusedRangeIndex];
        if (!selectedRange)
            return;
        var startDate = type === 'startTime' ? value : selectedRange.startDate;
        var endDate = type === 'endTime' ? value : selectedRange.endDate;
        onChange((_a = {},
            _a[selectedRange.key || "range" + (focusedRangeIndex + 1)] = __assign(__assign({}, selectedRange), { startDate: startDate,
                endDate: endDate }),
            _a));
    };
    DateRange.prototype.handleRangeFocusChange = function (focusedRange) {
        this.setState({ focusedRange: focusedRange });
        if (typeof this.props.onRangeFocusChange === 'function') {
            this.props.onRangeFocusChange(focusedRange);
        }
    };
    DateRange.prototype.updatePreview = function (val) {
        if (!val) {
            this.setState({ preview: null });
            return;
        }
        var _a = this.props, rangeColors = _a.rangeColors, ranges = _a.ranges;
        var focusedRange = this.props.focusedRange || this.state.focusedRange;
        var color = ranges[focusedRange[0]].color || rangeColors[focusedRange[0]];
        this.setState({ preview: __assign(__assign({}, val.range), { color: color }) });
    };
    DateRange.prototype.render = function () {
        var _this = this;
        return (<Calendar_1.default focusedRange={this.state.focusedRange} onRangeFocusChange={this.handleRangeFocusChange} preview={this.state.preview} onPreviewChange={function (value) {
            _this.updatePreview(value ? _this.calcNewSelection(value) : null);
        }} {...this.props} displayMode="dateRange" className={classnames_1.default(styles_module_scss_1.default.dateRangeWrapper, this.props.className)} onChange={this.setSelection} onSetTime={this.setTime} updateRange={function (val) { return _this.setSelection(val, false); }} ref={function (target) {
            _this.calendar = target;
        }}/>);
    };
    DateRange.defaultProps = {
        classNames: {},
        ranges: [],
        moveRangeOnFirstSelection: false,
        rangeColors: ['#3d91ff', '#3ecf8e', '#fed14c'],
        disabledDates: []
    };
    return DateRange;
}(react_1.Component));
exports.default = DateRange;
//# sourceMappingURL=index.jsx.map