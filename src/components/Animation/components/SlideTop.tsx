import { motion } from 'framer-motion'
import React from 'react'

const SlideTop = ({ children, duration, component, ...rest }: any): JSX.Element => {
  const Component = motion[component]

  return (
    <Component
      initial={{ opacity: 0, y: '17.5%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '17.5%' }}
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

SlideTop.displayName = 'SlideTop'

export default SlideTop
