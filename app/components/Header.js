
import React from 'react'
import styles from './header.css'
import { urlPaths } from '../config'

const Header = () => {
  const imgUrl = require(`../../public/images/katjaleena-logo.png`)
  return (
      <div className={styles.header}>
        <a href={`#`} className={styles.logo}>
          <img src={imgUrl}/>
        </a>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href={`#${urlPaths.work}`} className={styles.link}>My work</a>
            </li>
            <li>
              <a href={`#${urlPaths.about}`} className={styles.link}>About me</a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Header
