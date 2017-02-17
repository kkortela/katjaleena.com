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
      <p>{strings.instashop.process.strategy.text3}</p>
      <img src={require(`../../../public/images/instashop-empathymap.png`)} />
      <p>{strings.instashop.process.strategy.caption2}</p>
      <p>{strings.instashop.process.strategy.text4}</p>
      <img src={require(`../../../public/images/instashop-sitemap.png`)} />
      <p>{strings.instashop.process.strategy.caption3}</p>
      <h3>{strings.instashop.process.ixda.title}</h3>
      <p>{strings.instashop.process.ixda.text1}</p>
      <img src={require(`../../../public/images/instashop-sketches.jpg`)} />
      <p>{strings.instashop.process.ixda.caption1}</p>
      <img src={require(`../../../public/images/instashop-wireframes.png`)} />
      <p>{strings.instashop.process.ixda.caption2}</p>
      <p>{strings.instashop.process.ixda.text2}</p>
      <p>{strings.instashop.process.ixda.text3}</p>
      <p>{strings.instashop.process.ixda.text4}</p>
      <p>{strings.instashop.process.ixda.text5}</p>
      <h3>{strings.instashop.process.uidesign.title}</h3>
      <p>{strings.instashop.process.uidesign.text1}</p>
      <img src={require(`../../../public/images/instashop-uikit.png`)} />
      <p>{strings.instashop.process.uidesign.text2}</p>
      <img src={require(`../../../public/images/instashop.png`)} />
      <h2>{strings.instashop.process.reflection.title}</h2>
      <p>{strings.instashop.process.reflection.text1}</p>
      <p>{strings.instashop.process.reflection.text2}</p>
      <p>{strings.instashop.process.reflection.text3}</p>
    </div>
  )
}

export default Instashop
