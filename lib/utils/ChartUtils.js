"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeseriesLabelFormatter = exports.SHORT_DATE_TIME_FORMAT = exports.LONG_DATE_TIME_FORMAT = void 0;
var moment_1 = __importDefault(require("moment"));
exports.LONG_DATE_TIME_FORMAT = 'MMM D YYYY, h:mm A';
exports.SHORT_DATE_TIME_FORMAT = 'M/DD h:mm A';
function timeseriesLabelFormatter(timestamp, format) {
    if (format === void 0) { format = exports.LONG_DATE_TIME_FORMAT; }
    return moment_1.default(timestamp * 1000).format(format);
}
exports.timeseriesLabelFormatter = timeseriesLabelFormatter;
//# sourceMappingURL=ChartUtils.js.map