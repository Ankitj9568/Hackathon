import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Contact1 from './views/contact1'
import Toleadthewayinroadtransportnetworkmanagementbyusin from './views/toleadthewayinroadtransportnetworkmanagementbyusin'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route component={Contact1} exact path="/contact1" />
        <Route
          component={Toleadthewayinroadtransportnetworkmanagementbyusin}
          exact
          path="/"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
