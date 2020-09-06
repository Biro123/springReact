import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Home from './components/Home';
import GroupList from './components/GroupList';
import GroupEdit from './components/GroupEdit';

import './App.css';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/groups' exact={true} component={GroupList} />
            <Route path='/groups/:id' component={GroupEdit} />
          </Switch>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;
