import React from 'react'
import NextBtn from './NextBtn'
import styles from './portfolio.css'


const CaseWrapper = ({children, nextPage}) => {
  return (
    <div className='pure-g'>
      <div className={`pure-u-1 ${styles.portfolio}`}>
        {children}
        <NextBtn nextPage={nextPage}/>
      </div>
    </div>
  )
}

export default CaseWrapper
