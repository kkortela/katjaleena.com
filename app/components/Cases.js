import React from 'react'
import styles from './cases.css'
import images from '../config'

const Cases = () => {
  const Case = ({img, title, text}, i) => {
    return (
      <div className={`${styles.wrapper} pure-u-1 pure-u-md-1-2 pure-u-lg-1-4`} key={i}>
        <a href="#">
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
        <div className="pure-g">
          {images.map(Case)}
        </div>
      </div>
  )
}

export default Cases
