import debounce from '@App/utils/debounce';
import animate from '@App/utils/animations/animate';
import useEventCallback from '@App/utils/hooks/useEventCallback';
import ownerWindow from '@App/utils/ownerWindow';
import { detectScrollType, getNormalizedScrollLeft } from '@App/utils/ScrollLeft';
import TabScrollButton from '../TabScrollButton';
import clsx from 'clsx';
import * as React from 'react';
import { isFragment } from 'react-is';
import ScrollbarSize from '../ScrollbarSize';
import TabIndicator from '../TabIndicator';
import styles from './styles.module.scss';

export interface TabsProps {
  action?: any;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  centered?: boolean;
  children?: React.ReactNode | string;
  className?: string;
  component?: React.ElementType;
  indicatorColor?: 'primary' | 'secondary';
  onChange?: any;
  orientation?: 'horizontal' | 'vertical';
  ScrollButtonComponent?: React.ElementType;
  scrollButtons?: 'auto' | 'desktop' | 'off' | 'on';
  selectionFollowsFocus?: boolean;
  TabIndicatorProps?: any;
  TabScrollButtonProps?: any;
  textColor?: 'inherit' | 'primary' | 'secondary';
  value?: any;
  variant?: 'fullWidth' | 'scrollable' | 'standard';
}

const MaterialTabs = React.forwardRef(function MaterialTabs(props: TabsProps, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component: Component = 'div',
    indicatorColor = 'secondary',
    onChange,
    orientation = 'horizontal',
    ScrollButtonComponent = TabScrollButton,
    scrollButtons = 'auto',
    selectionFollowsFocus,
    TabIndicatorProps = {},
    TabScrollButtonProps,
    textColor = 'inherit',
    value,
    variant = 'standard',
    ...other
  } = props;
  const scrollable = variant === 'scrollable';
  const isRtl = false;
  const vertical = orientation === 'vertical';

  const scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  const start = vertical ? 'top' : 'left';
  const end = vertical ? 'bottom' : 'right';
  const clientSize = vertical ? 'clientHeight' : 'clientWidth';
  const size = vertical ? 'height' : 'width';

  if (process.env.NODE_ENV !== 'production') {
    if (centered && scrollable) {
      console.error(
        'You can not use the `centered={true}` and `variant="scrollable"` properties in same time',
      );
    }
  }

  const [mounted, setMounted] = React.useState(false);
  const [indicatorStyle, setIndicatorStyle] = React.useState({});
  const [displayScroll, setDisplayScroll] = React.useState({
    start: false,
    end: false,
  });

  const [scrollerStyle, setScrollerStyle] = React.useState({
    overflow: 'hidden',
    marginBottom: null,
  });

  const valueToIndex = new Map();
  const tabsRef = React.useRef(null);
  const tabListRef = React.useRef(null);

  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      // create a new object with ClientRect class props + scrollLeft
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, 'ltr'),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
      };
    }

    let tabMeta;
    if (tabsNode && value !== false) {
      const children = tabListRef.current.children;

      if (children.length > 0) {
        const tab = children[valueToIndex.get(value)];
        if (process.env.NODE_ENV !== 'production') {
          if (!tab) {
            console.error('tab is not valid');
          }
        }
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta, tabMeta };
  };

  const updateIndicatorState = useEventCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta();
    let startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        const correction = isRtl
          ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth
          : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }

    const newIndicatorStyle = {
      [start]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0,
    };

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  const scroll = (scrollValue) => {
    animate(scrollStart, tabsRef.current, scrollValue);
  };

  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      // Fix for Edge
      scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  const handleStartScrollClick = () => {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  const handleEndScrollClick = () => {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  const handleScrollbarSizeChange = React.useCallback((scrollbarHeight) => {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight,
    });
  }, []);

  const getConditionalElements = () => {
    const conditionalElements: any = {};
    conditionalElements.scrollbarSizeListener = scrollable ? (
      <ScrollbarSize className={styles.scrollable} onChange={handleScrollbarSizeChange} />
    ) : null;

    const scrollButtonsActive = displayScroll.start || displayScroll.end;
    const showScrollButtons =
      scrollable &&
      ((scrollButtons === 'auto' && scrollButtonsActive) ||
        scrollButtons === 'desktop' ||
        scrollButtons === 'on');

    conditionalElements.scrollButtonStart = showScrollButtons ? (
      <ScrollButtonComponent
        orientation={orientation}
        direction={isRtl ? 'right' : 'left'}
        onClick={handleStartScrollClick}
        disabled={!displayScroll.start}
        className={clsx(styles.scrollButtons, {
          [styles.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
        {...TabScrollButtonProps}
      />
    ) : null;

    conditionalElements.scrollButtonEnd = showScrollButtons ? (
      <ScrollButtonComponent
        orientation={orientation}
        direction={isRtl ? 'left' : 'right'}
        onClick={handleEndScrollClick}
        disabled={!displayScroll.end}
        className={clsx(styles.scrollButtons, {
          [styles.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
        {...TabScrollButtonProps}
      />
    ) : null;

    return conditionalElements;
  };

  const scrollSelectedIntoView = useEventCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta();

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart);
    }
  });

  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== 'off') {
      const { scrollTop, scrollHeight, clientHeight, scrollWidth, clientWidth } = tabsRef.current;
      let showStartScroll;
      let showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        const scrollLeft = getNormalizedScrollLeft(tabsRef.current, 'rtl');
        // use 1 for the potential rounding error with browser zooms.
        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({ start: showStartScroll, end: showEndScroll });
      }
    }
  });

  React.useEffect(() => {
    const handleResize = debounce(() => {
      updateIndicatorState();
      updateScrollButtonState();
    }, 10);

    const win = ownerWindow(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return () => {
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);

  const handleTabsScroll = React.useCallback(() => {
    debounce(() => {
      updateScrollButtonState();
    }, 10);
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    updateIndicatorState();
    updateScrollButtonState();
  });

  React.useEffect(() => {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);

  React.useImperativeHandle(
    action,
    () => ({
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState,
    }),
    [updateIndicatorState, updateScrollButtonState],
  );

  const indicator = (
    <TabIndicator
      className={styles.indicator}
      orientation={orientation}
      color={indicatorColor}
      {...TabIndicatorProps}
      style={{
        ...indicatorStyle,
        ...TabIndicatorProps.style,
      }}
    />
  );

  let childIndex = 0;
  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.log('child is not valid');
      }
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;

    childIndex += 1;
    return React.cloneElement(child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue,
    });
  });

  const handleKeyDown = (event) => {
    const { target } = event;
    // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation
    const role = target.getAttribute('role');
    if (role !== 'tab') {
      return;
    }

    let newFocusTarget = null;
    const previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    const nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;
      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;
      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;
      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;
      default:
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  const conditionalElements = getConditionalElements();

  return (
    <Component
      className={clsx(
        styles.root,
        {
          [styles.vertical]: vertical,
        },
        className,
      )}
      ref={ref}
      {...other}>
      {conditionalElements.scrollButtonStart}
      {conditionalElements.scrollbarSizeListener}
      <div
        className={clsx(styles.scroller, {
          [styles.fixed]: !scrollable,
          [styles.scrollable]: scrollable,
        })}
        style={scrollerStyle}
        ref={tabsRef}
        onScroll={handleTabsScroll}>
        <div
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          className={clsx(styles.flexContainer, {
            [styles.flexContainerVertical]: vertical,
            [styles.centered]: centered && !scrollable,
          })}
          onKeyDown={handleKeyDown}
          ref={tabListRef}
          role="tablist">
          {children}
        </div>
        {mounted && indicator}
      </div>
      {conditionalElements.scrollButtonEnd}
    </Component>
  );
});

export default MaterialTabs;
