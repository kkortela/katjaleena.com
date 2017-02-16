import React from 'react'
import styles from './instashop.css'
import strings from '../../strings'

const Instashop = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1>{strings.instashop.title}</h1>
      <img src={require(`../../../public/images/instashop.png`)} />
    </div>
  )
}

export default Instashop
