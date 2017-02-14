import React from 'react'
import styles from './cases.css'

const Cases = () => {
  const Case = ({img, title, text}, i) => {
    return (
      <div className={`${styles.wrapper} pure-u-1 pure-u-md-1-2 pure-u-lg-1-4`} key={i}>
        <a href="#">
          <img src={img}/>
          <div className={styles.textContent}>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
  const images = [
    {
      img: require(`../../public/images/amma.jpg`),
      title: 'Amma',
      text: 'Case project for building an app for asthma tracking',
    },
    {
      img: require(`../../public/images/instashop.jpg`),
      title: 'Instashop',
      text: 'Responsive online grocery store websites',
    },
    {
      img: require(`../../public/images/wedding.jpg`),
      title: 'Wedding website',
      text: 'Responsive wedding website',
    },
    {
      img: require(`../../public/images/dignity-meals.jpg`),
      title: 'Dignity Meals',
      text: 'Mobile app for connecting food donors with charities',
    },
  ]
  return (
      <div className={styles.cases}>
        <div className="pure-g">
          {images.map(Case)}
        </div>
      </div>
  )
}

export default Cases
