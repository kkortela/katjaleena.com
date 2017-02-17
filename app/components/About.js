import React from 'react'
import styles from './about.css'

const About = ({strings}) => {
  return (
    <div className={styles.about}>
      <img src={require(`../../public/images/aboutme.jpg`)} />
      <h1>{strings.intro.title}</h1>
      <p>{strings.intro.text1}</p>
      <p>{strings.intro.text2}</p>
      <p>{strings.intro.text3}</p>
      <h1>{strings.references.title}</h1>
      <div className={`pure-g ${styles.references}}`}>
        <div className={`pure-u-1 pure-u-md-1-3 ${styles.wrapper}`}>
          <div className={styles.referenceBlock}>
            <div>
              <p>{strings.references.ref1.text}</p>
              <span>- {strings.references.ref1.referer}</span>
            </div>
            <div>
              <p>{strings.references.ref2.text}</p>
              <span>- {strings.references.ref2.referer}</span>
            </div>
          </div>
        </div>
        <div className={`pure-u-1 pure-u-md-1-3 ${styles.wrapper}`}>
          <div className={styles.referenceBlock}>
            <div>
              <p>{strings.references.ref3.text}</p>
              <span>- {strings.references.ref3.referer}</span>
            </div>
            <div>
              <p>{strings.references.ref4.text}</p>
              <span>- {strings.references.ref4.referer}</span>
            </div>
          </div>
        </div>
        <div className={`pure-u-1 pure-u-md-1-3 ${styles.wrapper}`}>
          <div className={styles.referenceBlock}>
            <div>
              <p>{strings.references.ref5.text}</p>
              <span>- {strings.references.ref5.referer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
