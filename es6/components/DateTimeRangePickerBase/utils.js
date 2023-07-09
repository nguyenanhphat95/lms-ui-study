import cn from 'classnames';
import addMonths from 'date-fns/addMonths';
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
export function calcFocusDate(currentFocusedDate, props) {
    const { shownDate, date, months, ranges, focusedRange, displayMode } = props;
    let targetInterval;
    if (displayMode === 'dateRange') {
        const range = ranges[focusedRange[0]] || {};
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
    targetInterval.start = startOfMonth(targetInterval.start || new Date());
    targetInterval.end = endOfMonth(targetInterval.end || targetInterval.start);
    const targetDate = targetInterval.start || targetInterval.end || shownDate || new Date();
    if (!currentFocusedDate)
        return shownDate || targetDate;
    const currentFocusInterval = {
        start: startOfMonth(currentFocusedDate),
        end: endOfMonth(addMonths(currentFocusedDate, months - 1))
    };
    if (areIntervalsOverlapping(targetInterval, currentFocusInterval)) {
        return currentFocusedDate;
    }
    return targetDate;
}
export function findNextRangeIndex(ranges, currentRangeIndex = -1) {
    const nextIndex = ranges.findIndex((range, i) => i > currentRangeIndex && range.autoFocus !== false && !range.disabled);
    if (nextIndex !== -1)
        return nextIndex;
    return ranges.findIndex(range => range.autoFocus !== false && !range.disabled);
}
export function getMonthDisplayRange(date, dateOptions) {
    const startDateOfMonth = startOfMonth(date);
    const endDateOfMonth = endOfMonth(date);
    const startDateOfCalendar = startOfWeek(startDateOfMonth, dateOptions);
    const endDateOfCalendar = endOfWeek(endDateOfMonth, dateOptions);
    return {
        start: startDateOfCalendar,
        end: endDateOfCalendar,
        startDateOfMonth,
        endDateOfMonth
    };
}
export function generateStyles(sources) {
    if (!sources.length)
        return {};
    const generatedStyles = sources
        .filter(source => Boolean(source))
        .reduce((styles, styleSource) => {
        Object.keys(styleSource).forEach(key => {
            styles[key] = cn(styles[key], styleSource[key]);
        });
        return styles;
    }, {});
    return generatedStyles;
}
//# sourceMappingURL=utils.js.map