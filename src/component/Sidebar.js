import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './sidebar.css';
import { IoPerson } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';
import { IoCloudUpload } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { IoBook } from 'react-icons/io5';
import { IoImage } from 'react-icons/io5';
import toollogoImage from './images/upperlogo-toolconnects-removebg-preview.png'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <img src={toollogoImage} alt="" className="logo-img" />
      <p>TOOLCONNECTS</p>
      </div>
      <ul className="sidebar-menu">
      <li>
  <Link to="/" className="flexCenter">
    <IoHome color="rgb(16, 16, 165)" size={25} />
    <span className="sidebar-menu-text">  Home</span>
  </Link>
</li>

        <li>
        <li>
  <Link to="/profile" className="flexCenter">
    <IoPerson color="blue" size={25} />
    <span className="sidebar-menu-text">Profile</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/upload" className="flexCenter">
    <IoCloudUpload color="blue" size={25} />
    <span className="sidebar-menu-text">Share a Tool</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/myPosts" className="flexCenter">
    <IoImage color="blue" size={25} />
    <span className="sidebar-menu-text">My Shared Tool</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/contact" className="flexCenter">
    <IoCall color="blue" size={25} />
    <span className="sidebar-menu-text">Get in Touch</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/aboutUs" className="flexCenter">
    <IoBook color="blue" size={25} />
    <span className="sidebar-menu-text">About Us</span>
  </Link>
</li>

        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
