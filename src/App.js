import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchPage from './Common/SearchPage.js';
import HomePage from './Common/HomePage.js';
import Header from './Common/Header.js'

//Step 1: Create routing to home and search page, copy past this ish
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* Header points to home and search, should be under router and above switch */}
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
