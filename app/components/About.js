import React from 'react'
import styles from './about.css'

const About = ({strings}) => {
  return (
    <div className={styles.about}>
      <div className={`pure-g ${styles.padding}}`}>
        <div className="pure-u-1 pure-u-lg-1-3 pure-u-xl-1-2">
          <div className={styles.imgWrapper}>
            <img src={require(`../../public/images/aboutme.jpg`)} />
            <p className={styles.caption}>{strings.caption}</p>
          </div>
        </div>
        <div className={`pure-u-1 pure-u-lg-2-3 pure-u-xl-1-2`}>
          <div className={styles.aboutme}>
            <h1>{strings.intro.title}</h1>
            <p className={styles.aboutme}>{strings.intro.text1}</p>
            <p className={styles.aboutme}>{strings.intro.text2}</p>
            <p className={styles.aboutme}>{strings.intro.text3}</p>
            <div className={styles.downloadBtnWrapper}>
              <a className={styles.downloadBtn} href={require(`../../public/resume.pdf`)}>
                DOWNLOAD MY RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
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
