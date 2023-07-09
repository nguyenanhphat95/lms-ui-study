## Number format with thousand seaparator

```jsx

import { TypoTypes, TypoSizes, NumberFormat, Typography } from '@fundoo/ui';

<Grid container>
  <Grid item xs={6}>
    <Grid container direction="column" spacing={2}>
    {/* row */}
    <Grid item>
      <Grid container spacing={3} alignItem="center" nowrap justifyContent="space-between">
        <Grid item xs={true}>
          <NumberFormat
            placeholder="Thấp nhất"
            min={0}
            max={1000000000000}
            decimalSeparator={false}
          />
        </Grid>
        <Grid item xs="auto">
          <Typography type={TypoTypes.sub} size={TypoSizes.caption}>
            đến
          </Typography>
        </Grid>
        <Grid item xs={true}>
          <NumberFormat
            placeholder="Lớn nhất"
            min={0}
            max={1000000000000}
            decimalSeparator={false}
          />
        </Grid>
      </Grid>
    </Grid>
    {/* row */}
  </Grid>
  </Grid>
</Grid>

```
