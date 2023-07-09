import { motion } from 'framer-motion'
import React from 'react'

const SlideRight = ({ children, duration, component, ...rest }: any): JSX.Element => {
  const Component = motion[component]

  return (
    <Component
      initial={{ opacity: 0, x: '-17.5%' }}
      animate={{ opacity: 1, x: -0 }}
      exit={{ opacity: 0, x: '-17.5%' }}
      transition={{
        duration,
        type: 'spring',
        stiffness: 275,
        damping: 17.5,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

SlideRight.displayName = 'SlideRight'

export default SlideRight
