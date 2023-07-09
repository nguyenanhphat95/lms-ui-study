import NextPage from "lms-icons/components/NextPage";
import React from "react";
import { Icon } from "../../../src/components/Icon";
import List from "../../../src/components/List";
import ListItem from "../../../src/components/ListItem";
import ListItemText from "../../../src/components/ListItemText";
import { TypoWeights } from "../../../src/components/Typography";
import styles from "./styles.module.scss";

const mapsOfIcon = {
  Introduction: NextPage,
  Configuration: NextPage,
  Installation: NextPage,
  Changelog: NextPage,
  Documentation: NextPage,
  Icons: NextPage,
  Components: NextPage,
  Contributing: NextPage,
  Colors: NextPage,
  Compose: NextPage,
};

const ComponentsListRenderer = ({
  children,
  items,
  ...rest
}: any): JSX.Element => {
  return (
    <List className={styles.root} {...rest}>
      {items
        .filter(({ href, visibleName }) => Boolean(href && visibleName))
        .map(({ slug, href, name, visibleName, content }) => {
          return (
            <React.Fragment key={slug}>
              <ListItem
                className={styles["list-item"]}
                href={href}
                component="a"
              >
                {mapsOfIcon[name] && (
                  <Icon component={mapsOfIcon[name]} width={10} height={10} />
                )}
                <ListItemText weight={TypoWeights.light}>
                  {visibleName}
                </ListItemText>
              </ListItem>
              {content}
            </React.Fragment>
          );
        })}
    </List>
  );
};

export default ComponentsListRenderer;
