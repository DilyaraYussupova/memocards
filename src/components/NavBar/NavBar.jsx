import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
      <div>
        <Link to='/' className='NavBar-logo'>MemoCard</Link>
        <Link to='/create' className='NavBar-link' ><span>📑</span>Create</Link>
        <Link to='/display' className='NavBar-link'>Your Study Sets</Link>
        <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      </div>
      :
      <div>
        <Link to='/' className='NavBar-logo'>MemoCard</Link>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        <Link to='/signup' className='NavBar-link'>SIGN UP </Link>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
};
  
export default NavBar;