export const formatPercent = (value) => {
    const val = Number(value);
    return (val > 100 ? 100 : val < 0 ? 0 : val).toString() + ' %';
};
//# sourceMappingURL=utils.js.map