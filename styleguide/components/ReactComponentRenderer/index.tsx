import React from 'react';
// @ts-ignore
import Pathline from 'rsg-components/Pathline';
import styles from './styles.module.scss';

function ReactComponentRenderer({
  name,
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabButtons,
  tabBody,
  filepath: filePath
}: any): JSX.Element {
  return (
    <div>
      <header className={styles.header}>{heading}</header>
      <div className={styles.content}>
        {pathLine && <Pathline filePath={filePath}>{pathLine}</Pathline>}
        {examples}
        {(description || docs) && (
          <div>
            {description}
            {docs}
          </div>
        )}
        {tabButtons && <div className={styles.jsdoc}>{tabBody}</div>}
      </div>
    </div>
  );
}

export default ReactComponentRenderer;
