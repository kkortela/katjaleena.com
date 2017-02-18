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
    const page = location.pathname.slice(1)
    this.state = {page}
    this.setPage = this.setPage.bind(this)
  }
  setPage(page) {
    this.setState({page: page})
    const stateObj = {page: page}
    history.pushState(stateObj, 'Katja Kortelainen', page)
    window.scrollTo(0,0)
    console.log(this.state)
  }
  showPage(page) {
    console.log('showPage', page)
    switch (page) {
    case 'work':
      return (
        <div>
          <Work setPage={this.setPage}/>
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
            <Cases setPage={this.setPage}/>
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <Header setPage={this.setPage}/>
        {this.showPage(this.state.page)}
        <Footer/>
      </div>
    )
  }
}
