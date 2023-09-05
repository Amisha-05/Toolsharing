import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import '../Home/style.css';

const UploadItems = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [charge, setCharge] = useState('');

  const handleUpload = () => {
    // Implement the logic to handle the file upload
  };

  return (
    <div className="upload-page">
      <Sidebar />
      <div className="upload-content">
    
        <div className="bhashan"><p>"Got Extra Tools? Share the Love!"</p></div>
        <form className="upload-form">
        <label>Item Name:</label>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />

          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Duration:</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />

          <label>Charge:</label>
          <input type="text" value={charge} onChange={(e) => setCharge(e.target.value)} />

          <label>Upload Item:</label>
          <input type="file" accept="image/*" />

          <button  className="uploadbutton"onClick={handleUpload}>Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadItems;
