"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyles = exports.getMonthDisplayRange = exports.findNextRangeIndex = exports.calcFocusDate = void 0;
var classnames_1 = __importDefault(require("classnames"));
var addMonths_1 = __importDefault(require("date-fns/addMonths"));
var areIntervalsOverlapping_1 = __importDefault(require("date-fns/areIntervalsOverlapping"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var endOfWeek_1 = __importDefault(require("date-fns/endOfWeek"));
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var startOfWeek_1 = __importDefault(require("date-fns/startOfWeek"));
function calcFocusDate(currentFocusedDate, props) {
    var shownDate = props.shownDate, date = props.date, months = props.months, ranges = props.ranges, focusedRange = props.focusedRange, displayMode = props.displayMode;
    var targetInterval;
    if (displayMode === 'dateRange') {
        var range = ranges[focusedRange[0]] || {};
        targetInterval = {
            start: range.startDate,
            end: range.endDate
        };
    }
    else {
        targetInterval = {
            start: date,
            end: date
        };
    }
    targetInterval.start = startOfMonth_1.default(targetInterval.start || new Date());
    targetInterval.end = endOfMonth_1.default(targetInterval.end || targetInterval.start);
    var targetDate = targetInterval.start || targetInterval.end || shownDate || new Date();
    if (!currentFocusedDate)
        return shownDate || targetDate;
    var currentFocusInterval = {
        start: startOfMonth_1.default(currentFocusedDate),
        end: endOfMonth_1.default(addMonths_1.default(currentFocusedDate, months - 1))
    };
    if (areIntervalsOverlapping_1.default(targetInterval, currentFocusInterval)) {
        return currentFocusedDate;
    }
    return targetDate;
}
exports.calcFocusDate = calcFocusDate;
function findNextRangeIndex(ranges, currentRangeIndex) {
    if (currentRangeIndex === void 0) { currentRangeIndex = -1; }
    var nextIndex = ranges.findIndex(function (range, i) {
        return i > currentRangeIndex && range.autoFocus !== false && !range.disabled;
    });
    if (nextIndex !== -1)
        return nextIndex;
    return ranges.findIndex(function (range) { return range.autoFocus !== false && !range.disabled; });
}
exports.findNextRangeIndex = findNextRangeIndex;
function getMonthDisplayRange(date, dateOptions) {
    var startDateOfMonth = startOfMonth_1.default(date);
    var endDateOfMonth = endOfMonth_1.default(date);
    var startDateOfCalendar = startOfWeek_1.default(startDateOfMonth, dateOptions);
    var endDateOfCalendar = endOfWeek_1.default(endDateOfMonth, dateOptions);
    return {
        start: startDateOfCalendar,
        end: endDateOfCalendar,
        startDateOfMonth: startDateOfMonth,
        endDateOfMonth: endDateOfMonth
    };
}
exports.getMonthDisplayRange = getMonthDisplayRange;
function generateStyles(sources) {
    if (!sources.length)
        return {};
    var generatedStyles = sources
        .filter(function (source) { return Boolean(source); })
        .reduce(function (styles, styleSource) {
        Object.keys(styleSource).forEach(function (key) {
            styles[key] = classnames_1.default(styles[key], styleSource[key]);
        });
        return styles;
    }, {});
    return generatedStyles;
}
exports.generateStyles = generateStyles;
//# sourceMappingURL=utils.js.map