

```jsx

  import {
    TypoSizes,
    TypoWeights
  } from '@fundoo/ui';


<Grid container spacing={5} direction="column">
  <Grid item>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>Fallback image</Typography>
      </Grid>
      <Grid item>
        <Image
          src="./../../../public/static/images/home.png"
          alt="alt"
        />
      </Grid>
    </Grid>
  </Grid>
  <Grid item>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>Fallback image:</Typography> image not found
      </Grid>
      <Grid item>
        <Image
        src="/not-found-image"
        fallback="https://sn0n.dblog.org/img/default.jpg"
        alt="your alt"
      />
      </Grid>
    </Grid>
  </Grid>
</Grid>

```
