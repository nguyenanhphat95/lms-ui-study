import compose from "@App/utils/compose";
import NextPage from "lms-icons/components/NextPage";
import PrevPage from "lms-icons/components/PrevPage";
import cn from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import Icon from "../Icon";
import { START_INDEX, STEP_VALUE } from "./const";
import { useRangeAndList } from "./hooks";
import styles from "./styles.module.scss";
import { getLabelFromIndex } from "./utils";

type PaginationProps = {
  displayNumber?: number;
  total: number;
  current: number;
  onChangePage: (selectedPage: number) => void;
  className?: string;
};

interface PaginationDefaultProps {
  component: React.ElementType;
  displayNumber: number;
}

const defaultProps: PaginationDefaultProps = {
  component: "div",
  displayNumber: 5,
};

export const Pagination = (props: PaginationProps) => {
  const {
    component: Component,
    total: totalOfPage,
    current: currentOfPage,
    displayNumber: displayOfButton,
    className,
    onChangePage,
    ...rest
  } = { ...defaultProps, ...props };

  const { list: listOfButton, range: rangeOfButton } = useRangeAndList({
    currentOfPage,
    totalOfPage,
    displayOfButton,
  });

  const isAllowedPrev = currentOfPage - STEP_VALUE < START_INDEX;
  const isAllowedNext = currentOfPage + STEP_VALUE > totalOfPage;

  const classOfComponent = cn(styles.pagination, className);
  const classOfIconPrev = cn(
    styles.icon,
    styles.prev,
    isAllowedPrev && styles.disabled
  );
  const classOfIconNext = cn(
    styles.icon,
    styles.next,
    isAllowedNext && styles.disabled
  );

  const [, setInputValue] = useState(getLabelFromIndex(currentOfPage));

  const handleOnChangePage = useCallback(
    (selectedPage: number) =>
      onChangePage(Math.min(totalOfPage, Math.abs(selectedPage))),
    [onChangePage, totalOfPage]
  );
  const handleOnClickButton = useCallback(
    (nextPage) => () =>
      compose(handleOnChangePage, (selectedPage: number) =>
        setInputValue(selectedPage)
      )(nextPage),
    [totalOfPage, handleOnChangePage, setInputValue]
  );

  const contentOfButton = useMemo(
    () =>
      listOfButton.map((value) => (
        <li
          role="presentation"
          key={value}
          className={cn(styles.item, value === currentOfPage && styles.active)}
          onClick={handleOnClickButton(value)}
        >
          <span>{getLabelFromIndex(value)}</span>
        </li>
      )),
    [rangeOfButton, listOfButton, currentOfPage, handleOnClickButton]
  );

  const showContentOfFirstPage = rangeOfButton.start > START_INDEX;
  const contentOfFirstPage = showContentOfFirstPage && (
    <li
      role="presentation"
      key={START_INDEX}
      className={cn(
        styles.item,
        START_INDEX === currentOfPage && styles.active
      )}
      onClick={handleOnClickButton(START_INDEX)}
    >
      <span>{getLabelFromIndex(START_INDEX)}</span>
    </li>
  );

  const showContentOfLastPage = rangeOfButton.end < totalOfPage;
  const contentOfLastPage = showContentOfLastPage && (
    <li
      role="presentation"
      key={totalOfPage}
      className={cn(
        styles.item,
        totalOfPage === currentOfPage && styles.active
      )}
      onClick={handleOnClickButton(totalOfPage)}
    >
      <span>{getLabelFromIndex(totalOfPage)}</span>
    </li>
  );

  const showContentOfPrevIndicator = rangeOfButton.start > START_INDEX + 1;
  const contentOfPrevIndicator = showContentOfPrevIndicator && (
    <li className={styles.indicator}>
      <span>...</span>
    </li>
  );

  const showContentOfNextIndicator = rangeOfButton.end + 1 < totalOfPage;
  const contentOfNextIndicator = showContentOfNextIndicator && (
    <li className={styles.indicator}>
      <span>...</span>
    </li>
  );

  const indexOfPrev = Math.max(START_INDEX, currentOfPage - STEP_VALUE);
  const indexOfNext = Math.min(totalOfPage, currentOfPage + STEP_VALUE);

  return (
    <Component {...rest} className={classOfComponent}>
      <ul className={styles["navigate-button"]} key={totalOfPage}>
        <li
          role="presentation"
          className={classOfIconPrev}
          onClick={handleOnClickButton(indexOfPrev)}
        >
          <Icon width={12} height={12} component={PrevPage} />
        </li>
        {contentOfFirstPage}
        {contentOfPrevIndicator}
        {contentOfButton}
        {contentOfNextIndicator}
        {contentOfLastPage}
        <li
          role="presentation"
          className={classOfIconNext}
          onClick={handleOnClickButton(indexOfNext)}
        >
          <Icon size={12} height={12} component={NextPage} />
        </li>
      </ul>
    </Component>
  );
};

export default Pagination;
