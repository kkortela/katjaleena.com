import React from 'react'
import styles from './portfolio.css'
import strings from '../../strings'

const WeddingWebsite = () => {
  return (
    <div className={`${styles.portfolio}`}>
      <h1 className={`${styles.hwed}`}>{strings.wedding.title}</h1>
      <a className={`${styles.wedlink}`} href="http://www.mikatja.fi">{strings.wedding.link}</a>
      <img className={`${styles.cover}`} src={require(`../../../public/images/wedding-cover.jpg`)} />
      <div className={`${styles.intro}`}>
        <span>{strings.wedding.intro.intro1.subtitle}</span>
        <p>{strings.wedding.intro.intro1.text}</p>
      </div>
      <div className={`${styles.intro}`}>
        <span>{strings.wedding.intro.intro2.subtitle}</span>
        <p>{strings.wedding.intro.intro2.text}</p>
      </div>
      <div className={`${styles.intro}`}>
        <span>{strings.wedding.intro.intro3.subtitle}</span>
        <p>{strings.wedding.intro.intro3.text}</p>
      </div>
      <h2>{strings.wedding.intro.summary.title}</h2>
      <p>{strings.wedding.intro.summary.text1}</p>
      <p>{strings.wedding.intro.summary.text2}</p>
      <p>{strings.wedding.intro.summary.text3}</p>
      <p>{strings.wedding.intro.summary.text4}</p>
    </div>
  )
}

export default WeddingWebsite
