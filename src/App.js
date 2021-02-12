import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchPage from './Common/SearchPage.js';
import HomePage from './Common/HomePage.js';
import Header from './Common/Header.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Header />
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
