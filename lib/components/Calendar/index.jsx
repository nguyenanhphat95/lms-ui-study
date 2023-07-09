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
exports.Calendar = void 0;
var ChevronDown_1 = __importDefault(require("lms-icons/components/ChevronDown"));
var ChevronUp_1 = __importDefault(require("lms-icons/components/ChevronUp"));
var addYears_1 = __importDefault(require("date-fns/addYears"));
var endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
var format_1 = __importDefault(require("date-fns/format"));
var startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
var react_1 = __importStar(require("react"));
var Backdrop_1 = require("../Backdrop");
var Calendar_1 = __importDefault(require("../DateTimeRangePickerBase/Calendar"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = __importDefault(require("../Input"));
var InputAdornment_1 = __importDefault(require("../InputAdornment"));
var Popover_1 = __importDefault(require("../Popover"));
var const_1 = require("./const");
var defaultProps = {
    date: null,
    dateDisplayFormat: const_1.DATE_FORMAT_DEFAULT,
    placeholder: const_1.PLACEHOLDER_DEFAULT,
    months: 1,
    minDate: startOfDay_1.default(addYears_1.default(new Date(), -100)),
    maxDate: endOfDay_1.default(addYears_1.default(new Date(), 20)),
    readOnly: false,
    showStaticRange: true,
    component: Input_1.default,
};
exports.Calendar = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, date = _a.date, dateDisplayFormat = _a.dateDisplayFormat, showStaticRange = _a.showStaticRange, onChange = _a.onChange, months = _a.months, minDate = _a.minDate, maxDate = _a.maxDate, icon = _a.icon, rest = __rest(_a, ["component", "date", "dateDisplayFormat", "showStaticRange", "onChange", "months", "minDate", "maxDate", "icon"]);
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
    var _c = __read(react_1.useState(date), 2), selectionDate = _c[0], setSelectionDate = _c[1];
    var _d = __read(react_1.useState(""), 2), dateValue = _d[0], setDateValue = _d[1];
    var rangeData = [
        {
            startDate: null,
            endDate: null,
        },
    ];
    var range = {
        startDate: selectionDate || null,
        endDate: selectionDate || null,
    };
    var inputRef = react_1.useRef(null);
    var setInputValue = function (selectedDate) {
        var dateFormatted = selectedDate
            ? format_1.default(selectedDate, dateDisplayFormat)
            : "";
        if (dateFormatted) {
            setDateValue(dateFormatted);
        }
    };
    var handleShowCalendar = function () {
        setIsShowCalendar(!isShowCalendar && !rest.readOnly && !rest.disabled);
    };
    var handleChange = function (selectedDate) {
        setSelectionDate(selectedDate);
    };
    var handleConfirm = function () {
        setInputValue(selectionDate);
        setIsShowCalendar(false);
        onChange(selectionDate);
    };
    var handleCancel = function () {
        if (!date) {
            setSelectionDate(null);
            setDateValue("");
        }
        else {
            setSelectionDate(date);
        }
        setIsShowCalendar(false);
    };
    var handleReset = function () {
        onChange(null);
        setDateValue("");
        setSelectionDate(null);
    };
    return (<>
        <Component value={dateValue} readOnly onClick={handleShowCalendar} ref={ref} wrapperRef={inputRef} afterInput={<InputAdornment_1.default onClick={handleShowCalendar}>
              {icon ? (<Icon_1.default component={icon} width={24} height={24}/>) : (<Icon_1.default>
                  {isShowCalendar ? (<ChevronUp_1.default width={24} height={24}/>) : (<ChevronDown_1.default width={24} height={24}/>)}
                </Icon_1.default>)}
            </InputAdornment_1.default>} {...rest}/>

        {isShowCalendar && (<Popover_1.default anchorRef={inputRef} popperOptions={popperOptions} backdrop={Backdrop_1.BackdropTypes.transparent} onClose={handleShowCalendar}>
            <Calendar_1.default hasTime={false} date={selectionDate} rangeData={rangeData} rangeSelected={range} showStaticRange={showStaticRange} months={1} minDate={minDate} maxDate={maxDate} onChange={handleChange} onConfirm={handleConfirm} onCancel={handleCancel} onReset={handleReset}/>
          </Popover_1.default>)}
      </>);
});
exports.Calendar.displayName = "Calendar";
exports.default = exports.Calendar;
//# sourceMappingURL=index.jsx.map