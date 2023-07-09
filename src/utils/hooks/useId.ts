import * as React from 'react';

export default function useId(idOverride: string = '') {
  const [defaultId, setDefaultId] = React.useState(idOverride);
  const id = idOverride || defaultId;
  React.useEffect(() => {
    if (defaultId == null) {
      setDefaultId(`tpl-${Math.round(Math.random() * 1e5)}`);
    }
  }, [defaultId]);
  return id;
}
