import { getListOfButton, getRangeOfButton } from './utils';

type InputProps = {
  currentOfPage: number;
  totalOfPage: number;
  displayOfButton: number;
};

export const useRangeAndList = ({ currentOfPage, totalOfPage, displayOfButton }: InputProps) => {
  const rangeOfButton = getRangeOfButton(currentOfPage, totalOfPage, displayOfButton);
  const listOfButton = getListOfButton(rangeOfButton);

  return {
    list: listOfButton,
    range: rangeOfButton,
  };
};
