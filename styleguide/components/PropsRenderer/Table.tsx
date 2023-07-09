import cn from 'classnames';
import _omit from 'lodash-es/omit';
import _pick from 'lodash-es/pick';
import React, { forwardRef, FunctionComponent, useMemo } from 'react';
import TableBase from './../../../src/components/Table';
import TableBody from './../../../src/components/TableBody';
import TableCell from './../../../src/components/TableCell';
import TableHeader from './../../../src/components/TableHeader';
import TableRow from './../../../src/components/TableRow';
import styles from './styles.module.scss';

export interface TableHeader {
  className?: string;
  label: React.ReactNode;
  value: string;
}

export interface TableItem {
  [key: string]: React.ReactNode;
}

export interface TableClasses {
  root: string;
  header: string;
  body: string;
  row: string;
  cell: string;
  'row-empty': string;
  'cell-empty': string;
}

export interface TableDefaultProps {
  /**
   * Classes of table component
   */
  classes: Partial<TableClasses>;
}

export interface TableProps extends Partial<TableDefaultProps> {
  /**
   * Header of table
   * Item in header will render as `TableCell` component
   * Required props: `label` and `value`. Other props will passing to `TableCell` component
   */
  header: TableHeader[];
  /**
   * Data of table
   * Item in data will render as `TableRow` and each value in field will render as `TableCell` component
   * Value of field in item allowed a string or `ReactNode`
   */
  data: TableItem[];
  /**
   * Key of table
   * If set `keys`, rest in data will pass to `TableRow` attributes
   */
  keys?: { [key: string]: string } | string[];
  /**
   * Display content if data is `null`
   */
  emptyContent?: React.ReactNode;
}

const DEFAULT_EMPTY_TEXT = 'Empty data';

const defaultProps = {
  classes: {} as TableClasses,
  emptyContent: undefined
};

export const CustomTable: FunctionComponent<TableProps> = forwardRef(
  (props, ref) => {
    const {
      header,
      data,
      keys,
      classes,
      emptyContent: customEmptyContent,
      ...rest
    } = {
      ...defaultProps,
      ...props
    };

    const classOfRoot = cn(styles.root, classes.root);
    const classOfHeader = cn(styles.header, classes.header);
    const classOfBody = cn(styles.body, classes.body);
    const classOfRow = cn(styles.row, classes.row);
    const classOfCell = cn(styles.cell, classes.cell);

    const classOfRowEmpty = cn(styles['row-empty'], classes['row-empty']);
    const classOfCellEmpty = cn(styles['cell-empty'], classes['cell-empty']);

    const lengthOfHeader = (header || []).length;
    const lengthOfData = (data || []).length;
    const isEmpty = lengthOfData === 0;

    const cellsOfHeader = useMemo(
      () =>
        (header || []).map(({ label, value, width, ...rest }: any) => (
          <TableCell
            key={value}
            {...rest}
            className={classOfCell}
            width={width}
            inHeader
          >
            {label}
          </TableCell>
        )),
      [header]
    );

    const keysIsExisted = !!keys;
    const keysValue = Object.values(keys || {});
    const rowsOfBody = useMemo(
      () =>
        (data || []).map(({ active, ...rest }, idx) => {
          const dataOfItem = !keysIsExisted ? rest : _pick(rest, keysValue);
          const otherProps = !keysIsExisted ? {} : _omit(rest, keysValue);
          return (
            <TableRow
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              {...otherProps}
              className={cn(classOfRow, {
                [styles.active]: active
              })}
            >
              {header.map(({ value, width, ...rest }: any) => (
                <TableCell
                  key={value}
                  {...rest}
                  width={width}
                  className={classOfCell}
                >
                  {dataOfItem[value]}
                </TableCell>
              ))}
            </TableRow>
          );
        }),
      [data, header]
    );

    const contentIfEmpty = useMemo(
      () =>
        isEmpty && (
          <TableRow className={classOfRowEmpty}>
            <TableCell colSpan={lengthOfHeader} className={classOfCellEmpty}>
              {customEmptyContent || DEFAULT_EMPTY_TEXT}
            </TableCell>
          </TableRow>
        ),
      [lengthOfHeader, isEmpty, customEmptyContent]
    );

    return (
      <TableBase {...rest} ref={ref} className={classOfRoot}>
        <TableHeader className={classOfHeader}>
          <TableRow className={classOfRow}>{cellsOfHeader}</TableRow>
        </TableHeader>
        <TableBody className={classOfBody}>
          {contentIfEmpty}
          {rowsOfBody}
        </TableBody>
      </TableBase>
    );
  }
);

export default CustomTable;
