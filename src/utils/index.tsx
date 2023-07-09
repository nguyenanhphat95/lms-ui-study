import { BILLION_UNIT, MILLION_UNIT } from './constants';

export const convertMoney = (
  value = 0,
  billionMeasure: string,
  millionMeasure: string
) => {
  if (value >= BILLION_UNIT) {
    return `${value / BILLION_UNIT} ${billionMeasure}`;
  }
  if (value >= MILLION_UNIT) {
    return `${value / MILLION_UNIT} ${millionMeasure}`;
  }
  return value;
};
