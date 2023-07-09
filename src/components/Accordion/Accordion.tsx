import DownArrow from "lms-icons/components/DownArrow";
import React, { HTMLAttributes, useState } from "react";
import Collapse from "../Collapse";
import Icon from "../Icon";
import Panel from "../Panel";
import PanelBody from "../PanelBody";
import PanelHeader from "../PanelHeader";
import Typography, { TypoSizes, TypoWeights } from "../Typography";
import styles from "./styles.module.scss";

interface Props {
  title: string | any;
  children: string | React.ReactNode;
  onToggle?: any;
  defaultValue: boolean;
  [key: string]: any;
}

const defaultProps = {
  defaultValue: true,
};

const Accordion = (props: Props) => {
  const { children, title, onToggle, defaultValue } = {
    ...defaultProps,
    ...props,
  };
  const [expand, toggle] = useState(defaultValue);

  const _handleToggle = () => {
    toggle(!expand);
    if (onToggle) {
      onToggle(!expand);
    }
  };

  return (
    <Panel borderRadius={false}>
      <PanelHeader className={styles["panel-header"]} onClick={_handleToggle}>
        <Typography
          size={TypoSizes.body1}
          weight={TypoWeights.bold}
          className={styles["title"]}
        >
          {title}
        </Typography>
        <span className={styles["collapible-icon"]}>
          <Icon
            className={expand ? styles["expand"] : styles["collapse"]}
            width={18}
            height={18}
            component={DownArrow}
          />
        </span>
      </PanelHeader>
      <PanelBody>
        <Collapse in={expand}>{children}</Collapse>
      </PanelBody>
    </Panel>
  );
};

export default Accordion;
