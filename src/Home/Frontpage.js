import React, { useState } from 'react';
import './style.css';
import Menu from "./toolsApi";
import MenuCrd from "./menuCrd";
import Sidebar from "../component/Sidebar"; // Import your Sidebar component

const UniqueList = [...new Set(Menu.map((curElem) => curElem.category)), "ALL"];

const Frontpage = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); // State for suggestions

  const handleSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchQuery(searchText); // Update searchQuery state

    // Filter suggestions based on search query
    const filteredSuggestions = Menu.filter((item) =>
      item.Name.toLowerCase().includes(searchText)
    );
    setSuggestions(filteredSuggestions);
    
    // Filter menu data based on search query
    const filteredMenu = Menu.filter((item) =>
      item.Name.toLowerCase().includes(searchText)
    );
    setMenuData(filteredMenu);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.Name); // Set the clicked suggestion as the search query
    setSuggestions([]); // Clear suggestions
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
        <div className="suggestions">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="suggestion"
              onClick={() => handleSuggestionClick(item)}
            >
              {item.Name}
            </div>
          ))}
        </div>
        <div className="items">
          <MenuCrd menuData={menuData} />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
