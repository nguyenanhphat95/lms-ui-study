/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
// @ts-ignore
import Markdown from 'rsg-components/Markdown';
import Grid from '../../../../src/components/Grid';
import Typography, {
  TypoSizes,
  TypoWeights
} from '../../../../src/components/Typography';
import styles from './styles.module.scss';

const EMPTY_NOT_FOUND = 'Example is empty';

function SearchResult({ onClick, result }: any): JSX.Element {
  const contentIsExisted =
    result.item.content && result.item.content.length > 0;

  return (
    <Grid
      component="a"
      href={result.item.link}
      item
      onClick={() => {
        onClick(result.item);
      }}
      className={styles.item}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography
            component="span"
            variant={TypoSizes.subtitle2}
            weight={TypoWeights.bold}
          >
            {result.item.name}
          </Typography>
        </Grid>
        <Grid item className={styles.description}>
          {!contentIsExisted && <Markdown key="empty" text={EMPTY_NOT_FOUND} />}
          {contentIsExisted &&
            result.item.content.map((c: any, idx) => {
              if (c.type === 'markdown') {
                return <Markdown key={idx} text={c.content} />;
              }

              return (
                <Markdown
                  key={idx}
                  text={`\`\`\`
${c.content}
\`\`\``}
                />
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchResult;
