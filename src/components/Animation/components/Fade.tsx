import { motion } from 'framer-motion'
import React from 'react'

const Fade = ({ children, duration, component, ...rest }: any): JSX.Element => {
  const Component = motion[component]

  return (
    <Component
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

Fade.displayName = 'Fade'

export default Fade
