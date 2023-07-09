import React from 'react';
import Fade from './components/Fade';
import ScaleIn from './components/ScaleIn';
import ScaleOut from './components/ScaleOut';
import SlideLeft from './components/SlideLeft';
import SlideRight from './components/SlideRight';
import SlideTop from './components/SlideTop';

export enum AnimationTypes {
  Fade = 'Fade',
  SlideTop = 'SlideTop',
  SlideRight = 'SlideRight',
  SlideLeft = 'SlideLeft',
  ScaleIn = 'ScaleIn',
  ScaleOut = 'ScaleOut'
}

const animations = new Map()
  .set(AnimationTypes.Fade, Fade)
  .set(AnimationTypes.SlideTop, SlideTop)
  .set(AnimationTypes.SlideRight, SlideRight)
  .set(AnimationTypes.SlideLeft, SlideLeft)
  .set(AnimationTypes.ScaleIn, ScaleIn)
  .set(AnimationTypes.ScaleOut, ScaleOut);

export interface AnimationProps {
  type: AnimationTypes;
  children?: React.ReactNode;
}

interface AnimationDefaultProps {
  component: React.ElementType;
  className: string | null;
}

const defaultProps: AnimationDefaultProps = {
  component: 'div',
  className: null
};

export const Animation = (props: AnimationProps) => {
  const { component, type, children, ...rest } = {
    ...defaultProps,
    ...props
  };

  const Framer = animations.get(type);

  return (
    <Framer {...rest} component={component}>
      {children}
    </Framer>
  );
};

Animation.displayName = 'Animation';

export default Animation;
