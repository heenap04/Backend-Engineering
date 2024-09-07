import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Medium</div>
      <nav className="nav">
        <a href="/">Our Story</a>
        <a href="/">Membership</a>
        <a href="/">Write</a>
        <a href="/">Sign in</a>
        <button className="get-started">Get started</button>
      </nav>
    </header>
  );
};

export default Header;
