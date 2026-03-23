import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const NavBar = () => {
    const [open,setOpen]=useState(false);
    const links= navLinks.map(route=><Link route={route}></Link>);
    return (
        <nav className='flex justify-between mx-10 my-6'>
        <span onClick={()=>setOpen(!open)} className='flex gap-3'>
            {
                open ? <X></X> : <Menu className='md:hidden'></Menu>
            }
           <ul className={`md:hidden absolute bg-amber-200 text-black ${open ? "top-12" : "-top-40"}`}>
             {
                links
            }
           </ul>
            
            <h3> My NavBar </h3>
        </span>
        <ul className='md:flex gap-7 hidden'>
            {links}
        </ul>



            {/* way 1 -Fixed Nav Bar */}
        {/* <ul className='flex gap-7'>
          <li cla><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul> */}

        <button className='btn btn-base'>Sign In</button>
        </nav>
    );
};

export default NavBar;