import React from 'react'
import styles from './portfolio.css'
import strings from '../../strings'

const Amma = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1>{strings.amma.title}</h1>
      <img className={`${styles.cover}`} src={require(`../../../public/images/amma-cover.jpg`)} />
      <div className={`${styles.intro}`}>
        <span>{strings.amma.intro.intro1.subtitle}</span>
        <p>{strings.amma.intro.intro1.text}</p>
      </div>
      <div className={`${styles.intro}`}>
        <span>{strings.amma.intro.intro2.subtitle}</span>
        <p>{strings.amma.intro.intro2.text}</p>
      </div>
      <div className={`${styles.intro}`}>
        <span>{strings.amma.intro.intro3.subtitle}</span>
        <p>{strings.amma.intro.intro3.text}</p>
      </div>
      <div className={`${styles.intro}`}>
        <span>{strings.amma.intro.intro4.subtitle}</span>
        <p>{strings.amma.intro.intro4.text}</p>
      </div>
      <div className={`pure-g ${styles.processmain}`}>
        <div className={`pure-u-lg-1-4 ${styles.process}`}>
          <img className={`${styles.icon}`} src={require(`../../../public/images/research-icon.svg`)} />
          <span>{strings.amma.processsteps.step1.subtitle}</span>
          <p>{strings.amma.processsteps.step1.text1}</p>
          <p>{strings.amma.processsteps.step1.text2}</p>
          <p>{strings.amma.processsteps.step1.text3}</p>
        </div>
        <div className={`pure-u-lg-1-4 ${styles.process}`}>
          <img className={`${styles.icon}`} src={require(`../../../public/images/strategy-icon.svg`)} />
          <span>{strings.amma.processsteps.step2.subtitle}</span>
          <p>{strings.amma.processsteps.step2.text1}</p>
          <p>{strings.amma.processsteps.step2.text2}</p>
          <p>{strings.amma.processsteps.step2.text3}</p>
          <p>{strings.amma.processsteps.step2.text4}</p>
        </div>
        <div className={`pure-u-lg-1-4 ${styles.process}`}>
          <img className={`${styles.icon}`} src={require(`../../../public/images/ixd-icon.svg`)} />
          <span>{strings.amma.processsteps.step3.subtitle}</span>
          <p>{strings.amma.processsteps.step3.text1}</p>
          <p>{strings.amma.processsteps.step3.text2}</p>
          <p>{strings.amma.processsteps.step3.text3}</p>
        </div>
        <div className={`pure-u-lg-1-4 ${styles.process}`}>
          <img className={`${styles.icon}`} src={require(`../../../public/images/ui-icon.svg`)} />
          <span>{strings.amma.processsteps.step4.subtitle}</span>
          <p>{strings.amma.processsteps.step4.text1}</p>
          <p>{strings.amma.processsteps.step4.text2}</p>
          <p>{strings.amma.processsteps.step4.text3}</p>
        </div>
      </div>
      <h2>{strings.amma.summary.title}</h2>
      <p>{strings.amma.summary.text1}</p>
      <p>{strings.amma.summary.text2}</p>
      <h2>{strings.amma.process.title}</h2>
      <h3>{strings.amma.process.research.title}</h3>
      <p>{strings.amma.process.research.text}</p>
      <h3>{strings.amma.process.strategy.title}</h3>
      <img src={require(`../../../public/images/amma-persona.png`)} />
      <p className={`${styles.caption}`}>{strings.amma.process.strategy.caption1}</p>
      <p>{strings.amma.process.strategy.text1}</p>
      <p>{strings.amma.process.strategy.text2}</p>
      <img src={require(`../../../public/images/amma-userflows.png`)} />
      <p className={`${styles.caption}`}>{strings.amma.process.strategy.caption2}</p>
      <h3>{strings.amma.process.ixda.title}</h3>
      <p>{strings.amma.process.ixda.text1}</p>
      <img src={require(`../../../public/images/amma-sketches.jpg`)} />
      <p className={`${styles.caption}`}>{strings.amma.process.ixda.caption1}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/amma-wireframes.png`)} />
      <p className={`${styles.caption}`}>{strings.amma.process.ixda.caption2}</p>
      <p>{strings.amma.process.ixda.text2}</p>
      <a href="https://marvelapp.com/2jab69j/screen/24607525">{strings.amma.process.ixda.link}</a>
      <p>{strings.amma.process.ixda.text3}</p>
      <h3>{strings.amma.process.uidesign.title}</h3>
      <p>{strings.amma.process.uidesign.text1}</p>
      <img src={require(`../../../public/images/amma-styleguide.png`)} />
      <p>{strings.amma.process.uidesign.text2}</p>
      <img className={`${styles.noshadow}`} src={require(`../../../public/images/amma-keyscreens.png`)} />
      <h2>{strings.amma.process.reflection.title}</h2>
      <p>{strings.amma.process.reflection.text1}</p>
      <p>{strings.amma.process.reflection.text2}</p>
    </div>
  )
}

export default Amma
