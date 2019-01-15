import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import RandomCats from './components/RandomCats';
import HatCats from './components/HatCats';
import SpaceCats from './components/SpaceCats';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/cats" component={RandomCats} exact />
            <Route path="/cats/hats" component={HatCats} exact />
            <Route path="/cats/space" component={SpaceCats} exact />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
