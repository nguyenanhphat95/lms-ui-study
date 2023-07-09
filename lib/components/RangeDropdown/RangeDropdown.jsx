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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@App/utils");
var numberFormat_1 = require("@App/utils/numberFormat");
var ChevronRight_1 = __importDefault(require("lms-icons/components/ChevronRight"));
var classnames_1 = __importDefault(require("classnames"));
var find_1 = __importDefault(require("lodash/find"));
var get_1 = __importDefault(require("lodash/get"));
var react_1 = __importStar(require("react"));
var Backdrop_1 = require("../Backdrop");
var Box_1 = __importDefault(require("../Box"));
var Chip_1 = __importDefault(require("../Chip"));
var Grid_1 = __importDefault(require("../Grid"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = __importStar(require("../Input"));
var NumberFormat_1 = __importDefault(require("../NumberFormat"));
var InputAdornment_1 = __importDefault(require("../InputAdornment"));
var Popover_1 = __importDefault(require("../Popover"));
var Popper_1 = require("../Popper");
var Typography_1 = __importStar(require("../Typography"));
var PriceRangeInput_1 = __importDefault(require("./PriceRangeInput"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    placeholderFrom: "Thấp nhất",
    placeholderTo: "Lớn nhất",
    billionLabel: "Tỷ",
    millionLabel: "Triệu",
    title: "Input your title",
    deleteLabel: "Xoá",
};
var RangeDropdown = function (props) {
    var _a, _b;
    var _c = __assign(__assign({}, defaultProps), props), onClose = _c.onClose, onChange = _c.onChange, className = _c.className, iconClassName = _c.iconClassName, _d = _c.disabledInput, disabledInput = _d === void 0 ? true : _d, placeholder = _c.placeholder, disabled = _c.disabled, recommendData = _c.recommendData, unit = _c.unit, defaultValues = _c.defaultValues, inline = _c.inline, placeholderFrom = _c.placeholderFrom, placeholderTo = _c.placeholderTo, billionLabel = _c.billionLabel, millionLabel = _c.millionLabel, title = _c.title, deleteLabel = _c.deleteLabel, rest = __rest(_c, ["onClose", "onChange", "className", "iconClassName", "disabledInput", "placeholder", "disabled", "recommendData", "unit", "defaultValues", "inline", "placeholderFrom", "placeholderTo", "billionLabel", "millionLabel", "title", "deleteLabel"]);
    var anchorRef = react_1.useRef(null);
    var _e = __read(react_1.useState(null), 2), value = _e[0], setValue = _e[1];
    var _f = __read(react_1.useState(null), 2), priceFrom = _f[0], setPriceFrom = _f[1];
    var _g = __read(react_1.useState(null), 2), priceTo = _g[0], setPriceTo = _g[1];
    var _h = __read(react_1.useState(false), 2), isOpen = _h[0], setIsOpen = _h[1];
    react_1.useEffect(function () {
        var from = get_1.default(defaultValues, "from");
        var to = get_1.default(defaultValues, "to");
        setPriceFrom(from);
        setPriceTo(to);
        if (!from && !to) {
            setValue(null);
        }
    }, [defaultValues]);
    var _showDropdown = function () {
        setIsOpen(true);
    };
    var _hideDropdown = function () {
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    };
    var classNameOfIcons = classnames_1.default(iconClassName, styles_module_scss_1.default["dropdown-icon"], styles_module_scss_1.default["dropdown-addon-size-" + rest.size], (_a = {},
        _a[styles_module_scss_1.default["icon-open"]] = isOpen,
        _a));
    var afterInput = react_1.useMemo(function () { return (<InputAdornment_1.default>
        <Icon_1.default onClick={_showDropdown} className={classNameOfIcons} component={ChevronRight_1.default}/>
      </InputAdornment_1.default>); }, [isOpen, disabled]);
    var _handleSelectPriceRange = function (item) {
        setValue(item.id);
        setPriceFrom(item.from);
        setPriceTo(item.to);
        if (onChange) {
            onChange(item.from, item.to);
        }
    };
    var _getCurrentPriceFrom = function () {
        return priceFrom;
    };
    var _getCurrentPriceTo = function () {
        return priceTo;
    };
    var _handleChangePriceFrom = function (e) {
        setValue(null);
        var priceFrom = get_1.default(e, "target.value", null);
        setPriceFrom(priceFrom);
        if (onChange) {
            onChange(priceFrom, priceTo);
        }
    };
    var _handleChangePriceTo = function (e) {
        setValue(null);
        var priceTo = get_1.default(e, "target.value", null);
        setPriceTo(get_1.default(e, "target.value", null));
        if (onChange) {
            onChange(priceFrom, priceTo);
        }
    };
    var _handleClear = function () {
        setValue(null);
        var priceFrom = null;
        var priceTo = null;
        setPriceFrom(priceFrom);
        setPriceTo(priceTo);
        if (onChange) {
            onChange(priceFrom, priceTo);
        }
    };
    var display = (<Typography_1.default type={Typography_1.TypoTypes.sub}>{placeholder}</Typography_1.default>);
    if (value !== null && typeof value !== "undefined") {
        var data = find_1.default(recommendData, function (x) { return x.id === value; });
        if (data) {
            display = (<Typography_1.default type={Typography_1.TypoTypes.sub}>{get_1.default(data, "text")}</Typography_1.default>);
        }
    }
    else if (priceFrom || priceTo) {
        var formattedPriceFrom = numberFormat_1.formatNumberRemoveFloatCharacter(priceFrom);
        var formattedPriceTo = numberFormat_1.formatNumberRemoveFloatCharacter(priceTo);
        var formattedPriceFromText = formattedPriceFrom > 0
            ? utils_1.convertMoney(formattedPriceFrom, billionLabel, millionLabel)
            : "";
        var formattedPriceToText = formattedPriceTo > 0
            ? utils_1.convertMoney(formattedPriceTo, billionLabel, millionLabel)
            : "";
        if (formattedPriceFromText && formattedPriceToText) {
            display = (<Typography_1.default type={Typography_1.TypoTypes.sub}>
          {formattedPriceFromText} - {formattedPriceToText} {unit}
        </Typography_1.default>);
        }
        else if (formattedPriceFromText) {
            display = (<Typography_1.default type={Typography_1.TypoTypes.sub}>
          &gt;= {formattedPriceFromText} {unit}
        </Typography_1.default>);
        }
        else if (formattedPriceToText) {
            display = (<Typography_1.default type={Typography_1.TypoTypes.sub}>
          &lt;= {formattedPriceToText} {unit}
        </Typography_1.default>);
        }
    }
    var classOfRoot = classnames_1.default(className, styles_module_scss_1.default["root"]);
    var inputSize = Input_1.InputSizes.md;
    var content = (<Grid_1.default container direction="column" spacing={3}>
      
      <Grid_1.default item>
        <Grid_1.default container alignItem="center" justifyContent="space-between">
          <Grid_1.default item xs="auto">
            <Typography_1.default weight={Typography_1.TypoWeights.bold}>{title}</Typography_1.default>
          </Grid_1.default>
          <Grid_1.default item xs="auto">
            <Typography_1.default className={styles_module_scss_1.default["btn-clear"]} size={Typography_1.TypoSizes.caption} type={Typography_1.TypoTypes.link} onClick={_handleClear}>
              {deleteLabel}
            </Typography_1.default>
          </Grid_1.default>
        </Grid_1.default>
      </Grid_1.default>
      
      
      <Grid_1.default item>
        <Box_1.default pb={1}>
          <Grid_1.default container spacing={2} alignItem="center" nowrap justifyContent="space-between">
            <Grid_1.default item xs={true}>
              <NumberFormat_1.default placeholder={placeholderFrom} min={0} max={1000000000000} size={inputSize} value={_getCurrentPriceFrom()} onChange={_handleChangePriceFrom} decimalSeparator={false}/>
            </Grid_1.default>
            <Grid_1.default item xs="auto">
              <Typography_1.default type={Typography_1.TypoTypes.sub} size={Typography_1.TypoSizes.caption}>
                đến
              </Typography_1.default>
            </Grid_1.default>
            <Grid_1.default item xs={true}>
              <NumberFormat_1.default placeholder={placeholderTo} min={0} max={1000000000000} size={inputSize} value={_getCurrentPriceTo()} onChange={_handleChangePriceTo} decimalSeparator={false}/>
            </Grid_1.default>
          </Grid_1.default>
        </Box_1.default>
      </Grid_1.default>
      
      <Grid_1.default item>
        <Grid_1.default container spacing={3}>
          {recommendData.map(function (item, index) {
        var _a;
        var col = "auto";
        if (inline) {
            col = 6;
        }
        return (<Grid_1.default item xs={col} key={index}>
                <Chip_1.default component="div" key={index} className={classnames_1.default(styles_module_scss_1.default["chip"], (_a = {},
            _a[styles_module_scss_1.default.active] = value === item.id,
            _a))} label={item.text} onClick={function () { return _handleSelectPriceRange(item); }}/>
              </Grid_1.default>);
    })}
        </Grid_1.default>
      </Grid_1.default>
    </Grid_1.default>);
    if (inline) {
        return content;
    }
    return (<div ref={anchorRef} className={classOfRoot}>
      <Input_1.default className={classnames_1.default(styles_module_scss_1.default.input, (_b = {}, _b[styles_module_scss_1.default["is-open"]] = isOpen, _b))} onClick={_showDropdown} onClickAfterInput={_showDropdown} component={PriceRangeInput_1.default} afterInput={afterInput} readOnly={disabledInput} display={display} disabled={disabled} {...rest}/>
      {isOpen && (<Popover_1.default anchorRef={anchorRef} backdrop={Backdrop_1.BackdropTypes.transparent} placement={Popper_1.PopperPlacements.bottomStart} onClose={_hideDropdown} className={styles_module_scss_1.default.popover}>
          <Box_1.default p={4}>{content}</Box_1.default>
        </Popover_1.default>)}
    </div>);
};
exports.default = RangeDropdown;
//# sourceMappingURL=RangeDropdown.jsx.map