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
var times_1 = __importDefault(require("lodash/times"));
var react_1 = __importStar(require("react"));
var Grid_1 = __importDefault(require("../Grid"));
var Paper_1 = __importDefault(require("../Paper"));
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var pad = function (_value, _number) {
    var value = _value || 0;
    var number = _number || 0;
    if (value < Math.pow(10, number)) {
        var tmp = times_1.default(number - value.toString().length + 1, null)
            .map(function () {
            return '0';
        })
            .join('');
        return tmp + value.toString();
    }
    else {
        return value.toString();
    }
};
var Countdown = (function (_super) {
    __extends(Countdown, _super);
    function Countdown(props) {
        var _this = _super.call(this, props) || this;
        _this.timeInterval = null;
        _this.state = {
            timeLeft: _this.props.endTime > 0 &&
                _this.props.endTime - Math.floor(Date.now() / 1000) > 0
                ? _this.props.endTime - Math.floor(Date.now() / 1000)
                : 0
        };
        return _this;
    }
    Countdown.prototype.componentDidMount = function () {
        var _this = this;
        this.timeInterval = setInterval(function () {
            if (_this.props.endTime > Math.floor(Date.now() / 1000)) {
                _this.setState({
                    timeLeft: _this.props.endTime > 0 &&
                        _this.props.endTime - Math.floor(Date.now() / 1000) > 0
                        ? _this.props.endTime - Math.floor(Date.now() / 1000)
                        : 0
                });
            }
            else {
                clearInterval(_this.timeInterval);
                if (typeof _this.props.onFinish === 'function') {
                    _this.props.onFinish();
                }
            }
        }, 1000);
    };
    Countdown.prototype.componentWillUnmount = function () {
        clearInterval(this.timeInterval);
    };
    Countdown.prototype.render = function () {
        var _a = this.props, showHint = _a.showHint, title = _a.title;
        var timeLeft = this.state.timeLeft;
        var days = Math.floor(timeLeft / 24 / 60 / 60);
        var hoursLeft = Math.floor(timeLeft - days * 86400);
        var hours = Math.floor(hoursLeft / 3600);
        var minutesLeft = Math.floor(hoursLeft - hours * 3600);
        var minutes = Math.floor(minutesLeft / 60);
        var seconds = (timeLeft % 3600) % 60;
        var daysFormatted = pad(days, 1);
        var hoursFormatted = pad(hours, 1);
        var minutesFormatted = pad(minutes, 1);
        var secondsFormatted = pad(seconds, 1);
        return (<div className={styles_module_scss_1.default['countdown']}>
        {showHint && (<Typography_1.default type={Typography_1.TypoTypes.invert} size={Typography_1.TypoSizes.caption} className={styles_module_scss_1.default['countdown-text']}>
            {title}
          </Typography_1.default>)}
        <Paper_1.default className={styles_module_scss_1.default['countdown-timer']}>
          <Grid_1.default container spacing={2} nowrap>
            
            <Grid_1.default item md="auto" className={styles_module_scss_1.default['countdown-item']}>
              <Grid_1.default container direction="column">
                <Typography_1.default size={Typography_1.TypoSizes.caption} weight={Typography_1.TypoWeights.bold} type={Typography_1.TypoTypes.sub}>
                  {daysFormatted}
                </Typography_1.default>
                <Typography_1.default size={Typography_1.TypoSizes.tiny} type={Typography_1.TypoTypes.sub}>
                  Ngày
                </Typography_1.default>
              </Grid_1.default>
            </Grid_1.default>
            
            
            <Grid_1.default item md="auto" className={styles_module_scss_1.default['countdown-item']}>
              <Grid_1.default container direction="column">
                <Typography_1.default size={Typography_1.TypoSizes.caption} weight={Typography_1.TypoWeights.bold} type={Typography_1.TypoTypes.sub}>
                  {hoursFormatted}
                </Typography_1.default>
                <Typography_1.default size={Typography_1.TypoSizes.tiny} type={Typography_1.TypoTypes.sub}>
                  Giờ
                </Typography_1.default>
              </Grid_1.default>
            </Grid_1.default>
            
            
            <Grid_1.default item md="auto" className={styles_module_scss_1.default['countdown-item']}>
              <Grid_1.default container direction="column">
                <Typography_1.default size={Typography_1.TypoSizes.caption} weight={Typography_1.TypoWeights.bold} type={Typography_1.TypoTypes.sub}>
                  {minutesFormatted}
                </Typography_1.default>
                <Typography_1.default size={Typography_1.TypoSizes.tiny} type={Typography_1.TypoTypes.sub}>
                  Phút
                </Typography_1.default>
              </Grid_1.default>
            </Grid_1.default>
            
            
            <Grid_1.default item md="auto" className={styles_module_scss_1.default['countdown-item']}>
              <Grid_1.default container direction="column">
                <Typography_1.default size={Typography_1.TypoSizes.caption} weight={Typography_1.TypoWeights.bold} type={Typography_1.TypoTypes.sub}>
                  {secondsFormatted}
                </Typography_1.default>
                <Typography_1.default size={Typography_1.TypoSizes.tiny} type={Typography_1.TypoTypes.sub}>
                  Giây
                </Typography_1.default>
              </Grid_1.default>
            </Grid_1.default>
            
          </Grid_1.default>
        </Paper_1.default>
      </div>);
    };
    return Countdown;
}(react_1.Component));
exports.default = Countdown;
//# sourceMappingURL=Countdown.jsx.map