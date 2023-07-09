import { SyntheticEvent, useCallback, useState } from 'react';

export default function useRadio(defaultValue: Array<any>) {
  const [selected, setSelected] = useState<any>(defaultValue);

  const onChange = useCallback(
    (event: any) => {
      setSelected((event.target || ({} as any)).value);
    },
    [setSelected],
  );

  return { selected, onChange };
}
