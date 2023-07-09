### Default

```jsx
import { InputSizes, TypoWeights } from '@fundoo/ui';
import styles from './styles.module.scss';
import React, { useState } from 'react';

const RECOMMEND_DURATION = [
  {
    id: 1,
    from: null,
    to: 30,
    text: '< 30s'
  },
  {
    id: 2,
    from: 30,
    to: 60,
    text: '30 - 60s'
  },
  {
    id: 3,
    from: 60,
    to: null,
    text: '> 60s'
  },
  {
    id: 8,
    from: null,
    to: null,
    text: 'Tuỳ chọn',
    fullWidth: true
  }
];

const [priceRangeFrom, setPriceRangeFrom] = useState(null);
const [priceRangeTo, setPriceRangeTo] = useState(null);

const _handleChangePriceRange = (from, to) => {
  setPriceRangeFrom(formatNumberInputValue(from));
  setPriceRangeTo(formatNumberInputValue(to));
};

<Grid container spacing={4}>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Large</Typography>
      </Grid>
      <Grid item>
        <RangeDropdown
          onChange={_handleChangePriceRange}
          title="Duration"
          placeholder="Duration"
          recommendData={RECOMMEND_DURATION}
          defaultValues={{
            from: priceRangeFrom,
            to: priceRangeTo
          }}
          placeholderFrom="Thấp nhất"
          placeholderTo="Cao nhất"
          size={InputSizes.lg}
        />
      </Grid>
    </Grid>
  </Grid>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Medium(default)</Typography>
      </Grid>
      <Grid item>
        <RangeDropdown
          onChange={_handleChangePriceRange}
          title="Duration"
          placeholder="Duration"
          recommendData={RECOMMEND_DURATION}
          defaultValues={{
            from: priceRangeFrom,
            to: priceRangeTo
          }}
          placeholderFrom="Thấp nhất"
          placeholderTo="Cao nhất"
        />
      </Grid>
    </Grid>
  </Grid>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Small</Typography>
      </Grid>
      <Grid item>
        <RangeDropdown
          onChange={_handleChangePriceRange}
          title="Duration"
          placeholder="Duration"
          recommendData={RECOMMEND_DURATION}
          defaultValues={{
            from: priceRangeFrom,
            to: priceRangeTo
          }}
          placeholderFrom="Thấp nhất"
          placeholderTo="Cao nhất"
          size={InputSizes.sm}
        />
      </Grid>
    </Grid>
  </Grid>
</Grid>;
```

### Inline

```jsx
import { InputSizes, TypoWeights } from '@fundoo/ui';
import styles from './styles.module.scss';
import React, { useState } from 'react';

const RECOMMEND_DURATION = [
  {
    id: 1,
    from: null,
    to: 500000000,
    text: '< 500 Triệu'
  },
  {
    id: 2,
    from: 500000000,
    to: 1000000000,
    text: '500 Triệu - 1 Tỷ'
  },
  {
    id: 3,
    from: 1000000000,
    to: 3000000000,
    text: '1-3 Tỷ'
  },
  {
    id: 4,
    from: 3000000000,
    to: 5000000000,
    text: '3-5 Tỷ'
  },
  {
    id: 5,
    from: 5000000000,
    to: 7000000000,
    text: '5-7 Tỷ'
  },
  {
    id: 6,
    from: 7000000000,
    to: 10000000000,
    text: '7-10 Tỷ'
  },
  {
    id: 7,
    from: 10000000000,
    to: null,
    text: 'Trên 10 Tỷ'
  },
  {
    id: 8,
    from: null,
    to: null,
    text: 'Thoả thuận',
    fullWidth: true
  }
];

const [priceRangeFrom, setPriceRangeFrom] = useState(null);
const [priceRangeTo, setPriceRangeTo] = useState(null);

const _handleChangePriceRange = (from, to) => {
  setPriceRangeFrom(formatNumberInputValue(from));
  setPriceRangeTo(formatNumberInputValue(to));
};

<Grid container spacing={4}>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Medium</Typography>
      </Grid>
      <Grid item>
        <RangeDropdown
          onChange={_handleChangePriceRange}
          placeholder="Duration"
          recommendData={RECOMMEND_DURATION}
          defaultValues={{
            from: priceRangeFrom,
            to: priceRangeTo
          }}
          placeholderFrom="Thấp nhất"
          placeholderTo="Cao nhất"
          size={InputSizes.lg}
          inline
        />
      </Grid>
    </Grid>
  </Grid>
</Grid>;
```
