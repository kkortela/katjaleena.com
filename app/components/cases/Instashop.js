import React from 'react'
import NextBtn from './NextBtn'
import styles from './portfolio.css'
import strings from '../../strings'

const Instashop = () => {
  return (
    <div className={`${styles.portfolio}`}>
      <h1>{strings.instashop.title}</h1>
      <img className={`${styles.cover}`} src={require(`../../../public/images/instashop-cover.png`)} />
        <div className={`${styles.intro}`}>
          <span>{strings.instashop.intro.intro1.subtitle}</span>
          <p>{strings.instashop.intro.intro1.text}</p>
        </div>
        <div className={`${styles.intro}`}>
          <span>{strings.instashop.intro.intro2.subtitle}</span>
          <p>{strings.instashop.intro.intro2.text}</p>
        </div>
        <div className={`${styles.intro}`}>
          <span>{strings.instashop.intro.intro3.subtitle}</span>
          <p>{strings.instashop.intro.intro3.text}</p>
        </div>
        <div className={`${styles.intro}`}>
          <span>{strings.instashop.intro.intro4.subtitle}</span>
          <p>{strings.instashop.intro.intro4.text}</p>
        </div>
        <div className={`pure-g ${styles.processmain}`}>
          <div className={`pure-u-lg-1-4 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/research-icon.svg`)} />
            <span>{strings.instashop.processsteps.step1.subtitle}</span>
            <p>{strings.instashop.processsteps.step1.text1}</p>
            <p>{strings.instashop.processsteps.step1.text2}</p>
            <p>{strings.instashop.processsteps.step1.text3}</p>
          </div>
          <div className={`pure-u-lg-1-4 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/strategy-icon.svg`)} />
            <span>{strings.instashop.processsteps.step2.subtitle}</span>
            <p>{strings.instashop.processsteps.step2.text1}</p>
            <p>{strings.instashop.processsteps.step2.text2}</p>
            <p>{strings.instashop.processsteps.step2.text3}</p>
            <p>{strings.instashop.processsteps.step2.text4}</p>
            <p>{strings.instashop.processsteps.step2.text5}</p>
            <p>{strings.instashop.processsteps.step2.text6}</p>
            <p>{strings.instashop.processsteps.step2.text7}</p>
            <p>{strings.instashop.processsteps.step2.text8}</p>
          </div>
          <div className={`pure-u-lg-1-4 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/ixd-icon.svg`)} />
            <span>{strings.instashop.processsteps.step3.subtitle}</span>
            <p>{strings.instashop.processsteps.step3.text1}</p>
            <p>{strings.instashop.processsteps.step3.text2}</p>
            <p>{strings.instashop.processsteps.step3.text3}</p>
            <p>{strings.instashop.processsteps.step3.text4}</p>
          </div>
          <div className={`pure-u-lg-1-4 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/ui-icon.svg`)} />
            <span>{strings.instashop.processsteps.step4.subtitle}</span>
            <p>{strings.instashop.processsteps.step4.text1}</p>
            <p>{strings.instashop.processsteps.step4.text2}</p>
            <p>{strings.instashop.processsteps.step4.text3}</p>
          </div>
        </div>
      <h2>{strings.instashop.summary.title}</h2>
      <p>{strings.instashop.summary.text}</p>
      <h2>{strings.instashop.process.title}</h2>
      <h3>{strings.instashop.process.research.title}</h3>
      <p>{strings.instashop.process.research.text}</p>
      <h3>{strings.instashop.process.strategy.title}</h3>
      <p>{strings.instashop.process.strategy.text1}</p>
      <p>{strings.instashop.process.strategy.text2}</p>
      <img src={require(`../../../public/images/instashop-persona.png`)} />
      <p className={`${styles.caption}`}>{strings.instashop.process.strategy.caption1}</p>
      <p>{strings.instashop.process.strategy.text3}</p>
      <img src={require(`../../../public/images/instashop-empathymap.png`)} />
      <p className={`${styles.caption}`}>{strings.instashop.process.strategy.caption2}</p>
      <p>{strings.instashop.process.strategy.text4}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/instashop-sitemap.png`)} />
      <p className={`${styles.caption}`}>{strings.instashop.process.strategy.caption3}</p>
      <h3>{strings.instashop.process.ixda.title}</h3>
      <p>{strings.instashop.process.ixda.text1}</p>
      <img src={require(`../../../public/images/instashop-sketches.jpg`)} />
      <p className={`${styles.caption}`}>{strings.instashop.process.ixda.caption1}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/instashop-wireframes.png`)} />
      <p className={`${styles.caption}`}>{strings.instashop.process.ixda.caption2}</p>
      <p>{strings.instashop.process.ixda.text2}</p>
      <p className={`${styles.inline}`}>{strings.instashop.process.ixda.text3}</p>
      <a href="https://invis.io/YCAIQRJEV#/211249122_Homepage">{strings.instashop.process.ixda.link}</a>
      <p className={`${styles.inline}`}>{strings.instashop.process.ixda.text4}</p>
      <p>{strings.instashop.process.ixda.text5}</p>
      <h3>{strings.instashop.process.uidesign.title}</h3>
      <p>{strings.instashop.process.uidesign.text1}</p>
      <img src={require(`../../../public/images/instashop-uikit.png`)} />
      <p>{strings.instashop.process.uidesign.text2}</p>
      <img className={`${styles.cover}`} src={require(`../../../public/images/instashop-cover.png`)} />
      <h2>{strings.instashop.process.reflection.title}</h2>
      <p>{strings.instashop.process.reflection.text1}</p>
      <p>{strings.instashop.process.reflection.text2}</p>
      <p>{strings.instashop.process.reflection.text3}</p>
      <NextBtn nextPage={3}/>
    </div>
  )
}

export default Instashop
