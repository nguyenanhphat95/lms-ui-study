import { useCallback, useState } from 'react';
export default function useRadio(defaultValue) {
    const [selected, setSelected] = useState(defaultValue);
    const onChange = useCallback((event) => {
        setSelected((event.target || {}).value);
    }, [setSelected]);
    return { selected, onChange };
}
//# sourceMappingURL=useRadio.js.map