"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var DateRange_1 = __importDefault(require("../DateRange"));
var DefinedRange_1 = __importDefault(require("../DefinedRange"));
var utils_1 = require("../utils");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var DateRangePicker = (function (_super) {
    __extends(DateRangePicker, _super);
    function DateRangePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.resetFocusRange = function () {
            _this.setState({ focusedRange: [0, 0] });
        };
        _this.handleChangeRangeFocus = function (focusedRange) {
            _this.setState({ focusedRange: focusedRange });
        };
        _this.state = {
            focusedRange: [utils_1.findNextRangeIndex(props.ranges), 0]
        };
        return _this;
    }
    DateRangePicker.prototype.render = function () {
        var _this = this;
        var focusedRange = this.state.focusedRange;
        return (<div className={classnames_1.default(styles_module_scss_1.default.dateRangePickerWrapper, this.props.className)}>
        {this.props.showStaticRange && (<DefinedRange_1.default focusedRange={focusedRange} onPreviewChange={function (value) { return _this.dateRange.updatePreview(value); }} {...this.props} range={this.props.ranges[focusedRange[0]]} className={undefined}/>)}
        <DateRange_1.default onRangeFocusChange={this.handleChangeRangeFocus} focusedRange={focusedRange} onResetFocusRange={this.resetFocusRange} {...this.props} ref={function (t) { return (_this.dateRange = t); }} className={undefined}/>
      </div>);
    };
    return DateRangePicker;
}(react_1.Component));
exports.default = DateRangePicker;
//# sourceMappingURL=index.jsx.map