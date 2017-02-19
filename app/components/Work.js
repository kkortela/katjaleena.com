import React from 'react'
import styles from './work.css'
import strings from '../strings'
import { images } from '../config'
import { urlPaths } from '../config'

const Work = () => {
  const Case = ({img, title, text}, i) => {
    const isWide = i === 0 || i === 3
    const pureClasses = isWide ?
      'pure-u-lg-13-24 pure-u-xl-3-5' :
      'pure-u-lg-11-24 pure-u-xl-2-5'
    const bgColor = isWide ? styles.lightBg : styles.darkBg
    return (
      <div className={`
          ${styles.wrapper}
          case-${i}
          pure-u-1
          ${pureClasses}
          `} key={i}>
        <a className={bgColor} href={`#${urlPaths.cases[i]}`}>
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
        <div className={`${styles.work}`}>
          <h1>{strings.work.title}</h1>
          <p>{strings.work.text}</p>
          <div className="pure-g">
            {images.map(Case)}
          </div>
        </div>
  )
}

export default Work
