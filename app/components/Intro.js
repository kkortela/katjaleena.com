import React from 'react'
import styles from './intro.css'
import strings from '../strings'


const Intro = ({className}) => {
  // give strings via props
  const intro = strings.intro
  return (
        <div className={`${styles.intro} ${className}`}>
          <h1>{intro.title}</h1>
          <p>{intro.text}</p>
        </div>
  )
}

export default Intro
