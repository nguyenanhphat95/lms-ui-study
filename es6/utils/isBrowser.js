const isBrowser = (isIncludeJest = false) => {
    const isRunOnNode = typeof process !== 'undefined' &&
        typeof process.versions.node !== 'undefined';
    const isRunOnBrowser = typeof window === 'object';
    if (isIncludeJest) {
        return isRunOnBrowser;
    }
    if (!isIncludeJest && !isRunOnNode) {
        return true;
    }
    return false;
};
export default isBrowser;
//# sourceMappingURL=isBrowser.js.map