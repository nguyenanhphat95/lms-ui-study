---
# Typography

## Typography Size

```jsx
import { TypoSizes } from './TypoTypes';
<>
  <Typography size={TypoSizes.title1} component="div">
    This is a single line title1. Has 36px.
  </Typography>

  <Typography size={TypoSizes.title2} component="div">
    This is a single line title2. Has 32px.
  </Typography>

  <Typography size={TypoSizes.title3} component="div">
    This is a single line title3. Has 30px.
  </Typography>

  <Typography size={TypoSizes.title4} component="div">
    This is a single line title4. Has 28px.
  </Typography>

  <Typography size={TypoSizes.subtitle1} component="div">
    This is a single line subtitle1. Has 24px.
  </Typography>

  <Typography size={TypoSizes.subtitle2} component="div">
    This is a single line subtitle2. Has 22px.
  </Typography>

  <Typography size={TypoSizes.subtitle3} component="div">
    This is a single line subtitle3. Has 20px.
  </Typography>

  <Typography size={TypoSizes.body1} component="div">
    This is a single line body1. Has 16px.
  </Typography>

  <Typography size={TypoSizes.body2} component="div">
    This is a single line body2. Has 14px.
  </Typography>

  <Typography size={TypoSizes.link} component="div">
    This is a single line link. Has 13px.
  </Typography>

  <Typography size={TypoSizes.caption} component="div">
    This is a single line caption. Has 12px.
  </Typography>

  <Typography size={TypoSizes.tiny} component="div">
    This is a single line tiny. Has 10px.
  </Typography>
</>;
```

## Typography Weight

```jsx
import { TypoWeights } from './TypoTypes';
<>
  <Typography weight={TypoWeights.bold}>This is a bold text.</Typography>
</>;
```

## Typography Types

```jsx
import { TypoTypes, TypoSizes } from './TypoTypes';
<>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.default} component="div">This is a default text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.disabled} component="div">This is a disabled text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.error} component="div">This is a error text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.invert} component="div">This is a invert text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.link} component="div">This is a link text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.title} component="div">This is a title text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.sub} component="div">This is a sub text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.subTitle} component="div">This is a subTitle text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.formLabel} component="div">This is a formLabel text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.success} component="div">This is a success text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.warning} component="div">This is a warning text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.strikethrough} component="div">This is a strikethrough text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.inherit} component="div">This is a inherit text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.primary} component="div">This is a primary text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.darkTitle} component="div">This is a darkTitle text.</Typography>
  <Typography size={TypoSizes.subtitle1} type={TypoTypes.hint} component="div">This is a hint text.</Typography>
</>;
```
