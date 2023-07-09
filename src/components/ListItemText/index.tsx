import cn from 'classnames';
import React from 'react';
import Typography, { TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';

type ListItemTextProps = {
  inset?: boolean;
  weight?: TypoWeights;
  size?: string;
  className?: string;
  [key: string]: any;
};

interface ListItemTextDefaultProps {
  component: React.ElementType;
  weight: TypoWeights;
  type: TypoTypes;
  inset: boolean;
}

const defaultProps: ListItemTextDefaultProps = {
  component: 'span',
  weight: TypoWeights.medium,
  type: TypoTypes.inherit,
  inset: false,
};

export const ListItemText = (props: ListItemTextProps) => {
  const { className, inset, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(
    styles.listItemText,
    [styles[`text-size-${rest.size}`]],
    inset && styles.inset,
    className,
  );

  return <Typography className={classOfComponent} {...rest} />;
};

export default ListItemText;
