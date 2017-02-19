import React from 'react'
import Header from './Header'
import Cover from './Cover'
import Cases from './Cases'
import Footer from './Footer'
import Work from './Work'
import Amma from './cases/Amma'
import DignityMeals from './cases/DignityMeals'
import Instashop from './cases/Instashop'
import WeddingWebsite from './cases/WeddingWebsite'
import About from './About'
import strings from '../strings'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const page = this.props.location[0]
  }
  showPage(page) {
    switch (page) {
    case 'work':
      return (
        <div>
          <Work/>
        </div>
      )
    case 'amma':
      return (
        <div>
          <Amma/>
        </div>
      )
    case 'dignity-meals':
      return (
        <div>
          <DignityMeals/>
        </div>
      )
    case 'instashop':
      return (
        <div>
          <Instashop/>
        </div>
      )
    case 'wedding-website':
      return (
        <div>
          <WeddingWebsite/>
        </div>
      )
    case 'about':
      return (
        <div>
          <About strings={strings.about}/>
        </div>
      )
    default:
      return (
          <div>
            <Cover/>
            <Cases/>
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <Header/>
        {this.showPage(this.props.location[0])}
        <Footer/>
      </div>
    )
  }
}
