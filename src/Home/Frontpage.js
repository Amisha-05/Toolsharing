import React, { useState } from 'react';
import './style.css';
import Menu from "./toolsApi";
import MenuCrd from "./menuCrd";
import Sidebar from "../component/Sidebar"; // Import your Sidebar component

const Frontpage = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchQuery(searchText);
   
    const filteredMenu = Menu.filter((item) =>
      item.Name.toLowerCase().includes(searchText)
    );
    setMenuData(filteredMenu);
  };

  return (
    <div className="frontpage-container">
      <Sidebar /> {/* Add your Sidebar component */}
     
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
        <div className="items">
          <MenuCrd menuData={menuData} />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
