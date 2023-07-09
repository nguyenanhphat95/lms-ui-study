import React from 'react';
// @ts-ignore
import Markdown from 'rsg-components/Markdown';
// @ts-ignore
import SectionHeading from 'rsg-components/SectionHeading';
import styles from './styles.module.scss';

function SectionRenderer(props: any): JSX.Element {
  const {
    name,
    slug,
    content,
    components,
    sections,
    depth,
    description,
    pagePerSection
  } = props;

  return (
    <section data-testid={`section-${name as string}`} className={styles.root}>
      {name && (
        <SectionHeading
          depth={depth}
          id={slug}
          slotName="sectionToolbar"
          pagePerSection={pagePerSection}
          slotProps={props}
        >
          {name}
        </SectionHeading>
      )}
      {description && <Markdown text={description} />}
      {content}
      {sections}
      {components}
    </section>
  );
}

export default SectionRenderer;
