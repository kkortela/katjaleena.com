import React from 'react'
import styles from './instashop.css'
import strings from '../../strings'

const WeddingWebsite = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1>{strings.wedding.title}</h1>
      <img src={require(`../../../public/images/wedding-cover.jpg`)} />
      <h2>{strings.wedding.intro.summary.title}</h2>
      <p>{strings.wedding.intro.summary.text1}</p>
      <p>{strings.wedding.intro.summary.text2}</p>
      <p>{strings.wedding.intro.summary.text3}</p>
      <p>{strings.wedding.intro.summary.text4}</p>
    </div>
  )
}

export default WeddingWebsite
