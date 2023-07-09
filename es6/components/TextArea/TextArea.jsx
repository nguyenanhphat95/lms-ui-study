var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import _get from 'lodash-es/get';
import React from 'react';
import Input, { InputSizes } from '../Input';
import { useAutoHeight } from './hook';
import { getBoxSize, getLineHeight } from './utils';
const defaultProps = {
    component: 'textarea',
    minRows: 5,
    maxRows: Infinity,
    size: InputSizes.lg
};
export const TextArea = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { minRows, maxRows } = _a, rest = __rest(_a, ["minRows", "maxRows"]);
    const [otherInput, detailsOfSize] = useAutoHeight({ refInput: rest.ref });
    const elementOfInput = rest.ref && rest.ref.current;
    const lineHeight = getLineHeight(elementOfInput);
    const minHeight = lineHeight + getBoxSize(elementOfInput);
    const rowsOfInput = Math.min(Math.max(detailsOfSize.linesNumber, minRows), maxRows);
    return (<>
      <Input rows={rowsOfInput} style={Object.assign(Object.assign({}, rest.style), { minHeight, overflow: _get(detailsOfSize, 'overflow') })} {...rest}/>
      {otherInput}
    </>);
};
export default TextArea;
//# sourceMappingURL=TextArea.jsx.map