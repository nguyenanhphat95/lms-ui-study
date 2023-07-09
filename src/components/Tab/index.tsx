import cn from 'classnames';
import React, { useContext } from 'react';
import { TabContext, TabOrientation, TabSizes } from '../Tabs';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';
import { TabLabelPlacement } from './TabTypes';

type TabProps = {
  index: string | number;
  size?: TabSizes;
  disabled?: boolean;
  fullWidth?: boolean;
  border?: boolean;
  label?: string | number;
  labelPlacement?: TabLabelPlacement;
  className?: string;
  children?: Array<React.ReactNode> | React.ElementType | string;
  orientation?: TabOrientation;
  [key: string]: any;
};

interface TabDefaultProps {
  component: React.ElementType;
  disabled: boolean;
  fullWidth: boolean;
  border?: boolean;
  orientation: TabOrientation;
}

const defaultProps: TabDefaultProps = {
  component: 'li',
  disabled: false,
  fullWidth: true,
  border: true,
  orientation: TabOrientation.horizontal,
};

export const Tab = (props: TabProps) => {
  const {
    component: Component,
    className,
    size: _size,
    disabled,
    fullWidth,
    index,
    border,
    label,
    labelPlacement,
    children,
    orientation,
    ...rest
  } = { ...defaultProps, ...props };

  const context = useContext(TabContext);
  const activated = context.value === index;

  const size = _size || context.size;
  const classOfComponent = cn(
    styles.root,
    {
      [styles[`size-${size}`]]: size,
      [styles.activated]: activated,
      [styles.disabled]: disabled,
      [styles['full-width']]: fullWidth,
      [styles.border]: border,
      [styles[orientation]]: !!orientation,
    },
    className,
  );

  function handleClick() {
    if (context && context.onChange) {
      context.onChange(index);
    }
  }

  const shouldUseTag = !!label;

  let contentOfTab = children;

  if (shouldUseTag) {
    contentOfTab = [
      <Typography
        key="label"
        weight={TypoWeights.inherit}
        variant={TypoSizes.inherit}
        type={TypoTypes.inherit}
        className={styles.label}>
        {label}
      </Typography>,
    ];

    if (labelPlacement === TabLabelPlacement.right) {
      contentOfTab.reverse();
    }
  }

  return (
    <Component {...rest} onClick={handleClick} className={classOfComponent}>
      {contentOfTab}
    </Component>
  );
};

export default Tab;
export * from './TabTypes';
