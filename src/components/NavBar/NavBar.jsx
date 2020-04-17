import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      {/* <Link to='/monster' className='NavBar-link'>Click here to check authentication!</Link> */}
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/add' className='NavBar-link'>Add a Monster</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/' className='NavBar-link'>My Academy</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/all' className='NavBar-link'>See All Monsters</Link>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>Login</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign up</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/add' className='NavBar-link'>Add a Monster</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/' className='NavBar-link'>My Academy</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/all' className='NavBar-link'>See All Monsters</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
