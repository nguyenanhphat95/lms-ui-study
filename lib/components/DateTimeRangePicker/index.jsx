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
exports.DateTimeRangePicker = void 0;
var ChevronDown_1 = __importDefault(require("lms-icons/components/ChevronDown"));
var ChevronUp_1 = __importDefault(require("lms-icons/components/ChevronUp"));
var addYears_1 = __importDefault(require("date-fns/addYears"));
var endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
var format_1 = __importDefault(require("date-fns/format"));
var isValid_1 = __importDefault(require("date-fns/isValid"));
var startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
var get_1 = __importDefault(require("lodash-es/get"));
var react_1 = __importStar(require("react"));
var Backdrop_1 = require("../Backdrop");
var DateRangePicker_1 = __importDefault(require("../DateTimeRangePickerBase/DateRangePicker"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = __importDefault(require("../Input"));
var InputAdornment_1 = __importDefault(require("../InputAdornment"));
var Popover_1 = __importDefault(require("../Popover"));
var const_1 = require("./const");
var defaultProps = {
    dateDisplayFormat: const_1.TIME_FORMAT_DEFAULT + " " + const_1.DATE_FORMAT_DEFAULT,
    separate: "-",
    hasTime: false,
    placeholder: const_1.PLACEHOLDER_DEFAULT,
    months: 2,
    showStaticRange: true,
    minDate: startOfDay_1.default(addYears_1.default(new Date(), -100)),
    maxDate: endOfDay_1.default(addYears_1.default(new Date(), 20)),
    readOnly: false,
    component: Input_1.default,
};
exports.DateTimeRangePicker = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, range = _a.range, dateDisplayFormat = _a.dateDisplayFormat, onChange = _a.onChange, onPreviewChange = _a.onPreviewChange, hasTime = _a.hasTime, months = _a.months, showStaticRange = _a.showStaticRange, separate = _a.separate, minDate = _a.minDate, maxDate = _a.maxDate, rest = __rest(_a, ["component", "range", "dateDisplayFormat", "onChange", "onPreviewChange", "hasTime", "months", "showStaticRange", "separate", "minDate", "maxDate"]);
    var popperOptions = {
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
        ],
    };
    var _b = __read(react_1.useState(false), 2), isShowCalendar = _b[0], setIsShowCalendar = _b[1];
    var _c = __read(react_1.useState({
        startDate: get_1.default(range, ["startDate"], null),
        endDate: get_1.default(range, ["endDate"], null),
    }), 2), selectionRange = _c[0], setSelectionRange = _c[1];
    var _d = __read(react_1.useState(""), 2), dateRangeValue = _d[0], setDateRangeValue = _d[1];
    var inputRef = react_1.useRef(null);
    var rangeData = [
        __assign(__assign({}, selectionRange), { key: const_1.SELECTION_KEY }),
    ];
    var setInputValue = function (startDate, endDate) {
        var nextDateDisplayFormat = hasTime
            ? dateDisplayFormat
            : const_1.DATE_FORMAT_DEFAULT;
        var startDateFormatted = isValid_1.default(startDate)
            ? format_1.default(startDate, nextDateDisplayFormat)
            : "";
        var endDateFormatted = isValid_1.default(endDate)
            ? format_1.default(endDate, nextDateDisplayFormat)
            : "";
        if (startDateFormatted || endDateFormatted) {
            setDateRangeValue(startDateFormatted + " " + separate + " " + endDateFormatted);
        }
    };
    var handleShowCalendar = function () {
        setIsShowCalendar(!isShowCalendar && !rest.readOnly && !rest.disabled);
    };
    var handleChange = function (data) {
        var nextData = __assign(__assign({}, data[const_1.SELECTION_KEY]), { key: const_1.SELECTION_KEY });
        var nextSelectionRange = __assign(__assign({}, selectionRange), nextData);
        setSelectionRange(nextSelectionRange);
        if (onPreviewChange instanceof Function) {
            onPreviewChange(nextSelectionRange);
        }
    };
    var handleConfirm = function () {
        setInputValue(selectionRange.startDate, selectionRange.endDate);
        setIsShowCalendar(false);
        onChange(selectionRange);
        if (!selectionRange.startDate && !selectionRange.endDate) {
            setDateRangeValue("");
        }
    };
    var handleCancel = function () {
        if (!range.startDate || !range.endDate) {
            setSelectionRange({
                startDate: null,
                endDate: null,
            });
            setDateRangeValue("");
        }
        else {
            setSelectionRange({
                startDate: range.startDate,
                endDate: range.endDate,
            });
        }
        setIsShowCalendar(false);
    };
    var handleReset = function () {
        var nextSelectionRange = { startDate: null, endDate: null };
        setSelectionRange(nextSelectionRange);
    };
    react_1.useEffect(function () {
        if (!!range.startDate && !!range.endDate) {
            setSelectionRange({
                startDate: range.startDate,
                endDate: range.endDate,
            });
            setInputValue(range.startDate, range.endDate);
        }
    }, [range]);
    return (<>
        <Component {...rest} value={dateRangeValue} readOnly onClick={handleShowCalendar} ref={ref} wrapperRef={inputRef} afterInput={<InputAdornment_1.default onClick={handleShowCalendar}>
              <Icon_1.default>
                {isShowCalendar ? (<ChevronUp_1.default width={24} height={24}/>) : (<ChevronDown_1.default width={24} height={24}/>)}
              </Icon_1.default>
            </InputAdornment_1.default>}/>

        {isShowCalendar && (<Popover_1.default anchorRef={inputRef} popperOptions={popperOptions} backdrop={Backdrop_1.BackdropTypes.transparent} onClose={handleShowCalendar}>
            <DateRangePicker_1.default ranges={rangeData} rangeSelected={range} hasTime={hasTime} months={months} showStaticRange={showStaticRange} minDate={minDate} maxDate={maxDate} onChange={handleChange} onConfirm={handleConfirm} onCancel={handleCancel} onReset={handleReset}/>
          </Popover_1.default>)}
      </>);
});
exports.DateTimeRangePicker.displayName = "DateTimeRangePicker";
exports.default = exports.DateTimeRangePicker;
//# sourceMappingURL=index.jsx.map