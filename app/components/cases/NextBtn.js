import React from 'react'
import styles from './portfolio.css'
import { images } from '../../config'
import { urlPaths } from '../../config'
import strings from '../../strings'

const nextBtn = ({nextPage}) => {
  return (
    <a href={`#${urlPaths.cases[nextPage]}`} className={styles.link}>
      Next
    </a>
  )
}

export default nextBtn
