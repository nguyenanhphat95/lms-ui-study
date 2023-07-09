"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsive = void 0;
var react_responsive_1 = require("react-responsive");
var useCheckMobile = function () {
    var isTabletOrMobile = react_responsive_1.useMediaQuery({ query: '(max-width: 1224px)' });
    return isTabletOrMobile;
};
var useResponsive = function () {
    var isDesktopOrLaptop = react_responsive_1.useMediaQuery({
        query: '(min-width: 1224px)'
    });
    var isBigScreen = react_responsive_1.useMediaQuery({ query: '(min-width: 1824px)' });
    var isTabletOrMobile = react_responsive_1.useMediaQuery({ query: '(max-width: 1224px)' });
    var isPortrait = react_responsive_1.useMediaQuery({ query: '(orientation: portrait)' });
    var isRetina = react_responsive_1.useMediaQuery({ query: '(min-resolution: 2dppx)' });
    return {
        isDesktopOrLaptop: isDesktopOrLaptop,
        isBigScreen: isBigScreen,
        isTabletOrMobile: isTabletOrMobile,
        isPortrait: isPortrait,
        isRetina: isRetina
    };
};
exports.useResponsive = useResponsive;
exports.default = useCheckMobile;
//# sourceMappingURL=useCheckMobile.js.map