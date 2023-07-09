"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useImageFallback(sourceOfImage, sourceOfFallback) {
    var _a = __read(react_1.useState({
        src: sourceOfImage,
        default: sourceOfImage,
        fallback: sourceOfFallback,
        failed: false
    }), 2), details = _a[0], setDetails = _a[1];
    var handleOnError = react_1.useCallback(function () {
        if (details.failed) {
            return;
        }
        var sourceOfCurrent = details.fallback || details.default;
        setDetails(__assign(__assign({}, details), { src: sourceOfCurrent, failed: true }));
    }, [details, setDetails]);
    react_1.useEffect(function () {
        var isChangedImage = details.default !== sourceOfImage;
        var isChangedFallback = details.fallback !== sourceOfFallback;
        var isChangedSource = isChangedImage || isChangedFallback;
        if (isChangedSource) {
            var sourceOfCurrent = (isChangedImage && sourceOfImage) ||
                (details.failed && isChangedFallback ? sourceOfFallback : details.src);
            setDetails({
                src: sourceOfCurrent,
                default: isChangedImage ? sourceOfImage : details.default,
                fallback: isChangedFallback ? sourceOfFallback : details.fallback,
                failed: isChangedImage ? false : details.failed
            });
        }
    }, [details, sourceOfImage, sourceOfFallback]);
    return [details.src, handleOnError];
}
exports.default = useImageFallback;
//# sourceMappingURL=useImageFallback.js.map