const defaultFunction = () => {};

function compose(...funcs: any) {
  return funcs.filter(Boolean).reduce((acc: any, func: any) => {
    return function chainedFunction(...args: any) {
      // @ts-ignore
      acc.apply(this, args);
      // @ts-ignore
      func.apply(this, args);
    };
  }, defaultFunction);
}

export default compose;
