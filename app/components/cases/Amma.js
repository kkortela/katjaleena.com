import React from 'react'
import styles from './portfolio.css'
import strings from '../../strings'

const Amma = () => {
  return (
    <div className={`${styles.instashop}`}>
      <h1>{strings.amma.title}</h1>
      <img src={require(`../../../public/images/amma-cover.jpg`)} />
      <h2>{strings.amma.summary.title}</h2>
      <p>{strings.amma.summary.text1}</p>
      <p>{strings.amma.summary.text2}</p>
      <h2>{strings.amma.process.title}</h2>
      <h3>{strings.amma.process.research.title}</h3>
      <p>{strings.amma.process.research.text}</p>
      <h3>{strings.amma.process.strategy.title}</h3>
      <img src={require(`../../../public/images/amma-persona.png`)} />
      <p>{strings.amma.process.strategy.caption1}</p>
      <p>{strings.amma.process.strategy.text1}</p>
      <p>{strings.amma.process.strategy.text2}</p>
      <img src={require(`../../../public/images/amma-userflows.png`)} />
      <p>{strings.amma.process.strategy.caption2}</p>
      <h3>{strings.amma.process.ixda.title}</h3>
      <p>{strings.amma.process.ixda.text1}</p>
      <img src={require(`../../../public/images/amma-sketches.jpg`)} />
      <p>{strings.amma.process.ixda.caption1}</p>
      <img src={require(`../../../public/images/amma-wireframes.png`)} />
      <p>{strings.amma.process.ixda.caption2}</p>
      <p>{strings.amma.process.ixda.text2}</p>
      <p>{strings.amma.process.ixda.text3}</p>
      <h3>{strings.amma.process.uidesign.title}</h3>
      <p>{strings.amma.process.uidesign.text1}</p>
      <img src={require(`../../../public/images/amma-styleguide.png`)} />
      <p>{strings.amma.process.uidesign.text2}</p>
      <img src={require(`../../../public/images/amma-keyscreens.png`)} />
      <h2>{strings.amma.process.reflection.title}</h2>
      <p>{strings.amma.process.reflection.text1}</p>
      <p>{strings.amma.process.reflection.text2}</p>
    </div>
  )
}

export default Amma
