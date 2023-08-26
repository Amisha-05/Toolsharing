import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './sidebar.css';
import { IoPerson } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>MY SIDEBAR</h4>
      </div>
      <ul className="sidebar-menu">
      <li>
          <div className="sidebar-item flexCenter">
            <IoPerson color="black" size={25} />
            <Link to="/profile">Profile</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/upload">Upload a Post</Link>
        </li>
        <li>
          <Link to="/your-posts">Your Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
