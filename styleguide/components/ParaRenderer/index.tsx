import React from 'react';
import Typography, { TypoSizes } from '../../../src/components/Typography';
import styles from './styles.module.scss';

const PareRenderer = ({ children, semantic, ...rest }: any): JSX.Element => (
  <Typography
    component={semantic}
    variant={TypoSizes.body2}
    className={styles.root}
    {...rest}
  >
    {children}
  </Typography>
);

export default PareRenderer;
