const defaultFunction = () => { };
function compose(...funcs) {
    return funcs.filter(Boolean).reduce((acc, func) => {
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, defaultFunction);
}
export default compose;
//# sourceMappingURL=compose.js.map