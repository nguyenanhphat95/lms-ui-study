const formatNumber = (number: number, separatorSym = ','): string => {
  if (typeof number !== 'number') {
    return '';
  } else if (number === 0) {
    return '0';
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorSym);
};

const formatNumberInputValue = (inputString: string | any): number => {
  if (typeof inputString !== 'string') {
    return inputString;
  }
  inputString = inputString.replace(/[-,.]/g, '');
  return parseToInt(inputString);
};

const formatNumberRemoveFloatCharacter = (inputString: string | any): number | any => {
  if (typeof inputString !== 'string') {
    return inputString;
  }
  return parseToFloat(inputString.replace(/[-,]/g, ''));
};

const formatNumberHasDecimal = (inputString: string | any): number | any => {
  if (typeof inputString !== 'string') {
    return inputString;
  }
  return parseToFloat(inputString);
};

const parseToInt = (number: number | any): any => {
  if (!number) {
    return '';
  }

  return parseInt(number, 10);
};

const parseToFloat = (number: number | any) => {
  if (!number) {
    return '';
  }

  return parseFloat(number);
};

const removeOddSymbolFromNumberString = (string: string) =>
  string ? string.replace(/([^\d|\-|,])/g, '') : '';

export {
  formatNumber,
  formatNumberInputValue,
  parseToInt,
  parseToFloat,
  removeOddSymbolFromNumberString,
  formatNumberHasDecimal,
  formatNumberRemoveFloatCharacter,
};
