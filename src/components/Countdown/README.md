### Default
#### Note: Only support for maximum 1 year.

```jsx
  import { Grid, InputSizes, TypoWeights } from '@fundoo/ui';
  import { useState } from 'react';

  const [time, setTime] = useState(1700488888);

  const _handleFinished = () => {
    alert('finished');
  }

  <Grid container direction="column" spacing={4}>
    <Grid item>
      <Countdown showHint title="Your hint text:" endTime={time} onFinish={_handleFinished} />
    </Grid>
  </Grid>
```
