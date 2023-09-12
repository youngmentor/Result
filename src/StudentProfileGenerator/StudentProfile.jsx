// src/App.js
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './StudentPrifile.css'
function StudentProfile() {
  const [studentInfo, setStudentInfo] = useState({
    image: '', // Store the selected image as a data URL
    name: '',
    stack: '',
  });
  const [editMode, setEditMode] = useState(false);
  const profileRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setStudentInfo({ ...studentInfo, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const generateProfileImage = () => {
    html2canvas(profileRef.current).then((canvas) => {
      const imageURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = imageURL;
      a.download = studentInfo.name; // Set the filename
      a.click();
    });
  };

  return (
    <div className="App">
      <h1>Student Profile Generator</h1>
      <div className="profile-form">
        <label>
          Student Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={imageInputRef}
            style={{ display: 'none' }}
          />
          <button
            onClick={() => imageInputRef.current.click()}
            disabled={editMode}
          >
            Choose Image
          </button>
        </label>
        <label>
          Student Name:
          <input
            type="text"
            name="name"
            value={studentInfo.name}
            onChange={handleInputChange}
            disabled={editMode}
          />
        </label>
        <label>
          Student Stack:
          <input
            type="text"
            name="stack"
            value={studentInfo.stack}
            onChange={handleInputChange}
            disabled={editMode}
          />
        </label>
        <button onClick={toggleEditMode}>
          {editMode ? 'Save Changes' : 'Edit'}
        </button>
        <button onClick={generateProfileImage}>Generate Profile Image</button>
      </div>
      <div className="ProfilePreview" ref={profileRef}>
        <img src={studentInfo.image} className='StudentImagePreview' />
        <h2>{studentInfo.name}</h2>
        <p>Stack: {studentInfo.stack}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
