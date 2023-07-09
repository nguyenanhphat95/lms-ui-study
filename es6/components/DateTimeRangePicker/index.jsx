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
import ChevronDown from "lms-icons/components/ChevronDown";
import ChevronUp from "lms-icons/components/ChevronUp";
import addYears from "date-fns/addYears";
import endOfDay from "date-fns/endOfDay";
import format from "date-fns/format";
import isValid from "date-fns/isValid";
import startOfDay from "date-fns/startOfDay";
import _get from "lodash-es/get";
import React, { forwardRef, useEffect, useRef, useState, } from "react";
import { BackdropTypes } from "../Backdrop";
import DateRangePicker from "../DateTimeRangePickerBase/DateRangePicker";
import Icon from "../Icon";
import Input from "../Input";
import InputAdornment from "../InputAdornment";
import Popover from "../Popover";
import { DATE_FORMAT_DEFAULT, PLACEHOLDER_DEFAULT, SELECTION_KEY, TIME_FORMAT_DEFAULT, } from "./const";
const defaultProps = {
    dateDisplayFormat: `${TIME_FORMAT_DEFAULT} ${DATE_FORMAT_DEFAULT}`,
    separate: "-",
    hasTime: false,
    placeholder: PLACEHOLDER_DEFAULT,
    months: 2,
    showStaticRange: true,
    minDate: startOfDay(addYears(new Date(), -100)),
    maxDate: endOfDay(addYears(new Date(), 20)),
    readOnly: false,
    component: Input,
};
export const DateTimeRangePicker = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, range, dateDisplayFormat, onChange, onPreviewChange, hasTime, months, showStaticRange, separate, minDate, maxDate } = _a, rest = __rest(_a, ["component", "range", "dateDisplayFormat", "onChange", "onPreviewChange", "hasTime", "months", "showStaticRange", "separate", "minDate", "maxDate"]);
    const popperOptions = {
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
        ],
    };
    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [selectionRange, setSelectionRange] = useState({
        startDate: _get(range, ["startDate"], null),
        endDate: _get(range, ["endDate"], null),
    });
    const [dateRangeValue, setDateRangeValue] = useState("");
    const inputRef = useRef(null);
    const rangeData = [
        Object.assign(Object.assign({}, selectionRange), { key: SELECTION_KEY }),
    ];
    const setInputValue = (startDate, endDate) => {
        const nextDateDisplayFormat = hasTime
            ? dateDisplayFormat
            : DATE_FORMAT_DEFAULT;
        const startDateFormatted = isValid(startDate)
            ? format(startDate, nextDateDisplayFormat)
            : "";
        const endDateFormatted = isValid(endDate)
            ? format(endDate, nextDateDisplayFormat)
            : "";
        if (startDateFormatted || endDateFormatted) {
            setDateRangeValue(`${startDateFormatted} ${separate} ${endDateFormatted}`);
        }
    };
    const handleShowCalendar = () => {
        setIsShowCalendar(!isShowCalendar && !rest.readOnly && !rest.disabled);
    };
    const handleChange = (data) => {
        const nextData = Object.assign(Object.assign({}, data[SELECTION_KEY]), { key: SELECTION_KEY });
        const nextSelectionRange = Object.assign(Object.assign({}, selectionRange), nextData);
        setSelectionRange(nextSelectionRange);
        if (onPreviewChange instanceof Function) {
            onPreviewChange(nextSelectionRange);
        }
    };
    const handleConfirm = () => {
        setInputValue(selectionRange.startDate, selectionRange.endDate);
        setIsShowCalendar(false);
        onChange(selectionRange);
        if (!selectionRange.startDate && !selectionRange.endDate) {
            setDateRangeValue("");
        }
    };
    const handleCancel = () => {
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
    const handleReset = () => {
        const nextSelectionRange = { startDate: null, endDate: null };
        setSelectionRange(nextSelectionRange);
    };
    useEffect(() => {
        if (!!range.startDate && !!range.endDate) {
            setSelectionRange({
                startDate: range.startDate,
                endDate: range.endDate,
            });
            setInputValue(range.startDate, range.endDate);
        }
    }, [range]);
    return (<>
        <Component {...rest} value={dateRangeValue} readOnly onClick={handleShowCalendar} ref={ref} wrapperRef={inputRef} afterInput={<InputAdornment onClick={handleShowCalendar}>
              <Icon>
                {isShowCalendar ? (<ChevronUp width={24} height={24}/>) : (<ChevronDown width={24} height={24}/>)}
              </Icon>
            </InputAdornment>}/>

        {isShowCalendar && (<Popover anchorRef={inputRef} popperOptions={popperOptions} backdrop={BackdropTypes.transparent} onClose={handleShowCalendar}>
            <DateRangePicker ranges={rangeData} rangeSelected={range} hasTime={hasTime} months={months} showStaticRange={showStaticRange} minDate={minDate} maxDate={maxDate} onChange={handleChange} onConfirm={handleConfirm} onCancel={handleCancel} onReset={handleReset}/>
          </Popover>)}
      </>);
});
DateTimeRangePicker.displayName = "DateTimeRangePicker";
export default DateTimeRangePicker;
//# sourceMappingURL=index.jsx.map