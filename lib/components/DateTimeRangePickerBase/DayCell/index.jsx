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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
var format_1 = __importDefault(require("date-fns/format"));
var isAfter_1 = __importDefault(require("date-fns/isAfter"));
var isBefore_1 = __importDefault(require("date-fns/isBefore"));
var isSameDay_1 = __importDefault(require("date-fns/isSameDay"));
var startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
var react_1 = __importStar(require("react"));
var DayCell = (function (_super) {
    __extends(DayCell, _super);
    function DayCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            hover: false,
            active: false
        };
        _this.getClassNames = _this.getClassNames.bind(_this);
        _this.handleMouseEvent = _this.handleMouseEvent.bind(_this);
        _this.handleKeyEvent = _this.handleKeyEvent.bind(_this);
        _this.renderSelectionPlaceholders = _this.renderSelectionPlaceholders.bind(_this);
        _this.renderPreviewPlaceholder = _this.renderPreviewPlaceholder.bind(_this);
        return _this;
    }
    DayCell.prototype.handleKeyEvent = function (event) {
        var day = this.props.day;
        switch (event.keyCode) {
            case 13:
            case 32:
                if (event.type === 'keydown') {
                    this.props.onMouseDown(day);
                }
                else {
                    this.props.onMouseUp(day);
                }
                break;
        }
    };
    DayCell.prototype.handleMouseEvent = function (event) {
        var _a = this.props, day = _a.day, disabled = _a.disabled, onPreviewChange = _a.onPreviewChange;
        var stateChanges = {};
        if (disabled) {
            onPreviewChange();
            return;
        }
        switch (event.type) {
            case 'mouseenter':
                this.props.onMouseEnter(day);
                onPreviewChange(day);
                stateChanges.hover = true;
                break;
            case 'blur':
            case 'mouseleave':
                stateChanges.hover = false;
                break;
            case 'mousedown':
                stateChanges.active = true;
                this.props.onMouseDown(day);
                break;
            case 'mouseup':
                event.stopPropagation();
                stateChanges.active = false;
                this.props.onMouseUp(day);
                break;
            case 'focus':
                onPreviewChange(day);
                break;
        }
        if (Object.keys(stateChanges).length) {
            this.setState(stateChanges);
        }
    };
    DayCell.prototype.getClassNames = function () {
        var _a;
        var _b = this.props, isPassive = _b.isPassive, isToday = _b.isToday, isWeekend = _b.isWeekend, isStartOfWeek = _b.isStartOfWeek, isEndOfWeek = _b.isEndOfWeek, isStartOfMonth = _b.isStartOfMonth, isEndOfMonth = _b.isEndOfMonth, disabled = _b.disabled, styles = _b.styles;
        return classnames_1.default(styles.day, (_a = {},
            _a[styles.dayPassive] = isPassive,
            _a[styles.dayDisabled] = disabled,
            _a[styles.dayToday] = isToday,
            _a[styles.dayWeekend] = isWeekend,
            _a[styles.dayStartOfWeek] = isStartOfWeek,
            _a[styles.dayEndOfWeek] = isEndOfWeek,
            _a[styles.dayStartOfMonth] = isStartOfMonth,
            _a[styles.dayEndOfMonth] = isEndOfMonth,
            _a[styles.dayHovered] = this.state.hover,
            _a[styles.dayActive] = this.state.active,
            _a));
    };
    DayCell.prototype.renderPreviewPlaceholder = function () {
        var _a;
        var _b = this.props, preview = _b.preview, day = _b.day, styles = _b.styles, ranges = _b.ranges;
        if (!preview)
            return null;
        var startDate = preview.startDate ? endOfDay_1.default(preview.startDate) : null;
        var endDate = preview.endDate ? startOfDay_1.default(preview.endDate) : null;
        var isInRange = isAfter_1.default(day, startDate) && isBefore_1.default(day, endDate);
        var isStartEdge = !isInRange &&
            isSameDay_1.default(day, startDate) &&
            ranges.length > 0 &&
            ranges[0].startDate !== null;
        var isEndEdge = !isInRange &&
            isSameDay_1.default(day, endDate) &&
            ranges.length > 0 &&
            ranges[0].startDate !== null;
        return (<span className={classnames_1.default((_a = {},
            _a[styles.dayStartPreview] = isStartEdge,
            _a[styles.dayInPreview] = isInRange,
            _a[styles.dayEndPreview] = isEndEdge,
            _a))}/>);
    };
    DayCell.prototype.renderSelectionPlaceholders = function () {
        var _this = this;
        var _a = this.props, styles = _a.styles, ranges = _a.ranges, day = _a.day;
        if (this.props.displayMode === 'date') {
            var isSelected = isSameDay_1.default(this.props.day, this.props.date);
            return isSelected ? (<span className={styles.selected} style={{ color: this.props.color }}/>) : null;
        }
        var inRanges = ranges.reduce(function (result, range) {
            var _a;
            var startDate = range.startDate;
            var endDate = range.endDate;
            if (startDate && endDate && isBefore_1.default(endDate, startDate)) {
                _a = __read([endDate, startDate], 2), startDate = _a[0], endDate = _a[1];
            }
            startDate = startDate ? endOfDay_1.default(startDate) : null;
            endDate = endDate ? startOfDay_1.default(endDate) : null;
            var isInRange = isAfter_1.default(day, startDate) && isBefore_1.default(day, endDate);
            var isStartEdge = !isInRange && isSameDay_1.default(day, startDate);
            var isEndEdge = !isInRange && isSameDay_1.default(day, endDate);
            if (isInRange || isStartEdge || isEndEdge) {
                return __spread(result, [
                    __assign({ isStartEdge: isStartEdge,
                        isEndEdge: isEndEdge,
                        isInRange: isInRange }, range)
                ]);
            }
            return result;
        }, []);
        return inRanges.map(function (range, i) {
            var _a;
            return (<span key={i} className={classnames_1.default((_a = {},
                _a[styles.startEdge] = range.isStartEdge,
                _a[styles.endEdge] = range.isEndEdge,
                _a[styles.inRange] = range.isInRange,
                _a))} style={{ color: range.color || _this.props.color }}/>);
        });
    };
    DayCell.prototype.render = function () {
        var styles = this.props.styles;
        return (<button type="button" onMouseEnter={this.handleMouseEvent} onMouseLeave={this.handleMouseEvent} onFocus={this.handleMouseEvent} onMouseDown={this.handleMouseEvent} onMouseUp={this.handleMouseEvent} onBlur={this.handleMouseEvent} onPauseCapture={this.handleMouseEvent} onKeyDown={this.handleKeyEvent} onKeyUp={this.handleKeyEvent} className={this.getClassNames()} {...(this.props.disabled || this.props.isPassive
            ? { tabIndex: -1 }
            : {})} style={{ color: this.props.color }}>
        {this.renderSelectionPlaceholders()}
        {this.renderPreviewPlaceholder()}
        <span className={styles.dayNumber}>
          <span>{format_1.default(this.props.day, 'dd')}</span>
        </span>
      </button>);
    };
    return DayCell;
}(react_1.Component));
exports.default = DayCell;
//# sourceMappingURL=index.jsx.map