import React from 'react'
import styles from './portfolio.css'
import strings from '../../strings'

const WeddingWebsite = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1 className={`${styles.hwed}`}>{strings.wedding.title}</h1>
      <a className={`${styles.wedlink}`} href="http://www.mikatja.fi">{strings.wedding.link}</a>
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
