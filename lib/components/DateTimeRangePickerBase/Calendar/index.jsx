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
var ChevronRight_1 = __importDefault(require("lms-icons/components/ChevronRight"));
var ChevronLeft_1 = __importDefault(require("lms-icons/components/ChevronLeft"));
var Refresh_1 = __importDefault(require("lms-icons/components/Refresh"));
var RightArrow_1 = __importDefault(require("lms-icons/components/RightArrow"));
var classnames_1 = __importDefault(require("classnames"));
var addMonths_1 = __importDefault(require("date-fns/addMonths"));
var addYears_1 = __importDefault(require("date-fns/addYears"));
var differenceInCalendarMonths_1 = __importDefault(require("date-fns/differenceInCalendarMonths"));
var differenceInDays_1 = __importDefault(require("date-fns/differenceInDays"));
var format_1 = __importDefault(require("date-fns/format"));
var getHours_1 = __importDefault(require("date-fns/getHours"));
var getMinutes_1 = __importDefault(require("date-fns/getMinutes"));
var isSameDay_1 = __importDefault(require("date-fns/isSameDay"));
var isSameMonth_1 = __importDefault(require("date-fns/isSameMonth"));
var isValid_1 = __importDefault(require("date-fns/isValid"));
var vi_1 = __importDefault(require("date-fns/locale/vi"));
var max_1 = __importDefault(require("date-fns/max"));
var min_1 = __importDefault(require("date-fns/min"));
var setHours_1 = __importDefault(require("date-fns/setHours"));
var setMinutes_1 = __importDefault(require("date-fns/setMinutes"));
var setMonth_1 = __importDefault(require("date-fns/setMonth"));
var setYear_1 = __importDefault(require("date-fns/setYear"));
var subMonths_1 = __importDefault(require("date-fns/subMonths"));
var react_1 = __importStar(require("react"));
var Button_1 = __importStar(require("../../Button"));
var DropdownList_1 = __importDefault(require("../../DropdownList"));
var Grid_1 = __importDefault(require("../../Grid"));
var Input_1 = require("../../Input");
var Option_1 = __importDefault(require("../../Option"));
var Month_1 = __importDefault(require("../Month"));
var utils_1 = require("../utils");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Calendar = (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.dateOptions = {};
        _this.listSizeCache = {};
        _this.handleResetDate = function () {
            _this.setState({ isReset: true });
            _this.props.onReset();
        };
        _this.handleConfirm = function () {
            _this.setState({ isReset: false });
            _this.props.onConfirm();
        };
        _this.changeShownDate = _this.changeShownDate.bind(_this);
        _this.focusToDate = _this.focusToDate.bind(_this);
        _this.updateShownDate = _this.updateShownDate.bind(_this);
        _this.handleRangeFocusChange = _this.handleRangeFocusChange.bind(_this);
        _this.onDragSelectionStart = _this.onDragSelectionStart.bind(_this);
        _this.onDragSelectionEnd = _this.onDragSelectionEnd.bind(_this);
        _this.onDragSelectionMove = _this.onDragSelectionMove.bind(_this);
        _this.renderMonthAndYear = _this.renderMonthAndYear.bind(_this);
        _this.updatePreview = _this.updatePreview.bind(_this);
        _this.estimateMonthSize = _this.estimateMonthSize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.renderHour = _this.renderHour.bind(_this);
        _this.renderMinute = _this.renderMinute.bind(_this);
        _this.onChangeTime = _this.onChangeTime.bind(_this);
        _this.renderConfirmDate = _this.renderConfirmDate.bind(_this);
        _this.dateOptions = { locale: props.locale };
        _this.listSizeCache = {};
        _this.state = {
            focusedDate: utils_1.calcFocusDate(null, props),
            drag: {
                status: false,
                range: { startDate: null, endDate: null },
                disablePreview: false,
            },
            scrollArea: _this.calcScrollArea(props),
            isReset: false,
        };
        return _this;
    }
    Calendar.prototype.calcScrollArea = function (props) {
        var direction = props.direction, months = props.months, scroll = props.scroll;
        if (!scroll.enabled)
            return { enabled: false };
        var longMonthHeight = scroll.longMonthHeight || scroll.monthHeight;
        if (direction === "vertical") {
            return {
                enabled: true,
                monthHeight: scroll.monthHeight || 220,
                longMonthHeight: longMonthHeight || 260,
                calendarWidth: "auto",
                calendarHeight: (scroll.calendarHeight || longMonthHeight || 240) * months,
            };
        }
        return {
            enabled: true,
            monthWidth: scroll.monthWidth || 332,
            calendarWidth: (scroll.calendarWidth || scroll.monthWidth || 332) * months,
            monthHeight: longMonthHeight || 300,
            calendarHeight: longMonthHeight || 300,
        };
    };
    Calendar.prototype.focusToDate = function (date, props, preventUnnecessary) {
        if (props === void 0) { props = this.props; }
        if (preventUnnecessary === void 0) { preventUnnecessary = true; }
        if (!props.scroll.enabled) {
            this.setState({ focusedDate: date });
            return;
        }
        var targetMonthIndex = differenceInCalendarMonths_1.default(date, props.minDate);
        var visibleMonths = this.list.getVisibleRange();
        if (preventUnnecessary && visibleMonths.includes(targetMonthIndex))
            return;
        this.list.scrollTo(targetMonthIndex);
        this.setState({ focusedDate: date });
    };
    Calendar.prototype.updateShownDate = function (props) {
        if (props === void 0) { props = this.props; }
        var newProps = props.scroll.enabled
            ? __assign(__assign({}, props), { months: this.list.getVisibleRange().length }) : props;
        var focusedDate = this.state.focusedDate;
        var _focusedDate = isValid_1.default(focusedDate) ? focusedDate : new Date();
        var newFocus = utils_1.calcFocusDate(_focusedDate, newProps);
        this.focusToDate(newFocus, newProps);
    };
    Calendar.prototype.updatePreview = function (val) {
        if (!val) {
            this.setState({ preview: null });
            return;
        }
        var preview = {
            startDate: val,
            endDate: val,
            color: this.props.color,
        };
        this.setState({ preview: preview });
    };
    Calendar.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.scroll.enabled) {
            setTimeout(function () { return _this.focusToDate(_this.state.focusedDate); }, 1);
        }
    };
    Calendar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var propMapper = {
            dateRange: "ranges",
            date: "date",
        };
        var targetProp = propMapper[nextProps.displayMode];
        if (this.props.locale !== nextProps.locale) {
            this.dateOptions = { locale: nextProps.locale };
        }
        if (JSON.stringify(this.props.scroll) !== JSON.stringify(nextProps.scroll)) {
            this.setState({ scrollArea: this.calcScrollArea(nextProps) });
        }
        if (nextProps[targetProp] !== this.props[targetProp]) {
            this.updateShownDate(nextProps);
        }
    };
    Calendar.prototype.changeShownDate = function (value, mode) {
        if (mode === void 0) { mode = "set"; }
        var focusedDate = this.state.focusedDate;
        var _a = this.props, onShownDateChange = _a.onShownDateChange, minDate = _a.minDate, maxDate = _a.maxDate;
        var modeMapper = {
            monthOffset: function () { return addMonths_1.default(focusedDate, value); },
            setMonth: function () { return setMonth_1.default(focusedDate, value); },
            setYear: function () { return setYear_1.default(focusedDate, value); },
            set: function () { return value; },
        };
        var newDate = min_1.default([max_1.default([modeMapper[mode](), minDate]), maxDate]);
        this.focusToDate(newDate, this.props, false);
        if (typeof onShownDateChange === "function") {
            onShownDateChange(newDate);
        }
    };
    Calendar.prototype.handleRangeFocusChange = function (rangesIndex, rangeItemIndex) {
        if (typeof this.props.onRangeFocusChange === "function") {
            this.props.onRangeFocusChange([rangesIndex, rangeItemIndex]);
        }
    };
    Calendar.prototype.handleScroll = function () {
        var _a = this.props, onShownDateChange = _a.onShownDateChange, minDate = _a.minDate;
        var visibleMonths = this.list.getVisibleRange();
        if (visibleMonths[0] === undefined)
            return;
        var visibleMonth = addMonths_1.default(minDate, visibleMonths[0] || 0);
        var isFocusedToDifferent = !isSameMonth_1.default(visibleMonth, this.state.focusedDate);
        if (isFocusedToDifferent) {
            this.setState({ focusedDate: visibleMonth });
            if (typeof onShownDateChange === "function") {
                onShownDateChange(visibleMonth);
            }
        }
    };
    Calendar.prototype.renderMonthAndYear = function (focusedDate, changeShownDate, props) {
        var showMonthArrow = props.showMonthArrow, minDate = props.minDate, maxDate = props.maxDate;
        var upperYearLimit = (maxDate || Calendar.defaultProps.maxDate).getFullYear();
        var lowerYearLimit = (minDate || Calendar.defaultProps.minDate).getFullYear();
        return (<Grid_1.default container spacing={2} onMouseUp={function (e) { return e.stopPropagation(); }} className={styles_module_scss_1.default.monthAndYearWrapper}>
        <Grid_1.default item xs={6} container justifyContent="space-between" alignItem="center">
          {showMonthArrow && (<Button_1.default fullWidth={false} color={Button_1.ButtonColors.secondary} buttonSize={Button_1.ButtonSizes.sm} icon={ChevronLeft_1.default} onClick={function () { return changeShownDate(-1, "monthOffset"); }}/>)}

          <DropdownList_1.default value={focusedDate.getMonth()} onChange={function (value) { return changeShownDate(value, "setMonth"); }} size={Input_1.InputSizes.sm} className={styles_module_scss_1.default.monthAndYearSelect} menuClassName={styles_module_scss_1.default.monthAndYearSelectMenu}>
            {new Array(12).fill(null).map(function (_, month) {
            var monthName = month + 1;
            return (<Option_1.default key={month} value={month} size={Input_1.InputSizes.sm}>
                  {"Th\u00E1ng " + monthName}
                </Option_1.default>);
        })}
          </DropdownList_1.default>
        </Grid_1.default>

        <Grid_1.default item xs={6} container justifyContent="space-between" alignItem="center">
          <DropdownList_1.default value={focusedDate.getFullYear()} onChange={function (value) { return changeShownDate(value, "setYear"); }} size={Input_1.InputSizes.sm} className={styles_module_scss_1.default.monthAndYearSelect} menuClassName={styles_module_scss_1.default.monthAndYearSelectMenu}>
            {new Array(upperYearLimit - lowerYearLimit + 1)
            .fill(upperYearLimit)
            .map(function (val, i) {
            var year = val - i;
            return (<Option_1.default key={year} value={year} size={Input_1.InputSizes.sm}>
                    {"N\u0103m " + year}
                  </Option_1.default>);
        })}
          </DropdownList_1.default>
          {showMonthArrow && (<Button_1.default fullWidth={false} color={Button_1.ButtonColors.secondary} buttonSize={Button_1.ButtonSizes.sm} icon={ChevronRight_1.default} onClick={function () { return changeShownDate(+1, "monthOffset"); }}/>)}
        </Grid_1.default>
      </Grid_1.default>);
    };
    Calendar.prototype.onDragSelectionStart = function (date) {
        var _a = this.props, onChange = _a.onChange, dragSelectionEnabled = _a.dragSelectionEnabled;
        if (dragSelectionEnabled) {
            this.setState({
                drag: {
                    status: true,
                    range: { startDate: date, endDate: date },
                    disablePreview: true,
                },
            });
        }
        else {
            if (typeof onChange === "function") {
                onChange(date);
            }
        }
    };
    Calendar.prototype.onDragSelectionEnd = function (date) {
        var _a = this.props, updateRange = _a.updateRange, displayMode = _a.displayMode, onChange = _a.onChange, dragSelectionEnabled = _a.dragSelectionEnabled;
        if (!dragSelectionEnabled)
            return;
        if (displayMode === "date" || !this.state.drag.status) {
            if (typeof onChange === "function") {
                onChange(date);
            }
            return;
        }
        var newRange = {
            startDate: this.state.drag.range.startDate,
            endDate: date,
        };
        if (displayMode !== "dateRange" || isSameDay_1.default(newRange.startDate, date)) {
            this.setState({ drag: { status: false, range: {} } }, function () {
                if (typeof onChange === "function") {
                    onChange(date);
                }
            });
        }
        else {
            this.setState({ drag: { status: false, range: {} } }, function () {
                if (typeof updateRange === "function") {
                    updateRange(newRange);
                }
            });
        }
    };
    Calendar.prototype.onDragSelectionMove = function (date) {
        var drag = this.state.drag;
        if (!drag.status || !this.props.dragSelectionEnabled)
            return;
        this.setState({
            drag: {
                status: drag.status,
                range: { startDate: drag.range.startDate, endDate: date },
                disablePreview: true,
            },
        });
    };
    Calendar.prototype.estimateMonthSize = function (index, cache) {
        if (cache === void 0) { cache = null; }
        var _a = this.props, direction = _a.direction, minDate = _a.minDate;
        var scrollArea = this.state.scrollArea;
        if (cache) {
            this.listSizeCache = cache;
            if (cache[index])
                return cache[index];
        }
        if (direction === "horizontal")
            return scrollArea.monthWidth;
        var monthStep = addMonths_1.default(minDate, index);
        var _b = utils_1.getMonthDisplayRange(monthStep, this.dateOptions), start = _b.start, end = _b.end;
        var isLongMonth = differenceInDays_1.default(end, start) + 1 > 7 * 5;
        return isLongMonth ? scrollArea.longMonthHeight : scrollArea.monthHeight;
    };
    Calendar.prototype.formatDateDisplay = function (date, defaultText, dateFormat) {
        if (dateFormat === void 0) { dateFormat = "dd/MM/yyyy"; }
        if (!isValid_1.default(date))
            return defaultText;
        return format_1.default(date, dateFormat, this.dateOptions);
    };
    Calendar.prototype.getTimeFromDate = function (type, date) {
        if (!date) {
            return 0;
        }
        if (type === "hour") {
            return getHours_1.default(date);
        }
        else {
            return getMinutes_1.default(date);
        }
    };
    Calendar.prototype.renderHour = function (type) {
        var _this = this;
        var ranges = this.props.ranges;
        var dateSelected = type === "startHour" ? ranges[0].startDate : ranges[0].endDate;
        var isDisabled = (type === "startHour" && !ranges[0].startDate) ||
            (type === "endHour" && !ranges[0].endDate);
        var hourFormatted = this.getTimeFromDate("hour", dateSelected);
        return (<DropdownList_1.default className={styles_module_scss_1.default.hourSelect} name={type} value={hourFormatted} disabled={isDisabled} onChange={function (value) { return _this.onChangeTime(type, value); }} size={Input_1.InputSizes.xs} menuClassName={styles_module_scss_1.default.hourAndMinuteSelectMenu}>
        {new Array(24).fill(null).map(function (_, hour) {
            var hourText = hour < 10 ? "0" + hour : "" + hour;
            return (<Option_1.default key={hour} value={hour} size={Input_1.InputSizes.xs}>
              {hourText}
            </Option_1.default>);
        })}
      </DropdownList_1.default>);
    };
    Calendar.prototype.renderMinute = function (type) {
        var _this = this;
        var ranges = this.props.ranges;
        var dateSelected = type === "startMinute" ? ranges[0].startDate : ranges[0].endDate;
        var isDisabled = (type === "startMinute" && !ranges[0].startDate) ||
            (type === "endMinute" && !ranges[0].endDate);
        var minuteFormatted = this.getTimeFromDate("minute", dateSelected);
        return (<DropdownList_1.default className={styles_module_scss_1.default.hourSelect} name={type} value={minuteFormatted} disabled={isDisabled} onChange={function (value) { return _this.onChangeTime(type, value); }} size={Input_1.InputSizes.xs} menuClassName={styles_module_scss_1.default.hourAndMinuteSelectMenu}>
        {new Array(60).fill(null).map(function (_, minute) {
            var minuteText = minute < 10 ? "0" + minute : "" + minute;
            return (<Option_1.default key={minute} value={minute} size={Input_1.InputSizes.xs}>
              {minuteText}
            </Option_1.default>);
        })}
      </DropdownList_1.default>);
    };
    Calendar.prototype.onChangeTime = function (type, time) {
        var _a = this.props, ranges = _a.ranges, onSetTime = _a.onSetTime;
        if (type === "startHour") {
            onSetTime(setHours_1.default(ranges[0].startDate, time), "startTime");
        }
        else if (type === "endHour") {
            onSetTime(setHours_1.default(ranges[0].endDate, time), "endTime");
        }
        else if (type === "startMinute") {
            onSetTime(setMinutes_1.default(ranges[0].startDate, time), "startTime");
        }
        else if (type === "endMinute") {
            onSetTime(setMinutes_1.default(ranges[0].endDate, time), "endTime");
        }
    };
    Calendar.prototype.renderConfirmDate = function () {
        var _a;
        var _b = this.props, hasTime = _b.hasTime, dateDisplayFormat = _b.dateDisplayFormat, date = _b.date, ranges = _b.ranges, months = _b.months, onResetFocusRange = _b.onResetFocusRange, onCancel = _b.onCancel, onConfirm = _b.onConfirm, rangeSelected = _b.rangeSelected;
        var formatPattern = hasTime ? dateDisplayFormat : "dd/MM/yyyy";
        var isRangeNotNull = ranges.length > 0 &&
            (isValid_1.default(ranges[0].startDate) || isValid_1.default(ranges[0].endDate));
        var isRangeValid = (ranges.length > 0 &&
            isValid_1.default(ranges[0].startDate) &&
            isValid_1.default(ranges[0].endDate)) ||
            isValid_1.default(date);
        var timeFormatted = "";
        if (isRangeNotNull) {
            var startTimeFormatted = this.formatDateDisplay(ranges[0].startDate, "", formatPattern);
            var endTimeFormatted = this.formatDateDisplay(ranges[0].endDate, "", formatPattern);
            timeFormatted = isRangeNotNull
                ? startTimeFormatted + " - " + endTimeFormatted
                : "";
        }
        var handleCancel = function () {
            if (onResetFocusRange) {
                onResetFocusRange();
            }
            onCancel();
        };
        var showResetButton = (!!rangeSelected &&
            isValid_1.default(rangeSelected.startDate) &&
            isValid_1.default(rangeSelected.endDate)) ||
            isValid_1.default(date);
        return (<Grid_1.default container spacing={8} direction="column">
        <Grid_1.default item container justifyContent="space-between" className={classnames_1.default(styles_module_scss_1.default.confirmDate, (_a = {},
            _a[styles_module_scss_1.default.hasOneMonth] = months === 1,
            _a))}>
          <div>
            {showResetButton && (<Button_1.default className={styles_module_scss_1.default.btnReset} icon={Refresh_1.default} buttonSize={Button_1.ButtonSizes.sm} color={Button_1.ButtonColors.secondary} onClick={this.handleResetDate}/>)}

            {months > 1 && (<span className={styles_module_scss_1.default.dateRangeResult}>{timeFormatted}</span>)}
          </div>
          <div>
            <Button_1.default color={Button_1.ButtonColors.secondary} buttonSize={Button_1.ButtonSizes.sm} className={styles_module_scss_1.default.btnConfirm} onClick={handleCancel}>
              Thoát
            </Button_1.default>
            <Button_1.default color={Button_1.ButtonColors.primary} buttonSize={Button_1.ButtonSizes.sm} className={styles_module_scss_1.default.btnConfirm} disabled={!isRangeValid && !this.state.isReset} onClick={onConfirm}>
              Áp dụng
            </Button_1.default>
          </div>
        </Grid_1.default>
      </Grid_1.default>);
    };
    Calendar.prototype.render = function () {
        var _this = this;
        var _a = this.props, onPreviewChange = _a.onPreviewChange, direction = _a.direction, disabledDates = _a.disabledDates, rangeColors = _a.rangeColors, color = _a.color, months = _a.months;
        var focusedDate = this.state.focusedDate;
        var isVertical = direction === "vertical";
        var navigatorRenderer = this.props.navigatorRenderer || this.renderMonthAndYear;
        var ranges = this.props.ranges.map(function (range, i) { return (__assign(__assign({}, range), { color: range.color || rangeColors[i] || color })); });
        var _focusedDate = isValid_1.default(focusedDate)
            ? focusedDate
            : subMonths_1.default(new Date(), 1);
        return (<div className={classnames_1.default(styles_module_scss_1.default.calendarWrapper, this.props.className)} onMouseUp={function () { return _this.setState({ drag: { status: false, range: {} } }); }} onMouseLeave={function () {
            _this.setState({ drag: { status: false, range: {} } });
        }}>
        <Grid_1.default container direction="column" spacing={4}>
          <Grid_1.default item>
            {navigatorRenderer(focusedDate, this.changeShownDate, this.props)}
          </Grid_1.default>

          <Grid_1.default item className={classnames_1.default(styles_module_scss_1.default.months, isVertical ? styles_module_scss_1.default.monthsVertical : styles_module_scss_1.default.monthsHorizontal)}>
            {new Array(months).fill(null).map(function (_, i) {
            var monthStep = addMonths_1.default(_focusedDate, i);
            return (<Month_1.default {..._this.props} onPreviewChange={_this.props.onPreviewChange || _this.updatePreview} preview={_this.props.preview || _this.state.preview} ranges={ranges} key={i} drag={_this.state.drag} dateOptions={_this.dateOptions} disabledDates={disabledDates} month={monthStep} onDragSelectionStart={_this.onDragSelectionStart} onDragSelectionEnd={_this.onDragSelectionEnd} onDragSelectionMove={_this.onDragSelectionMove} onMouseLeave={function () { return onPreviewChange(); }} styles={styles_module_scss_1.default} showWeekDays={!isVertical || i === 0} showMonthName={months > 1}/>);
        })}
          </Grid_1.default>

          {this.props.hasTime && (<Grid_1.default item className={styles_module_scss_1.default.timeDisplay}>
              <div className={styles_module_scss_1.default.timeItem}>
                {this.renderHour("startHour")}
                <span className={styles_module_scss_1.default.timeSeparate}>:</span>
                {this.renderMinute("startMinute")}
              </div>
              <RightArrow_1.default width="12px" height="24px" className={styles_module_scss_1.default.arrowSeparateTime}/>
              <div className={styles_module_scss_1.default.timeItem}>
                {this.renderHour("endHour")}
                <span className={styles_module_scss_1.default.timeSeparate}>:</span>
                {this.renderMinute("endMinute")}
              </div>
            </Grid_1.default>)}

          <Grid_1.default item/>
          <Grid_1.default item>{this.renderConfirmDate()}</Grid_1.default>
        </Grid_1.default>
      </div>);
    };
    Calendar.defaultProps = {
        showMonthArrow: true,
        showMonthAndYearPickers: true,
        disabledDates: [],
        locale: vi_1.default,
        ranges: [],
        focusedRange: [0, 0],
        dateDisplayFormat: "dd/MM/yyyy - HH:mm",
        monthDisplayFormat: "M, yyyy",
        showDateDisplay: true,
        showPreview: true,
        displayMode: "date",
        months: 1,
        color: "#3d91ff",
        scroll: {
            enabled: false,
        },
        direction: "horizontal",
        maxDate: addYears_1.default(new Date(), 20),
        minDate: addYears_1.default(new Date(), -100),
        rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
        dragSelectionEnabled: true,
    };
    return Calendar;
}(react_1.PureComponent));
exports.default = Calendar;
//# sourceMappingURL=index.jsx.map