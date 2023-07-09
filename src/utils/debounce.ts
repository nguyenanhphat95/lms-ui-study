/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-this-alias */

function debounce(func, wait = 100, immediate = false) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default debounce;
