"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRangeAndList = void 0;
var utils_1 = require("./utils");
var useRangeAndList = function (_a) {
    var currentOfPage = _a.currentOfPage, totalOfPage = _a.totalOfPage, displayOfButton = _a.displayOfButton;
    var rangeOfButton = utils_1.getRangeOfButton(currentOfPage, totalOfPage, displayOfButton);
    var listOfButton = utils_1.getListOfButton(rangeOfButton);
    return {
        list: listOfButton,
        range: rangeOfButton,
    };
};
exports.useRangeAndList = useRangeAndList;
//# sourceMappingURL=hooks.js.map