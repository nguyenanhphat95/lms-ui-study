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
var eachDayOfInterval_1 = __importDefault(require("date-fns/eachDayOfInterval"));
var endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
var endOfWeek_1 = __importDefault(require("date-fns/endOfWeek"));
var format_1 = __importDefault(require("date-fns/format"));
var isAfter_1 = __importDefault(require("date-fns/isAfter"));
var isBefore_1 = __importDefault(require("date-fns/isBefore"));
var isSameDay_1 = __importDefault(require("date-fns/isSameDay"));
var isWeekend_1 = __importDefault(require("date-fns/isWeekend"));
var isWithinInterval_1 = __importDefault(require("date-fns/isWithinInterval"));
var startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
var startOfWeek_1 = __importDefault(require("date-fns/startOfWeek"));
var react_1 = __importStar(require("react"));
var DayCell_1 = __importDefault(require("../DayCell"));
var utils_1 = require("../utils");
function renderWeekdays(styles, dateOptions) {
    var now = new Date();
    return (<div className={styles.weekDays}>
      {eachDayOfInterval_1.default({
        start: startOfWeek_1.default(now, dateOptions),
        end: endOfWeek_1.default(now, dateOptions)
    }).map(function (day, i) { return (<span className={styles.weekDay} key={i}>
          {format_1.default(day, 'EEEEE', dateOptions)}
        </span>); })}
    </div>);
}
var Month = (function (_super) {
    __extends(Month, _super);
    function Month() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Month.prototype.render = function () {
        var _this = this;
        var now = new Date();
        var _a = this.props, displayMode = _a.displayMode, focusedRange = _a.focusedRange, drag = _a.drag, styles = _a.styles, disabledDates = _a.disabledDates;
        var minDate = this.props.minDate && startOfDay_1.default(this.props.minDate);
        var maxDate = this.props.maxDate && endOfDay_1.default(this.props.maxDate);
        var monthDisplay = utils_1.getMonthDisplayRange(this.props.month, this.props.dateOptions);
        var ranges = this.props.ranges;
        if (displayMode === 'dateRange' && drag.status) {
            var _b = drag.range, startDate_1 = _b.startDate, endDate_1 = _b.endDate;
            ranges = ranges.map(function (range, i) {
                if (i !== focusedRange[0])
                    return range;
                return __assign(__assign({}, range), { startDate: startDate_1,
                    endDate: endDate_1 });
            });
        }
        var showPreview = this.props.showPreview && !drag.disablePreview;
        return (<div className={styles.month} style={this.props.style}>
        {this.props.showMonthName ? (<div className={styles.monthName}>
            Tháng {format_1.default(this.props.month, this.props.monthDisplayFormat)}
          </div>) : null}
        {this.props.showWeekDays &&
            renderWeekdays(styles, this.props.dateOptions)}
        <div className={styles.days} onMouseLeave={this.props.onMouseLeave}>
          {eachDayOfInterval_1.default({
            start: monthDisplay.start,
            end: monthDisplay.end
        }).map(function (day, index) {
            var isStartOfMonth = isSameDay_1.default(day, monthDisplay.startDateOfMonth);
            var isEndOfMonth = isSameDay_1.default(day, monthDisplay.endDateOfMonth);
            var isOutsideMinMax = (minDate && isBefore_1.default(day, minDate)) ||
                (maxDate && isAfter_1.default(day, maxDate));
            var isDisabledSpecifically = disabledDates.some(function (disabledDate) {
                return isSameDay_1.default(disabledDate, day);
            });
            return (<DayCell_1.default {..._this.props} ranges={ranges} day={day} preview={showPreview ? _this.props.preview : null} isWeekend={isWeekend_1.default(day)} isToday={isSameDay_1.default(day, now)} isStartOfWeek={isSameDay_1.default(day, startOfWeek_1.default(day, _this.props.dateOptions))} isEndOfWeek={isSameDay_1.default(day, endOfWeek_1.default(day, _this.props.dateOptions))} isStartOfMonth={isStartOfMonth} isEndOfMonth={isEndOfMonth} key={index} disabled={isOutsideMinMax || isDisabledSpecifically} isPassive={!isWithinInterval_1.default(day, {
                start: monthDisplay.startDateOfMonth,
                end: monthDisplay.endDateOfMonth
            })} styles={styles} onMouseDown={_this.props.onDragSelectionStart} onMouseUp={_this.props.onDragSelectionEnd} onMouseEnter={_this.props.onDragSelectionMove} dragRange={drag.range} drag={drag.status}/>);
        })}
        </div>
      </div>);
    };
    return Month;
}(react_1.PureComponent));
exports.default = Month;
//# sourceMappingURL=index.jsx.map