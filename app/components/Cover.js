import React from 'react'
import styles from './cover.css'
import Intro from './Intro'

const Cover = () => {
  return (
    <div>
      <div className={styles.cover}>
        <Intro className={styles.large}/>
      </div>
        <Intro className={styles.small}/>
    </div>
  )
}

export default Cover
