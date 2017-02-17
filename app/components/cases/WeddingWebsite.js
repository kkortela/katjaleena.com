import React from 'react'
import styles from './instashop.css'
import strings from '../../strings'

const WeddingWebsite = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1>{strings.wedding.title}</h1>
      <img src={require(`../../../public/images/wedding-cover.jpg`)} />
      <h2>{strings.wedding.summary.title}</h2>
      <p>{strings.wedding.summary.text1}</p>
      <p>{strings.wedding.summary.text2}</p>
      <p>{strings.wedding.summary.text3}</p>
      <p>{strings.wedding.summary.text4}</p>
    </div>
  )
}

export default WeddingWebsite
