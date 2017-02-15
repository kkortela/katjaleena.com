import React from 'react'
import styles from './about.css'

const About = ({strings}) => {
  return (
    <div className={styles.about}>
      <h1>{strings.references.title}</h1>
      <div className={`pure-g ${styles.references}}`}>
        <div className={`pure-u-1 pure-u-md-1-3 ${styles.wrapper}`}>
          <div className={styles.referenceBlock}>
            <div>
              <p>{strings.references.ref1.text}</p>
              <span>- {strings.references.ref1.referer}</span>
            </div>
            <div>
              <p>{strings.references.ref1.text}</p>
              <span>- {strings.references.ref1.referer}</span>
            </div>
          </div>
        </div>
        <div className={`pure-u-1 pure-u-md-1-3 ${styles.wrapper}`}>
          <div className={styles.referenceBlock}>
            <div>
              <p>{strings.references.ref1.text}</p>
              <span>- {strings.references.ref1.referer}</span>
            </div>
            <div>
              <p>{strings.references.ref1.text}</p>
              <span>- {strings.references.ref1.referer}</span>
            </div>
          </div>
        </div>
        <div className={`pure-u-1 pure-u-md-1-3 ${styles.wrapper}`}>
          <div className={styles.referenceBlock}>
            <div>
              <p>{strings.references.ref1.text}</p>
              <span>- {strings.references.ref1.referer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
