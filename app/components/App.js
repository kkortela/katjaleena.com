import React from 'react'
import Header from './Header'
import Cover from './Cover'
import Cases from './Cases'
import Footer from './Footer'
import Work from './Work'
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
    console.log(this.state)
  }
  showPage(page) {
    console.log('showPage', page)
    switch (page) {
    case 'work':
      return (
        <div>
          <Work/>
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
        <Header setPage={this.setPage}/>
        {this.showPage(this.state.page)}
        <Footer/>
      </div>
    )
  }
}
