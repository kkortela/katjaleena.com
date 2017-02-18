import React from 'react'
import styles from './portfolio.css'
import { images } from '../../config'
import { urlPaths } from '../../config'
import strings from '../../strings'

const nextBtn = ({setPage, nextPage}) => {
  return (
      <button onClick={setPage.bind(undefined, urlPaths.cases[nextPage])}>NEXT</button>
  )
}

export default nextBtn
