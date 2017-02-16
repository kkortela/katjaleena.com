import React from 'react'
import styles from './instashop.css'
import strings from '../../strings'

const Instashop = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1>{strings.instashop.title}</h1>
      <img src={require(`../../../public/images/instashop.png`)} />
      <h2>{strings.instashop.summary.title}</h2>
      <p>{strings.instashop.summary.text}</p>
      <h2>{strings.instashop.process.title}</h2>
      <h3>{strings.instashop.process.research.title}</h3>
      <p>{strings.instashop.process.research.text}</p>
      <h3>{strings.instashop.process.strategy.title}</h3>
      <p>{strings.instashop.process.strategy.text1}</p>
      <p>{strings.instashop.process.strategy.text2}</p>
      <img src={require(`../../../public/images/instashop-persona.png`)} />
      <p>{strings.instashop.process.strategy.caption1}</p>

    </div>
  )
}

export default Instashop
