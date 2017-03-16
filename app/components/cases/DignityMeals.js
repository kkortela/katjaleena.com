import React from 'react'
import NextBtn from './NextBtn'
import styles from './portfolio.css'
import strings from '../../strings'
import CaseWrapper from './CaseWrapper'

const DignityMeals = () => {
  return (
    <CaseWrapper nextPage={3}>
      <h1>{strings.dignitymeals.title}</h1>
      <img className={`${styles.cover}`} src={require(`../../../public/images/dignitymeals-cover.jpg`)} />
        <div className={`${styles.intro}`}>
          <span>{strings.dignitymeals.intro.intro1.subtitle}</span>
          <p>{strings.dignitymeals.intro.intro1.text}</p>
        </div>
        <div className={`${styles.intro}`}>
          <span>{strings.dignitymeals.intro.intro2.subtitle}</span>
          <p>{strings.dignitymeals.intro.intro2.text}</p>
        </div>
        <div className={`${styles.intro}`}>
          <span>{strings.dignitymeals.intro.intro3.subtitle}</span>
          <p>{strings.dignitymeals.intro.intro3.text}</p>
        </div>
        <div className={`${styles.intro}`}>
          <span>{strings.dignitymeals.intro.intro4.subtitle}</span>
          <p>{strings.dignitymeals.intro.intro4.text}</p>
        </div>
        <div className={`pure-g ${styles.processmain}`}>
          <div className={`pure-u-1 pure-u-lg-1-2 pure-u-md-1-2 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/research-icon.svg`)} />
            <span>{strings.dignitymeals.processsteps.step1.subtitle}</span>
            <p>{strings.dignitymeals.processsteps.step1.text1}</p>
            <p>{strings.dignitymeals.processsteps.step1.text2}</p>
            <p>{strings.dignitymeals.processsteps.step1.text3}</p>
          </div>
          <div className={`pure-u-1 pure-u-lg-1-2 pure-u-md-1-2 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/strategy-icon.svg`)} />
            <span>{strings.dignitymeals.processsteps.step2.subtitle}</span>
            <p>{strings.dignitymeals.processsteps.step2.text1}</p>
            <p>{strings.dignitymeals.processsteps.step2.text2}</p>
            <p>{strings.dignitymeals.processsteps.step2.text3}</p>
            <p>{strings.dignitymeals.processsteps.step2.text4}</p>
          </div>
          <div className={`pure-u-1 pure-u-lg-1-2 pure-u-md-1-2 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/ixd-icon.svg`)} />
            <span>{strings.dignitymeals.processsteps.step3.subtitle}</span>
            <p>{strings.dignitymeals.processsteps.step3.text1}</p>
            <p>{strings.dignitymeals.processsteps.step3.text2}</p>
            <p>{strings.dignitymeals.processsteps.step3.text3}</p>
          </div>
          <div className={`pure-u-1 pure-u-lg-1-2 pure-u-md-1-2 ${styles.process}`}>
            <img className={`${styles.icon}`} src={require(`../../../public/images/ui-icon.svg`)} />
            <span>{strings.dignitymeals.processsteps.step4.subtitle}</span>
            <p>{strings.dignitymeals.processsteps.step4.text1}</p>
            <p>{strings.dignitymeals.processsteps.step4.text2}</p>
            <p>{strings.dignitymeals.processsteps.step4.text3}</p>
          </div>
        </div>
      <h2>{strings.dignitymeals.summary.title}</h2>
      <p>{strings.dignitymeals.summary.text}</p>
      <h2>{strings.dignitymeals.process.title}</h2>
      <h3>{strings.dignitymeals.process.research.title}</h3>
      <p>{strings.dignitymeals.process.research.text}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/dignitymeals-chart.png`)} />
      <p className={`${styles.caption}`}>{strings.dignitymeals.process.research.caption1}</p>
      <div className="pure-g">
        <div className="pure-u-lg-1-2">
          <p className={`${styles.citation}`}>{strings.dignitymeals.process.research.citation1}</p>
        </div>
        <div className="pure-u-lg-1-2">
          <p className={`${styles.citation}`}>{strings.dignitymeals.process.research.citation2}</p>
        </div>
      </div>
      <h3>{strings.dignitymeals.process.strategy.title}</h3>
      <p>{strings.dignitymeals.process.strategy.text1}</p>
      <p>{strings.dignitymeals.process.strategy.text2}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/dignitymeals-personas.png`)} />
      <p className={`${styles.caption}`}>{strings.dignitymeals.process.strategy.caption1}</p>
      <p>{strings.dignitymeals.process.strategy.text3}</p>
        <img src={require(`../../../public/images/dignitymeals-userflows.png`)} />
      <p className={`${styles.caption}`}>{strings.dignitymeals.process.strategy.caption2}</p>
      <h3>{strings.dignitymeals.process.ixda.title}</h3>
      <p>{strings.dignitymeals.process.ixda.text1}</p>
      <img src={require(`../../../public/images/dignitymeals-sketches.jpg`)} />
      <p className={`${styles.caption}`}>{strings.dignitymeals.process.ixda.caption1}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/dignitymeals-wireframes.png`)} />
      <p className={`${styles.caption}`}>{strings.dignitymeals.process.ixda.caption2}</p>
      <p className={`${styles.inline}`}>{strings.dignitymeals.process.ixda.text2}</p>
      <a target="_blank" className={`${styles.inline}`} href="https://marvelapp.com/1jd7g6h/screen/18283717">{strings.dignitymeals.process.ixda.link}</a>
      <p className={`${styles.inline}`}>{strings.dignitymeals.process.ixda.text3}</p>
      <p>{strings.dignitymeals.process.ixda.text4}</p>
      <h3>{strings.dignitymeals.process.uidesign.title}</h3>
      <p>{strings.dignitymeals.process.uidesign.text1}</p>
      <img src={require(`../../../public/images/dignitymeals-styleguide.png`)} />
      <p>{strings.dignitymeals.process.uidesign.text2}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/dignitymeals-keyscreens.jpg`)} />
      <h2>{strings.dignitymeals.process.reflection.title}</h2>
      <p>{strings.dignitymeals.process.reflection.text1}</p>
      <p>{strings.dignitymeals.process.reflection.text2}</p>
      <p>{strings.dignitymeals.process.reflection.text3}</p>
    </CaseWrapper>
  )
}

export default DignityMeals
