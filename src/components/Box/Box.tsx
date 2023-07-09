import cn from 'classnames';
import _merge from 'lodash/merge';
import React from 'react';
import styles from './styles.module.scss';

const camelCaseToKebabCase = (str: string) => {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

function memoize(fn: (arg: any) => any): any {
  const cache: any = {};
  return (arg: any) => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const spacingKeys = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  // shorthand
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];

const properties: { [key: string]: string } = {
  m: 'margin',
  p: 'padding',
};

const directions: { [key: string]: string | Array<string> } = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
};

const aliases: { [key: string]: string } = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py',
};

const getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});

function getValue(propValue: string | number): string | number {
  if (typeof propValue === 'string') {
    return propValue;
  }

  const transformed = Math.abs(propValue);

  if (propValue >= 0) {
    return transformed;
  }

  return -transformed;
}

function getStyleFromPropValue(cssProperties: any, breakpoint?: any): any {
  return (propValue: any) =>
    cssProperties.reduce((acc: any, cssProperty: any) => {
      const spacingKey = camelCaseToKebabCase(cssProperty);
      const spacingValue = getValue(propValue);
      const spacingClassName = breakpoint
        ? styles[`spacing-${breakpoint}-${spacingKey}-${spacingValue}`]
        : styles[`spacing-${spacingKey}-${spacingValue}`];

      acc[spacingClassName] = !!spacingValue;
      return acc;
    }, {});
}

function spacing(props: any, breakpoint?: any): any {
  return Object.keys(props)
    .map((prop) => {
      if (!spacingKeys.includes(prop)) {
        return null;
      }

      const cssProperties = getCssProperties(prop);
      const styleFromPropValue = getStyleFromPropValue(cssProperties, breakpoint);
      const propValue = props[prop];

      return styleFromPropValue(propValue);
    })
    .reduce(_merge, {});
}

interface SpacingKey {
  m: number;
  mt: number;
  mr: number;
  mb: number;
  ml: number;
  mx: number;
  my: number;
  p: number;
  pt: number;
  pr: number;
  pb: number;
  pl: number;
  px: number;
  py: number;
  margin: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  marginX: number;
  marginY: number;
  padding: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingX: number;
  paddingY: number;
}

export type BoxProps = {
  xs?: SpacingKey;
  sm?: SpacingKey;
  md?: SpacingKey;
  xl?: SpacingKey;
  [key: string]: any;
};

interface BoxDefaultProps {
  component: React.ElementType;
}

const defaultProps: BoxDefaultProps = {
  component: 'div',
};

const defaultBreakpoint = ['xs', 'sm', 'md', 'lg', 'xl'];

export const Box = (props: BoxProps) => {
  const allProps: any = { ...defaultProps, ...props };
  const { component: Component, className, xs, sm, md, xl, style, children, ...rest } = allProps;

  const styledBreakPoint = defaultBreakpoint.map((key) =>
    spacing(Object.assign({}, allProps[key]), key),
  );

  const classOfComponent = cn(
    styles.Box,
    spacing(Object.assign({}, rest)),
    ...styledBreakPoint,
    className,
  );

  return (
    <Component className={classOfComponent} style={style}>
      {children}
    </Component>
  );
};

Box.displayName = 'Box';

export default Box;
