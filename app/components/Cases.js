import React from 'react'
import styles from './cases.css'
import { images } from '../config'
import { urlPaths } from '../config'
import strings from '../strings'

const Cases = () => {
  const Case = ({img, title, text}, i) => {
    return (
      <div className={`${styles.wrapper} pure-u-1 pure-u-lg-1-2 pure-u-xl-1-4`} key={i}>
        <a href={`#${urlPaths.cases[i]}`}>
          <img src={img}/>
          <div className={styles.textContent}>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
  return (
      <div className={styles.cases}>
        <h1>{strings.work.title}</h1>
        <div className="pure-g">
          {images.map(Case)}
        </div>
      </div>
  )
}

export default Cases
