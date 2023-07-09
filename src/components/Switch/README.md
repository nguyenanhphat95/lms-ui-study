## Basic

```jsx
import { Switch } from '@fundoo/ui';

const [checked, setChecked] = React.useState(false);

const _handleChange = (e) => {
  e.preventDefault();
  console.log('checked:', checked);
  setChecked(!checked);
};

<Switch checked={checked} onClick={_handleChange}>
  Check me
</Switch>;
```
