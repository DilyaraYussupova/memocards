import React, { Component } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
        <nav>
            <Link to="/">Home Page</Link>{' '}
            <Link to="/">Sign Up</Link>{' '}
            <Link to="/">Log In</Link>
        </nav>
      )
    }
  }
  
  export default NavBar;