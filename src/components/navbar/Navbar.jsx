import React from 'react';


const Navbar = () => {
    return (
        
   <div className="navbar  bg-base-100 justify-between items-center shadow-sm max-w-[1500px] mx-auto px-10">
  <div className="">
    
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="flex items-center">
    <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="">
    <a className="btn bg-gradient-to-r from-[#422AD5] to-[#9F62F2] shadow-md text-white"><span>+</span>New Ticket</a>
  </div>
  </div>
</div>
    
    );
};

export default Navbar;