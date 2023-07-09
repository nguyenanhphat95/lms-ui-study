import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

function PlaygroundRenderer({
  exampleIndex,
  name,
  preview,
  previewProps,
  tabButtons,
  tabBody,
  toolbar
}: any): JSX.Element {
  const { className, ...props } = previewProps;
  return (
    <div className={cn(className, styles.playground)}>
      <div {...props} data-preview={name} className={styles.preview}>
        {preview}
      </div>
      <div className={styles.toolbar}>
        <div>{tabButtons}</div>
        <div>{toolbar}</div>
      </div>
      <div className={styles.code}>{tabBody}</div>
    </div>
  );
}

export default PlaygroundRenderer;
