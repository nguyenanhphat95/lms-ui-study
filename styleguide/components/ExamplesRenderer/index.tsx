import React from 'react'
import classes from './styles.module.scss'

function ExamplesRenderer ({ name, children }: any): JSX.Element {
  return (
    <article className={classes.examples} data-testid={`${name as string}-examples`}>
      {children}
    </article>
  )
}

export default ExamplesRenderer
