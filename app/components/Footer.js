import React from 'react'
import styles from './footer.css'

const Footer = () => {
  const Links = ([imgUrl, linkUrl], i) => {
    return (
      <div className={`${styles.wrapper} pure-u-1-4`} key={i}>
        <a target="_blank" href={linkUrl}>
          <img src={imgUrl}/>
        </a>
      </div>
    )
  }
  const images = [
    [require(`../../public/images/linkedin.svg`), 'https://fi.linkedin.com/in/katjakortelainen'],
    [require(`../../public/images/behance.svg`), 'https://www.behance.net/katjaleeena'],
    [require(`../../public/images/twitter.svg`), 'https://twitter.com/katjaleeena'],
    [require(`../../public/images/github.svg`), 'https://github.com/kkortela'],
  ]
  return (
      <div className={`${styles.footer} pure-g`}>
        {images.map(Links)}
      </div>
  )
}

export default Footer
