import React from 'react';
import Typography from '../../../src/components/Typography';
import styles from './styles.module.scss';

const levelToVariant = {
  1: 'title1',
  2: 'title2',
  3: 'subtitle1',
  4: 'subtitle2'
};

function HeadingRender({ children, level, ...props }: any): JSX.Element {
  return (
    <Typography
      variant={levelToVariant[level]}
      className={styles.root}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default HeadingRender;
