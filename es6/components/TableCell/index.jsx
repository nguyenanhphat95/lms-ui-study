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
import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
export var TableCellAligns;
(function (TableCellAligns) {
    TableCellAligns["inherit"] = "inherit";
    TableCellAligns["left"] = "left";
    TableCellAligns["center"] = "center";
    TableCellAligns["right"] = "right";
    TableCellAligns["justify"] = "justify";
})(TableCellAligns || (TableCellAligns = {}));
const defaultProps = {
    component: 'td',
    inHeader: false,
    align: TableCellAligns.inherit,
};
export const TableCell = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component, className, inHeader, align } = _a, rest = __rest(_a, ["component", "className", "inHeader", "align"]);
    const Component = (inHeader ? 'th' : component) || 'td';
    const tableBodyClassName = cn(styles.cell, className, align && styles[`align-${String(align)}`]);
    return <Component {...rest} className={tableBodyClassName}/>;
};
export default TableCell;
//# sourceMappingURL=index.jsx.map