import ChevronDown from "lms-icons/components/ChevronDown";
import ChevronUp from "lms-icons/components/ChevronUp";
import addYears from "date-fns/addYears";
import endOfDay from "date-fns/endOfDay";
import format from "date-fns/format";
import startOfDay from "date-fns/startOfDay";
import React, { forwardRef, MutableRefObject, useRef, useState } from "react";
import { BackdropTypes } from "../Backdrop";
import CalendarPicker from "../DateTimeRangePickerBase/Calendar";
import Icon from "../Icon";
import Input from "../Input";
import InputAdornment from "../InputAdornment";
import Popover from "../Popover";
import { DATE_FORMAT_DEFAULT, PLACEHOLDER_DEFAULT } from "./const";

interface CalendarProps {
  /**
   * Define date value.
   */
  date: Date;
  /**
   * Selected range preview formatter. Check out [date-fns's](https://date-fns.org/docs/format) format option.
   * Default: `dddd-MM-yyy`
   */
  dateDisplayFormat?: string;
  /**
   * Defines minimum date. Disabled earlier dates.
   * Default: 100 years before the current date .
   */
  minDate?: Date;
  /**
   * Defines maximum date. Disabled later dates.
   * Default: 20 years after the current date.
   */
  maxDate?: Date;
  /**
   * The input placeholder.
   */
  placeholder?: String;
  /**
   * Set input read only.
   * Default: false
   */
  readOnly?: boolean;
  /**
   * Set input disabled.
   * Default: false
   */
  disabled?: boolean;
  /**
   * The callback function for date change.
   * Required.
   */
  onChange: (date: Date) => void;
  /**
   * Set calendar icon on after input
   */
  icon?: React.ReactNode;
}

interface CalendarDefaultProps extends Partial<CalendarProps> {
  date: Date;
  dateDisplayFormat: string;
  showStaticRange: boolean;
  months: number;
  minDate: Date;
  maxDate: Date;
  component: React.ElementType;
}

const defaultProps: CalendarDefaultProps = {
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

export const Calendar = forwardRef(
  (props: CalendarProps, ref: MutableRefObject<any>) => {
    const {
      component: Component,
      date,
      dateDisplayFormat,
      showStaticRange,
      onChange,
      months,
      minDate,
      maxDate,
      icon,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    };
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

    // @TOTO: workaround
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

    const setInputValue = (selectedDate: Date) => {
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

    const handleChange = (selectedDate: Date) => {
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
      } else {
        setSelectionDate(date);
      }
      setIsShowCalendar(false);
    };

    const handleReset = () => {
      onChange(null);
      setDateValue("");
      setSelectionDate(null);
    };

    return (
      <>
        <Component
          value={dateValue}
          readOnly
          onClick={handleShowCalendar}
          ref={ref}
          wrapperRef={inputRef}
          afterInput={
            <InputAdornment onClick={handleShowCalendar}>
              {icon ? (
                <Icon component={icon} width={24} height={24} />
              ) : (
                <Icon>
                  {isShowCalendar ? (
                    <ChevronUp width={24} height={24} />
                  ) : (
                    <ChevronDown width={24} height={24} />
                  )}
                </Icon>
              )}
            </InputAdornment>
          }
          {...rest}
        />

        {isShowCalendar && (
          <Popover
            anchorRef={inputRef}
            popperOptions={popperOptions}
            backdrop={BackdropTypes.transparent}
            onClose={handleShowCalendar}
          >
            <CalendarPicker
              hasTime={false}
              date={selectionDate}
              rangeData={rangeData}
              rangeSelected={range}
              showStaticRange={showStaticRange}
              months={1}
              minDate={minDate}
              maxDate={maxDate}
              onChange={handleChange}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
              onReset={handleReset}
            />
          </Popover>
        )}
      </>
    );
  }
);

Calendar.displayName = "Calendar";

export default Calendar;
