import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './sidebar.css';
import { IoPerson } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';
import { IoCloudUpload } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { IoBook } from 'react-icons/io5';
import { IoImage } from 'react-icons/io5';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>MY SIDEBAR</h4>
      </div>
      <ul className="sidebar-menu">
      <li>
  <Link to="/" className="flexCenter">
    <IoHome color="black" size={25} />
    <span>  Home</span>
  </Link>
</li>

        <li>
        <li>
  <Link to="/profile" className="flexCenter">
    <IoPerson color="black" size={25} />
    <span>Profile</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/upload" className="flexCenter">
    <IoCloudUpload color="black" size={25} />
    <span>Upload a post</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/myPosts" className="flexCenter">
    <IoImage color="black" size={25} />
    <span>My Posts</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/contact" className="flexCenter">
    <IoCall color="black" size={25} />
    <span>Contact</span>
  </Link>
</li>

        </li>
        <li>
        <li>
  <Link to="/aboutUs" className="flexCenter">
    <IoBook color="black" size={25} />
    <span>About Us</span>
  </Link>
</li>

        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
