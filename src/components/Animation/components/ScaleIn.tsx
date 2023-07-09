import { motion } from 'framer-motion'
import React from 'react'

const ScaleIn = ({ children, duration, component, ...rest }: any): JSX.Element => {
  const Component = motion[component]

  return (
    <Component
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1.0 }}
      exit={{ opacity: 0, scale: 1.25 }}
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

ScaleIn.displayName = 'ScaleIn'

export default ScaleIn
