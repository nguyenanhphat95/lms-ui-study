"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useCheckbox(defaultValue, valuesOfOptions) {
    var _a = __read(react_1.useState(defaultValue || []), 2), selected = _a[0], updateSelected = _a[1];
    var onChange = react_1.useCallback(function (event) {
        var value = (event.target || {}).value;
        var isExisted = selected.includes(value);
        var result = isExisted
            ? selected.filter(function (v) { return v !== value; })
            : __spread(selected, [value]);
        updateSelected(result);
    }, [selected, updateSelected]);
    var selectAll = react_1.useCallback(function () { return updateSelected(valuesOfOptions); }, [
        valuesOfOptions,
        updateSelected,
    ]);
    var unselectAll = react_1.useCallback(function () { return updateSelected([]); }, [updateSelected]);
    var isIntermediate = selected.length < valuesOfOptions.length;
    return {
        selected: selected,
        onChange: onChange,
        isIntermediate: isIntermediate,
        selectAll: selectAll,
        unselectAll: unselectAll,
    };
}
exports.default = useCheckbox;
//# sourceMappingURL=useCheckbox.js.map