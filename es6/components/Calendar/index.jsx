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
import startOfDay from "date-fns/startOfDay";
import React, { forwardRef, useRef, useState } from "react";
import { BackdropTypes } from "../Backdrop";
import CalendarPicker from "../DateTimeRangePickerBase/Calendar";
import Icon from "../Icon";
import Input from "../Input";
import InputAdornment from "../InputAdornment";
import Popover from "../Popover";
import { DATE_FORMAT_DEFAULT, PLACEHOLDER_DEFAULT } from "./const";
const defaultProps = {
    date: null,
    dateDisplayFormat: DATE_FORMAT_DEFAULT,
    placeholder: PLACEHOLDER_DEFAULT,
    months: 1,
    minDate: startOfDay(addYears(new Date(), -100)),
    maxDate: endOfDay(addYears(new Date(), 20)),
    readOnly: false,
    showStaticRange: true,
    component: Input,
};
export const Calendar = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, date, dateDisplayFormat, showStaticRange, onChange, months, minDate, maxDate, icon } = _a, rest = __rest(_a, ["component", "date", "dateDisplayFormat", "showStaticRange", "onChange", "months", "minDate", "maxDate", "icon"]);
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
    const [selectionDate, setSelectionDate] = useState(date);
    const [dateValue, setDateValue] = useState("");
    const rangeData = [
        {
            startDate: null,
            endDate: null,
        },
    ];
    const range = {
        startDate: selectionDate || null,
        endDate: selectionDate || null,
    };
    const inputRef = useRef(null);
    const setInputValue = (selectedDate) => {
        const dateFormatted = selectedDate
            ? format(selectedDate, dateDisplayFormat)
            : "";
        if (dateFormatted) {
            setDateValue(dateFormatted);
        }
    };
    const handleShowCalendar = () => {
        setIsShowCalendar(!isShowCalendar && !rest.readOnly && !rest.disabled);
    };
    const handleChange = (selectedDate) => {
        setSelectionDate(selectedDate);
    };
    const handleConfirm = () => {
        setInputValue(selectionDate);
        setIsShowCalendar(false);
        onChange(selectionDate);
    };
    const handleCancel = () => {
        if (!date) {
            setSelectionDate(null);
            setDateValue("");
        }
        else {
            setSelectionDate(date);
        }
        setIsShowCalendar(false);
    };
    const handleReset = () => {
        onChange(null);
        setDateValue("");
        setSelectionDate(null);
    };
    return (<>
        <Component value={dateValue} readOnly onClick={handleShowCalendar} ref={ref} wrapperRef={inputRef} afterInput={<InputAdornment onClick={handleShowCalendar}>
              {icon ? (<Icon component={icon} width={24} height={24}/>) : (<Icon>
                  {isShowCalendar ? (<ChevronUp width={24} height={24}/>) : (<ChevronDown width={24} height={24}/>)}
                </Icon>)}
            </InputAdornment>} {...rest}/>

        {isShowCalendar && (<Popover anchorRef={inputRef} popperOptions={popperOptions} backdrop={BackdropTypes.transparent} onClose={handleShowCalendar}>
            <CalendarPicker hasTime={false} date={selectionDate} rangeData={rangeData} rangeSelected={range} showStaticRange={showStaticRange} months={1} minDate={minDate} maxDate={maxDate} onChange={handleChange} onConfirm={handleConfirm} onCancel={handleCancel} onReset={handleReset}/>
          </Popover>)}
      </>);
});
Calendar.displayName = "Calendar";
export default Calendar;
//# sourceMappingURL=index.jsx.map