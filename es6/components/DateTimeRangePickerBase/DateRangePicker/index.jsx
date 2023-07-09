import cn from 'classnames';
import React, { Component } from 'react';
import DateRange from '../DateRange';
import DefinedRange from '../DefinedRange';
import { findNextRangeIndex } from '../utils';
import styles from './styles.module.scss';
class DateRangePicker extends Component {
    constructor(props) {
        super(props);
        this.resetFocusRange = () => {
            this.setState({ focusedRange: [0, 0] });
        };
        this.handleChangeRangeFocus = focusedRange => {
            this.setState({ focusedRange });
        };
        this.state = {
            focusedRange: [findNextRangeIndex(props.ranges), 0]
        };
    }
    render() {
        const { focusedRange } = this.state;
        return (<div className={cn(styles.dateRangePickerWrapper, this.props.className)}>
        {this.props.showStaticRange && (<DefinedRange focusedRange={focusedRange} onPreviewChange={value => this.dateRange.updatePreview(value)} {...this.props} range={this.props.ranges[focusedRange[0]]} className={undefined}/>)}
        <DateRange onRangeFocusChange={this.handleChangeRangeFocus} focusedRange={focusedRange} onResetFocusRange={this.resetFocusRange} {...this.props} ref={t => (this.dateRange = t)} className={undefined}/>
      </div>);
    }
}
export default DateRangePicker;
//# sourceMappingURL=index.jsx.map