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
var stringHelpers_1 = require("@App/utils/stringHelpers");
var ChevronRight_1 = __importDefault(require("lms-icons/components/ChevronRight"));
var Search_1 = __importDefault(require("lms-icons/components/Search"));
var classnames_1 = __importDefault(require("classnames"));
var find_1 = __importDefault(require("lodash/find"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var react_1 = __importStar(require("react"));
var Backdrop_1 = require("../Backdrop");
var Box_1 = __importDefault(require("../Box"));
var Checkbox_1 = __importDefault(require("../Checkbox"));
var Grid_1 = __importDefault(require("../Grid"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = __importStar(require("../Input"));
var ListItemText_1 = __importDefault(require("../ListItemText"));
var MenuItem_1 = __importDefault(require("../Menu/MenuItem"));
var Popover_1 = __importDefault(require("../Popover"));
var InputAdornment_1 = __importDefault(require("../InputAdornment"));
var Popper_1 = require("../Popper");
var Typography_1 = __importStar(require("../Typography"));
var MultipleSelectInput_1 = __importDefault(require("./MultipleSelectInput"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    isShowSearchBox: true,
    defaultValues: [],
    data: [],
    title: "Input your title",
    deleteLabel: "Xoá",
};
var MultipleSelect = function (props) {
    var _a, _b, _c;
    var _d = __assign(__assign({}, defaultProps), props), onClose = _d.onClose, onToggle = _d.onToggle, data = _d.data, className = _d.className, iconClassName = _d.iconClassName, _e = _d.disabledInput, disabledInput = _e === void 0 ? true : _e, placeholder = _d.placeholder, disabled = _d.disabled, children = _d.children, key = _d["data-key"], label = _d["data-label"], defaultValues = _d.defaultValues, isShowSearchBox = _d.isShowSearchBox, contentClassname = _d.contentClassname, title = _d.title, deleteLabel = _d.deleteLabel, rest = __rest(_d, ["onClose", "onToggle", "data", "className", "iconClassName", "disabledInput", "placeholder", "disabled", "children", "data-key", "data-label", "defaultValues", "isShowSearchBox", "contentClassname", "title", "deleteLabel"]);
    var anchorRef = react_1.useRef(null);
    var _f = __read(react_1.useState(""), 2), searchText = _f[0], setSearchText = _f[1];
    var _g = __read(react_1.useState(data), 2), options = _g[0], setOptions = _g[1];
    var _h = __read(react_1.useState(defaultValues), 2), value = _h[0], setValue = _h[1];
    var _j = __read(react_1.useState(false), 2), isOpen = _j[0], setIsOpen = _j[1];
    react_1.useEffect(function () {
        setValue(defaultValues);
    }, [defaultValues]);
    var _showDropdownList = function () {
        setIsOpen(true);
    };
    var _hideDropdownList = function () {
        setIsOpen(false);
    };
    var handleChangeSearch = function (event) {
        setSearchText(event.target.value);
    };
    var classnamesOfIcon = classnames_1.default(iconClassName, styles_module_scss_1.default["icon"], (_a = {},
        _a[styles_module_scss_1.default["icon-open"]] = isOpen,
        _a), styles_module_scss_1.default["dropdown-addon-size-" + rest.size]);
    var afterInput = react_1.useMemo(function () { return (<InputAdornment_1.default>
        <Icon_1.default onClick={_showDropdownList} className={classnamesOfIcon} component={ChevronRight_1.default}/>
      </InputAdornment_1.default>); }, [isOpen, disabled]);
    var _handleToggle = function (e, key) {
        e.preventDefault();
        var newValue = value && value.indexOf(key) !== -1
            ? value.filter(function (x) { return x !== key; })
            : value.concat([key]);
        setValue(newValue);
        if (onToggle) {
            onToggle(newValue);
        }
    };
    var _isChecked = react_1.useCallback(function (item) {
        return !!value && value.indexOf(item) !== -1;
    }, [value]);
    var _handleClear = function () {
        if (!isEmpty_1.default(value)) {
            var newValue = [];
            setValue(newValue);
            if (onToggle) {
                onToggle(newValue);
            }
        }
    };
    react_1.useEffect(function () {
        if (searchText) {
            var optionFilter = data.filter(function (option) {
                return stringHelpers_1.normalizeCharacter(option[label].toLowerCase()).startsWith(searchText.toLowerCase());
            });
            setOptions(optionFilter);
        }
        else {
            setOptions(data);
        }
    }, [searchText, data]);
    var display = placeholder;
    var hasValues = !isEmpty_1.default(value);
    if (hasValues) {
        if (value.length > 1) {
            display = value.length + " l\u1EF1a ch\u1ECDn";
        }
        else if (value.length === 1) {
            var name_1 = value[0];
            var item = find_1.default(data, function (x) { return x[key] === name_1; });
            if (item) {
                display = item[label];
            }
        }
    }
    var classOfRoot = classnames_1.default(className, styles_module_scss_1.default["root"]);
    return (<div ref={anchorRef} className={classOfRoot}>
      <Input_1.default className={classnames_1.default(styles_module_scss_1.default.input, (_b = {}, _b[styles_module_scss_1.default["is-open"]] = isOpen, _b), (_c = {},
        _c[styles_module_scss_1.default["has-values"]] = hasValues,
        _c))} onClick={_showDropdownList} onClickAfterInput={_showDropdownList} component={MultipleSelectInput_1.default} afterInput={afterInput} readOnly={disabledInput} display={display} disabled={disabled} {...rest}/>
      {isOpen && (<Popover_1.default anchorRef={anchorRef} backdrop={Backdrop_1.BackdropTypes.transparent} placement={Popper_1.PopperPlacements.bottomStart} onClose={_hideDropdownList} className={styles_module_scss_1.default.popover}>
          <Grid_1.default container direction="column">
            <Grid_1.default item xs={12}>
              <Box_1.default px={4} pt={2}>
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
              </Box_1.default>
            </Grid_1.default>
            {isShowSearchBox && (<Grid_1.default item xs={12}>
                <Box_1.default px={4} py={2}>
                  <Input_1.default name="search" autoComplete="off" value={searchText} onChange={handleChangeSearch} placeholder={placeholder} afterInput={<InputAdornment_1.default>
                        <Icon_1.default component={Search_1.default} width={24} height={24}/>
                      </InputAdornment_1.default>} className={styles_module_scss_1.default["search-text"]}/>
                </Box_1.default>
              </Grid_1.default>)}
            <Grid_1.default item xs={12} className={classnames_1.default(contentClassname, styles_module_scss_1.default.boxListItem)}>
              <Box_1.default mb={2}>
                {!!options && options.length > 0 ? ((options || []).map(function (option, index) { return (<MenuItem_1.default key={index + " - " + option[key]} onClick={function (e) { return _handleToggle(e, option[key]); }} className={classnames_1.default(styles_module_scss_1.default["item"], _isChecked(option[key]) && styles_module_scss_1.default.activated)}>
                      <Checkbox_1.default checked={_isChecked(option[key])}/>
                      <ListItemText_1.default size={Input_1.InputSizes.lg}>
                        {option[label]}
                      </ListItemText_1.default>
                    </MenuItem_1.default>); })) : (<Box_1.default px={4}>
                    <Typography_1.default component="div" type={Typography_1.TypoTypes.sub} className={styles_module_scss_1.default.empty}>
                      Không có dữ liệu
                    </Typography_1.default>
                  </Box_1.default>)}
              </Box_1.default>
            </Grid_1.default>
          </Grid_1.default>
        </Popover_1.default>)}
    </div>);
};
exports.default = react_1.default.memo(MultipleSelect);
//# sourceMappingURL=MultipleSelect.jsx.map