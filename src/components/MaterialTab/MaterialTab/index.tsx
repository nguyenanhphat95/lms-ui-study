import { Typography, TypoTypes, TypoWeights, TypoSizes } from '@App/index';
import capitalize from '@App/utils/capitalize';
import cn from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

interface TabProps {
  component?: React.ElementType;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  indicator?: React.ReactNode;
  label: React.ReactNode;
  onChange?: any;
  onClick?: any;
  onFocus?: any;
  selected?: boolean;
  selectionFollowsFocus?: boolean;
  textColor?: 'secondary' | 'primary' | 'inherit';
  value?: any;
  wrapped?: boolean;
}

const defaultProps = {
  component: 'div'
};

export const MaterialTab = React.forwardRef(function Tab(
  props: TabProps,
  ref: any
) {
  const {
    className,
    disabled = false,
    fullWidth,
    icon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    textColor = 'inherit',
    value,
    wrapped = false,
    component: Component,
    ...other
  } = {
    ...defaultProps,
    ...props
  };

  const handleClick = event => {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = event => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <Component
      className={cn(
        styles.root,
        styles[`textColor${capitalize(textColor)}`],
        {
          [styles.disabled]: disabled,
          [styles.selected]: selected,
          [styles.labelIcon]: label && icon,
          [styles.fullWidth]: fullWidth,
          [styles.wrapped]: wrapped
        },
        className
      )}
      ref={ref}
      role="tab"
      aria-selected={selected}
      onClick={handleClick}
      onFocus={handleFocus}
      tabIndex={selected ? 0 : -1}
      {...other}
    >
      <Typography
        size={TypoSizes.body1}
        className={styles.wrapper}
        type={TypoTypes.primary}
        weight={selected ? TypoWeights.bold : TypoWeights.inherit}
      >
        {icon}
        {label}
      </Typography>
      {indicator}
    </Component>
  );
});

export default MaterialTab;
