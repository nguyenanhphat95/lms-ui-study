import { motion } from 'framer-motion'
import React from 'react'

const ScaleOut = ({ children, duration, component, ...rest }: any): JSX.Element => {
  const Component = motion[component]

  return (
    <Component
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1.0 }}
      exit={{ opacity: 0, scale: 0.75 }}
      transition={{
        duration,
        type: 'spring',
        stiffness: 250,
        damping: 17.5,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

ScaleOut.displayName = 'ScaleOut'

export default ScaleOut
