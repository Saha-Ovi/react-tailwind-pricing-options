import React from 'react';

const NavBar = () => {
    return (
        <nav>
        <ul className='flex gap-7'>
          <li cla><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
        </nav>
    );
};

export default NavBar;