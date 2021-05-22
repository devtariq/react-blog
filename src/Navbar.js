import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar clearfix">
      <h2>DOJO BLOG</h2>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/create" style={{color: "gold"}}>New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
