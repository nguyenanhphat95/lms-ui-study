import cn from 'classnames';
import csstype from 'csstype';
import React, { HTMLAttributes } from 'react';
import { Grid } from '../Grid';
import Portal, { PortalIds } from '../Portal';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';

interface ToastProps extends HTMLAttributes<HTMLElement> {
  open?: boolean;
  justifyContent?: csstype.JustifyContentProperty;
}

interface ToastDefaultProps {
  component: React.ElementType;
  justifyContent: csstype.JustifyContentProperty;
}

const defaultProps: ToastDefaultProps = {
  component: 'div',
  justifyContent: 'center',
};

export const Toast = (props: ToastProps) => {
  const { component: Component, className, justifyContent, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const toastContent =
    typeof children === 'string' ? (
      <Typography
        className={styles.content}
        size={TypoSizes.body2}
        weight={TypoWeights.bold}
        type={TypoTypes.invert}>
        {children}
      </Typography>
    ) : (
      children
    );

  return (
    <Portal id={PortalIds.toast}>
      <div className={styles.wrapper}>
        <Grid container spacing={4} justifyContent={justifyContent}>
          <Grid item xs="auto">
            <Component className={cn(styles.toast, className)} {...rest}>
              {toastContent}
            </Component>
          </Grid>
        </Grid>
      </div>
    </Portal>
  );
};

export default Toast;
