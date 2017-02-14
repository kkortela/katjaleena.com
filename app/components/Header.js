import React from 'react'
import styles from './header.css'

const Header = ({setPage}) => {
  const navigate = (event) => {
    setPage(event)
  }
  const imgUrl = require(`../../public/images/katjaleena-logo.png`)
  return (
      <div className={styles.header}>
        <div className={styles.logo} onClick={navigate.bind(null, '/')}>
          <img src={imgUrl}/>
        </div>
        <div className={styles.nav}>
          <ul>
            <li><div className={styles.btn} onClick={navigate.bind(null, 'work')}>My work</div></li>
            <li><div className={styles.btn} onClick={navigate.bind(null, 'about')}>About me</div></li>
          </ul>
        </div>
      </div>
  )
}

export default Header
