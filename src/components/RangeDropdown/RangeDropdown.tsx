import { convertMoney } from "@App/utils";
import { formatNumberRemoveFloatCharacter } from "@App/utils/numberFormat";
import ChevronRight from "lms-icons/components/ChevronRight";
import cn from "classnames";
import _find from "lodash/find";
import _get from "lodash/get";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { BackdropTypes } from "../Backdrop";
import Box from "../Box";
import Chip from "../Chip";
import Grid from "../Grid";
import Icon from "../Icon";
import Input, { InputSizes } from "../Input";
import NumberFormat from "../NumberFormat";
import InputAdornment from "../InputAdornment";
import Popover from "../Popover";
import { PopperPlacements } from "../Popper";
import Typography, { TypoSizes, TypoTypes, TypoWeights } from "../Typography";
import PriceRangeInput from "./PriceRangeInput";
import styles from "./styles.module.scss";

export interface RangeDropdownProps {
  onClose?: () => void;
  disabledInput?: boolean;
  iconClassName?: string;
  disabled?: boolean;
  size?: InputSizes;
  onChange?: (from: number, to: number) => void;
  placeholder?: string;
  className?: string;
  recommendData?: Array<any>;
  unit?: string;
  defaultValues?: { from: number; to: number };
  inline?: boolean;
  placeholderFrom?: string;
  placeholderTo?: string;
  billionLabel: string;
  millionLabel: string;
  title?: string;
  deleteLabel?: string;
}

const defaultProps = {
  placeholderFrom: "Thấp nhất",
  placeholderTo: "Lớn nhất",
  billionLabel: "Tỷ",
  millionLabel: "Triệu",
  title: "Input your title",
  deleteLabel: "Xoá",
};

const RangeDropdown: FC<RangeDropdownProps> = (props) => {
  const {
    onClose,
    onChange,
    className,
    iconClassName,
    disabledInput = true,
    placeholder,
    disabled,
    recommendData,
    unit,
    defaultValues,
    inline,
    placeholderFrom,
    placeholderTo,
    billionLabel,
    millionLabel,
    title,
    deleteLabel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const anchorRef = useRef(null);
  const [value, setValue] = useState(null);
  const [priceFrom, setPriceFrom] = useState(null);
  const [priceTo, setPriceTo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const from = _get(defaultValues, "from");
    const to = _get(defaultValues, "to");
    setPriceFrom(from);
    setPriceTo(to);
    if (!from && !to) {
      setValue(null);
    }
  }, [defaultValues]);

  const _showDropdown = () => {
    setIsOpen(true);
  };

  const _hideDropdown = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const classNameOfIcons = cn(
    iconClassName,
    styles["dropdown-icon"],
    styles[`dropdown-addon-size-${rest.size}`],
    {
      [styles["icon-open"]]: isOpen,
    }
  );
  const afterInput = useMemo(
    () => (
      <InputAdornment>
        <Icon
          onClick={_showDropdown}
          className={classNameOfIcons}
          component={ChevronRight}
        />
      </InputAdornment>
    ),
    [isOpen, disabled]
  );

  const _handleSelectPriceRange = (item: any) => {
    setValue(item.id);
    setPriceFrom(item.from);
    setPriceTo(item.to);
    if (onChange) {
      onChange(item.from, item.to);
    }
  };

  const _getCurrentPriceFrom = () => {
    return priceFrom;
  };

  const _getCurrentPriceTo = () => {
    return priceTo;
  };

  const _handleChangePriceFrom = (e: React.SyntheticEvent) => {
    setValue(null);
    const priceFrom = _get(e, "target.value", null);
    setPriceFrom(priceFrom);
    if (onChange) {
      onChange(priceFrom, priceTo);
    }
  };

  const _handleChangePriceTo = (e: React.SyntheticEvent) => {
    setValue(null);
    const priceTo = _get(e, "target.value", null);
    setPriceTo(_get(e, "target.value", null));
    if (onChange) {
      onChange(priceFrom, priceTo);
    }
  };

  const _handleClear = () => {
    setValue(null);
    const priceFrom = null;
    const priceTo = null;
    setPriceFrom(priceFrom);
    setPriceTo(priceTo);
    if (onChange) {
      onChange(priceFrom, priceTo);
    }
  };

  let display: string | string[] | any = (
    <Typography type={TypoTypes.sub}>{placeholder}</Typography>
  );
  if (value !== null && typeof value !== "undefined") {
    const data = _find(recommendData, (x) => x.id === value);
    if (data) {
      display = (
        <Typography type={TypoTypes.sub}>{_get(data, "text")}</Typography>
      );
    }
  } else if (priceFrom || priceTo) {
    const formattedPriceFrom = formatNumberRemoveFloatCharacter(priceFrom);
    const formattedPriceTo = formatNumberRemoveFloatCharacter(priceTo);
    const formattedPriceFromText =
      formattedPriceFrom > 0
        ? convertMoney(formattedPriceFrom, billionLabel, millionLabel)
        : "";
    const formattedPriceToText =
      formattedPriceTo > 0
        ? convertMoney(formattedPriceTo, billionLabel, millionLabel)
        : "";
    if (formattedPriceFromText && formattedPriceToText) {
      display = (
        <Typography type={TypoTypes.sub}>
          {formattedPriceFromText} - {formattedPriceToText} {unit}
        </Typography>
      );
    } else if (formattedPriceFromText) {
      display = (
        <Typography type={TypoTypes.sub}>
          &gt;= {formattedPriceFromText} {unit}
        </Typography>
      );
    } else if (formattedPriceToText) {
      display = (
        <Typography type={TypoTypes.sub}>
          &lt;= {formattedPriceToText} {unit}
        </Typography>
      );
    }
  }

  const classOfRoot = cn(className, styles["root"]);
  const inputSize = InputSizes.md;
  const content = (
    <Grid container direction="column" spacing={3}>
      {/* row */}
      <Grid item>
        <Grid container alignItem="center" justifyContent="space-between">
          <Grid item xs="auto">
            <Typography weight={TypoWeights.bold}>{title}</Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography
              className={styles["btn-clear"]}
              size={TypoSizes.caption}
              type={TypoTypes.link}
              onClick={_handleClear}
            >
              {deleteLabel}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* row */}
      {/* row */}
      <Grid item>
        <Box pb={1}>
          <Grid
            container
            spacing={2}
            alignItem="center"
            nowrap
            justifyContent="space-between"
          >
            <Grid item xs={true}>
              <NumberFormat
                placeholder={placeholderFrom}
                min={0}
                max={1000000000000}
                size={inputSize}
                value={_getCurrentPriceFrom()}
                onChange={_handleChangePriceFrom}
                decimalSeparator={false}
              />
            </Grid>
            <Grid item xs="auto">
              <Typography type={TypoTypes.sub} size={TypoSizes.caption}>
                đến
              </Typography>
            </Grid>
            <Grid item xs={true}>
              <NumberFormat
                placeholder={placeholderTo}
                min={0}
                max={1000000000000}
                size={inputSize}
                value={_getCurrentPriceTo()}
                onChange={_handleChangePriceTo}
                decimalSeparator={false}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* row */}
      <Grid item>
        <Grid container spacing={3}>
          {recommendData.map((item, index) => {
            let col: number | string = "auto";
            if (inline) {
              col = 6;
            }
            return (
              <Grid item xs={col} key={index}>
                <Chip
                  component="div"
                  key={index}
                  className={cn(styles["chip"], {
                    [styles.active]: value === item.id,
                  })}
                  label={item.text}
                  onClick={() => _handleSelectPriceRange(item)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );

  if (inline) {
    return content;
  }

  return (
    <div ref={anchorRef} className={classOfRoot}>
      <Input
        className={cn(styles.input, { [styles["is-open"]]: isOpen })}
        onClick={_showDropdown}
        onClickAfterInput={_showDropdown}
        component={PriceRangeInput}
        afterInput={afterInput}
        readOnly={disabledInput}
        display={display}
        disabled={disabled}
        {...rest}
      />
      {isOpen && (
        <Popover
          anchorRef={anchorRef}
          backdrop={BackdropTypes.transparent}
          placement={PopperPlacements.bottomStart}
          onClose={_hideDropdown}
          className={styles.popover}
        >
          <Box p={4}>{content}</Box>
        </Popover>
      )}
    </div>
  );
};

export default RangeDropdown;
