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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultInputRanges = exports.defaultStaticRanges = exports.createStaticRanges = void 0;
var addDays_1 = __importDefault(require("date-fns/addDays"));
var addMonths_1 = __importDefault(require("date-fns/addMonths"));
var differenceInCalendarDays_1 = __importDefault(require("date-fns/differenceInCalendarDays"));
var endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var endOfWeek_1 = __importDefault(require("date-fns/endOfWeek"));
var isAfter_1 = __importDefault(require("date-fns/isAfter"));
var isBefore_1 = __importDefault(require("date-fns/isBefore"));
var isSameDay_1 = __importDefault(require("date-fns/isSameDay"));
var startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var startOfWeek_1 = __importDefault(require("date-fns/startOfWeek"));
var defineds = {
    startOfWeek: startOfWeek_1.default(new Date(), { weekStartsOn: 1 }),
    endOfWeek: endOfWeek_1.default(new Date(), { weekStartsOn: 1 }),
    startOfLastWeek: startOfWeek_1.default(addDays_1.default(new Date(), -7), { weekStartsOn: 1 }),
    endOfLastWeek: endOfWeek_1.default(addDays_1.default(new Date(), -7), { weekStartsOn: 1 }),
    startOfToday: startOfDay_1.default(new Date()),
    endOfToday: endOfDay_1.default(new Date()),
    startOfYesterday: startOfDay_1.default(addDays_1.default(new Date(), -1)),
    endOfYesterday: endOfDay_1.default(addDays_1.default(new Date(), -1)),
    startOfMonth: startOfMonth_1.default(new Date()),
    endOfMonth: endOfMonth_1.default(new Date()),
    startOfLastMonth: startOfMonth_1.default(addMonths_1.default(new Date(), -1)),
    endOfLastMonth: endOfMonth_1.default(addMonths_1.default(new Date(), -1)),
};
var staticRangeHandler = {
    range: {},
    isSelected: function (range) {
        var definedRange = this.range();
        return (isSameDay_1.default(range.startDate, definedRange.startDate) &&
            isSameDay_1.default(range.endDate, definedRange.endDate));
    },
    isDisabled: function (minDate, maxDate) {
        var currentRange = this.range();
        return (isBefore_1.default(currentRange.startDate, minDate) ||
            isAfter_1.default(currentRange.endDate, maxDate));
    },
};
function createStaticRanges(ranges) {
    return ranges.map(function (range) { return (__assign(__assign({}, staticRangeHandler), range)); });
}
exports.createStaticRanges = createStaticRanges;
exports.defaultStaticRanges = createStaticRanges([
    {
        label: 'Hôm nay',
        range: function () { return ({
            startDate: defineds.startOfToday,
            endDate: defineds.endOfToday,
        }); },
    },
    {
        label: 'Hôm qua',
        range: function () { return ({
            startDate: defineds.startOfYesterday,
            endDate: defineds.endOfYesterday,
        }); },
    },
    {
        label: 'Tuần này',
        range: function () { return ({
            startDate: defineds.startOfWeek,
            endDate: defineds.endOfWeek,
        }); },
    },
    {
        label: 'Tuần trước',
        range: function () { return ({
            startDate: defineds.startOfLastWeek,
            endDate: defineds.endOfLastWeek,
        }); },
    },
    {
        label: 'Tháng này',
        range: function () { return ({
            startDate: defineds.startOfMonth,
            endDate: defineds.endOfMonth,
        }); },
    },
    {
        label: 'Tháng trước',
        range: function () { return ({
            startDate: defineds.startOfLastMonth,
            endDate: defineds.endOfLastMonth,
        }); },
    },
]);
exports.defaultInputRanges = [
    {
        label: 'Ngày trước',
        range: function (value, _a) {
            var minDate = _a.minDate;
            if (value === null) {
                return {
                    startDate: null,
                    endDate: null,
                };
            }
            var startDate = addDays_1.default(defineds.startOfToday, (Math.max(Number(value), 1) - 1) * -1);
            var nextStartDate = isAfter_1.default(minDate, startDate) ? minDate : startDate;
            return {
                startDate: nextStartDate,
                endDate: defineds.endOfToday,
            };
        },
        getCurrentValue: function (range) {
            if (!isSameDay_1.default(range.endDate, defineds.endOfToday))
                return '';
            if (!range.startDate)
                return '∞';
            return differenceInCalendarDays_1.default(defineds.endOfToday, range.startDate) + 1;
        },
        isDisabled: function (minDate, maxDate) {
            return (isAfter_1.default(minDate, startOfDay_1.default(new Date())) ||
                isBefore_1.default(maxDate, endOfDay_1.default(new Date())));
        },
    },
    {
        label: 'Ngày từ hôm nay',
        range: function (value, _a) {
            var maxDate = _a.maxDate;
            if (value === null) {
                return {
                    startDate: null,
                    endDate: null,
                };
            }
            var today = new Date();
            var endDate = addDays_1.default(today, Math.max(Number(value), 1) - 1);
            var nextEndDate = isBefore_1.default(maxDate, endDate) ? maxDate : endDate;
            return {
                startDate: today,
                endDate: nextEndDate,
            };
        },
        getCurrentValue: function (range) {
            if (!isSameDay_1.default(range.startDate, defineds.startOfToday))
                return '';
            if (!range.endDate)
                return '∞';
            return differenceInCalendarDays_1.default(range.endDate, defineds.startOfToday) + 1;
        },
        isDisabled: function (minDate, maxDate) {
            return (isBefore_1.default(maxDate, endOfDay_1.default(new Date())) ||
                isAfter_1.default(minDate, startOfDay_1.default(new Date())));
        },
    },
];
//# sourceMappingURL=defaultRanges.js.map