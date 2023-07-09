import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import _merge from 'lodash-es/merge';

interface AnimationListProps {
  staggerChildren?: number;
  className?: string;
  children?: React.ReactNode;
}

interface AnimationListDefaultProps {
  component: React.ElementType;
  className: string | null;
  staggerChildren: number;
}

const defaultProps: AnimationListDefaultProps = {
  component: 'div',
  className: null,
  staggerChildren: 0.1
};

const LIST_VARIANTS = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

export const AnimationList = (props: AnimationListProps) => {
  const { component, staggerChildren, children, ...rest } = {
    ...defaultProps,
    ...props
  };

  const Framer = motion[component as any];
  const variants = useMemo(
    () =>
      _merge({}, LIST_VARIANTS, {
        visible: { transition: { staggerChildren } }
      }),
    [staggerChildren]
  );

  return (
    <Framer initial="hidden" animate="visible" variants={variants} {...rest}>
      {children}
    </Framer>
  );
};

AnimationList.displayName = 'AnimationList';

export default AnimationList;
