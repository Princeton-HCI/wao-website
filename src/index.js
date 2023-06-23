import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './style.css'
import Home from './views/home'
import Thanks from './views/thanks'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Thanks} exact path="/thanks" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
