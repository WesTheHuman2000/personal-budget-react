import React from 'react';
import {
    Link
  } from 'react-router-dom'

function Menu() {
  return (
    <nav className="menu">
        <ul>
            <li><Link to ="/">Homepage</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/login">Login</Link></li>
            <li><Link to ="/budget">Budget</Link></li>
            <li><Link to ="/D3Budget">D3Budget</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
