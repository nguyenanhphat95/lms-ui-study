```jsx
import { TypoTypes } from './../../src/components/Typography';
import _chunk from 'lodash-es/chunk';
import colors from './colors';
import styles from './styles.module.scss';

function getColor(text, sub) {
  const value = (text || '').trim()
  const isVariable = /^\$/i.test(value);
  const color = colors.find(item => item[0] === value);
  return isVariable ? color && color[1] : value;
}

const categories = _chunk(colors, 9);

<Grid spacing={4} container>
  {categories.map(item => (
    <Grid xs={3} item>
      {item.filter(item => item[0] && item[1]).map((sub) => (
        <Grid className={styles.item} item style={{ backgroundColor: getColor(sub[1], sub) }}>
          <Typography className={styles.label} type={TypoTypes.caption}>
            {sub[0]}
          </Typography>
        </Grid>
      ))}
    </Grid>
  ))}
</Grid>;
```
