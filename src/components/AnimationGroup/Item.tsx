import { motion } from 'framer-motion';
import React from 'react';

export enum AnimationItemTypes {
  SlideTop = 'SlideTop'
}

const animations = new Map().set(AnimationItemTypes.SlideTop, {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '17.5%' },
  transition: {
    type: 'spring',
    stiffness: 275,
    damping: 17.5
  }
});

type AnimationItemProps = {
  type: AnimationItemTypes;
  className?: string;
  children?: React.ReactNode;
};

interface AnimationItemDefaultProps {
  component: React.ElementType;
  className: string | null;
}

const defaultProps: AnimationItemDefaultProps = {
  component: 'div',
  className: null
};

export const AnimationItem = (props: AnimationItemProps) => {
  const { component, type, children, ...rest } = {
    ...defaultProps,
    ...props
  };

  const Framer = motion[component as any];
  const variants = animations.get(type);

  return (
    <Framer {...rest} variants={variants}>
      {children}
    </Framer>
  );
};

AnimationItem.displayName = 'AnimationItem';

export default AnimationItem;
