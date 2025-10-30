import React from 'react';
import { AiOutlineX } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


const FooterItem = () => {
    return (
        <footer className=" max-w-[1500px] mx-auto bg-neutral">
            
  <div className='footer sm:footer-horizontal  text-neutral-content p-10'>
    <nav>
    <h6 className="footer-title">CS — Ticket System</h6>
    <a className="link link-hover">A Customer Ticket System is a software platform designed to <br />log, track, prioritize, assign, and resolve customer support <br /> requests efficiently. Each support request submitted by a <br /> customer is converted into a “ticket,” which can then be <br />tracked throughout its fecycle until resolution.</a>
  </nav>
   <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex items-center gap-1"><AiOutlineX />
@CS — Ticket System</a>
    <a className="link link-hover flex items-center gap-1"><BiLogoLinkedinSquare />
@CS — Ticket System</a>
    <a className="link link-hover  flex items-center gap-1">< RiFacebookCircleFill />@CS — Ticket System</a>
    <a className="link link-hover flex items-center gap-1"><MdEmail />
support@cst.com</a>
  </nav>
  </div>
  <p className='text-white text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
</footer>
    );
};

export default FooterItem;