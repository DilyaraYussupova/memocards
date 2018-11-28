import React, { Component } from 'react';
import './App.css';
import Home from './components/HomePage/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <div className="Home">
              <NavBar/>
              <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
