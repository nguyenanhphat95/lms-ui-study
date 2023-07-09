import capitalize from '@App/utils/capitalize';
import cn from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

interface TabIndicatorProps {
  className: string;
  color: 'primary' | 'secondary';
  orientation: 'horizontal' | 'vertical';
}

const TabIndicator = React.forwardRef(function TabIndicator(props: TabIndicatorProps, ref: any) {
  const { className, color, orientation, ...other } = props;
  return (
    <span
      className={cn(
        styles.root,
        {
          [styles.vertical]: orientation === 'vertical',
        },
        styles[`color${capitalize(color)}`],
        className,
      )}
      ref={ref}
      {...other}
    />
  );
});

export default TabIndicator;
