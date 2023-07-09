import SpinnerIcon from "lms-icons/components/Spinner";
import Icon from "./../Icon";
import React from "react";
import styles from "./styles.module.scss";

interface SpinnerProps {}

type SpinnerDefaultProps = {};

const defaultProps: SpinnerDefaultProps = {};

const Spinner = React.forwardRef((props: SpinnerProps) => {
  const { ...rest } = { ...defaultProps, ...props };
  return <Icon component={SpinnerIcon} className={styles.root} />;
});

export default Spinner;
