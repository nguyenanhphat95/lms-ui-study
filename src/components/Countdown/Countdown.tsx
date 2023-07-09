/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import _times from 'lodash/times';
import React, { Component } from 'react';
import Grid from '../Grid';
import Paper from '../Paper';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';

const pad = (_value: number, _number: number) => {
  const value = _value || 0;
  const number = _number || 0;

  if (value < Math.pow(10, number)) {
    const tmp = _times(number - value.toString().length + 1, null)
      .map(() => {
        return '0';
      })
      .join('');

    return tmp + value.toString();
  } else {
    return value.toString();
  }
};

interface Props {
  showHint?: boolean;
}

interface Props {
  showHint?: boolean;
  endTime?: number;
  onFinish?: () => void;
  title?: string;
}
interface State {
  timeLeft: number;
}

class Countdown extends Component<Props, State> {
  timeInterval: any;
  constructor(props: Props) {
    super(props);
    this.timeInterval = null;
    this.state = {
      timeLeft:
        this.props.endTime > 0 &&
        this.props.endTime - Math.floor(Date.now() / 1000) > 0
          ? this.props.endTime - Math.floor(Date.now() / 1000)
          : 0
    };
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      if (this.props.endTime > Math.floor(Date.now() / 1000)) {
        this.setState({
          timeLeft:
            this.props.endTime > 0 &&
            this.props.endTime - Math.floor(Date.now() / 1000) > 0
              ? this.props.endTime - Math.floor(Date.now() / 1000)
              : 0
        });
      } else {
        clearInterval(this.timeInterval);
        if (typeof this.props.onFinish === 'function') {
          this.props.onFinish();
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { showHint, title } = this.props;
    const { timeLeft } = this.state;
    const days = Math.floor(timeLeft / 24 / 60 / 60);
    const hoursLeft = Math.floor(timeLeft - days * 86400);
    const hours = Math.floor(hoursLeft / 3600);
    const minutesLeft = Math.floor(hoursLeft - hours * 3600);
    const minutes = Math.floor(minutesLeft / 60);
    const seconds = (timeLeft % 3600) % 60;
    // format
    const daysFormatted = pad(days, 1);
    const hoursFormatted = pad(hours, 1);
    const minutesFormatted = pad(minutes, 1);
    const secondsFormatted = pad(seconds, 1);
    return (
      <div className={styles['countdown']}>
        {showHint && (
          <Typography
            type={TypoTypes.invert}
            size={TypoSizes.caption}
            className={styles['countdown-text']}
          >
            {title}
          </Typography>
        )}
        <Paper className={styles['countdown-timer']}>
          <Grid container spacing={2} nowrap>
            {/* item */}
            <Grid item md="auto" className={styles['countdown-item']}>
              <Grid container direction="column">
                <Typography
                  size={TypoSizes.caption}
                  weight={TypoWeights.bold}
                  type={TypoTypes.sub}
                >
                  {daysFormatted}
                </Typography>
                <Typography size={TypoSizes.tiny} type={TypoTypes.sub}>
                  Ngày
                </Typography>
              </Grid>
            </Grid>
            {/* item */}
            {/* item */}
            <Grid item md="auto" className={styles['countdown-item']}>
              <Grid container direction="column">
                <Typography
                  size={TypoSizes.caption}
                  weight={TypoWeights.bold}
                  type={TypoTypes.sub}
                >
                  {hoursFormatted}
                </Typography>
                <Typography size={TypoSizes.tiny} type={TypoTypes.sub}>
                  Giờ
                </Typography>
              </Grid>
            </Grid>
            {/* item */}
            {/* item */}
            <Grid item md="auto" className={styles['countdown-item']}>
              <Grid container direction="column">
                <Typography
                  size={TypoSizes.caption}
                  weight={TypoWeights.bold}
                  type={TypoTypes.sub}
                >
                  {minutesFormatted}
                </Typography>
                <Typography size={TypoSizes.tiny} type={TypoTypes.sub}>
                  Phút
                </Typography>
              </Grid>
            </Grid>
            {/* item */}
            {/* item */}
            <Grid item md="auto" className={styles['countdown-item']}>
              <Grid container direction="column">
                <Typography
                  size={TypoSizes.caption}
                  weight={TypoWeights.bold}
                  type={TypoTypes.sub}
                >
                  {secondsFormatted}
                </Typography>
                <Typography size={TypoSizes.tiny} type={TypoTypes.sub}>
                  Giây
                </Typography>
              </Grid>
            </Grid>
            {/* item */}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Countdown;
