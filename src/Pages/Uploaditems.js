import React, { useState, useRef } from 'react';
import Sidebar from '../component/Sidebar';
import '../Home/style.css';

const UploadItems = () => {
  const [itemNameInput, setItemNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [durationInput, setDurationInput] = useState('');
  const [chargeInput, setChargeInput] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (file) => {
    if (file) {
      console.log(`Uploaded file: ${file.name}`);
      setUploadedFile(file);
    }
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleUpload(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropAreaRef.current.classList.add('active');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropAreaRef.current.classList.remove('active');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropAreaRef.current.classList.remove('active');
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleUpload(droppedFile);
    }
  };

  const openFileExplorer = () => {
    fileInputRef.current.click();
  };

  const removeUploadedFile = () => {
    setUploadedFile(null);
  };

  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null);

  return (
    <div className="upload-page">
      <Sidebar />
      <div className="upload-content">
      <div className="extra-tool-text">
          <h2>Have an extra tool? Share the love!</h2>
        </div>
        <form className="upload-form">
          <label className='titlename'>Item Name:</label>
          <input
            type="text"
            value={itemNameInput}
            onChange={(e) => setItemNameInput(e.target.value)}
          />
          <label className='titlename'>Description</label>
          <input
            type="text"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
         <label className='titlename'>Charges (₹):</label>
<input
  type="text"
  value={chargeInput}
  onChange={(e) => setChargeInput(e.target.value)}
  placeholder="₹"
/>
<label className='titlename'>Duration (days):</label>
<input
  type="text"
  value={durationInput}
  onChange={(e) => setDurationInput(e.target.value)}
  placeholder="days"
/>

          <button className="uploadbutton" onClick={() => handleUpload()}>Upload</button>
        </form>
      </div>
      <div
        className="drag-area"
        ref={dropAreaRef}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <button onClick={openFileExplorer}>Browse File</button>
        {uploadedFile && (
          <div className="uploaded-file">
            <p>Uploaded File:</p>
            <p>{uploadedFile.name}</p>
            <button className="remove-button" onClick={removeUploadedFile}>Remove</button>
          </div>
        )}
        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={(e) => handleFileInput(e)}
        />
      </div>
    </div>
  );
};

export default UploadItems;
