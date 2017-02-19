import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import './main.css'

function handleNewHash() {
  window.scrollTo(0,0)
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
  ReactDOM.render(<App location={location}/>, document.getElementById('root'))
}

handleNewHash()
window.addEventListener('hashchange', handleNewHash, false)


// ReactDOM.render(<App />, document.getElementById('root'))
