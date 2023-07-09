#### Basic
```jsx

import { TypoWeights } from '@fundoo/ui';

<React.Fragment>
  <Grid container spacing={2} alignItem="end">
    <Grid item md={4}>
      <Grid container spacing={1} direction="column">
        <Grid item xs={6}>
          <Typography weight={TypoWeights.bold}>Only input from 1 to 100</Typography>
        </Grid>
        <Grid item xs={6}>
          <NumberOnly
            min={1}
            max={100}
            placeholder="1-100"
          />
       </Grid>
      </Grid>
    </Grid>
  </Grid>
</React.Fragment>
```
