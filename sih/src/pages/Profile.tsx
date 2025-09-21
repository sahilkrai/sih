import React from "react";
import { useEffect, useState } from "react";
import { FaUser, FaEdit, FaSave } from "react-icons/fa";
import "../styles/Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Farmer Ramesh",
    phone: "+91 9876543210",
    language: "English",
    location: "Maharashtra, India",
    crops: "Wheat, Rice, Cotton"
  });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("krishiSahaay.profile");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUserData((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.warn("Failed to parse stored profile", e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // When saving, exit edit mode and persist changes
    setIsEditing(false);
    try {
      localStorage.setItem("krishiSahaay.profile", JSON.stringify(userData));
    } catch (e) {
      console.warn("Failed to save profile", e);
    }
  };

  const toggleEditing = () => setIsEditing((prev) => !prev);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <button
          type="button"
          className="edit-toggle"
          onClick={isEditing ? handleSubmit : toggleEditing}
          aria-label={isEditing ? "Save profile" : "Edit profile"}
          title={isEditing ? "Save profile" : "Edit profile"}
        >
          {isEditing ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      <div className="profile-avatar">
        <div className="avatar-circle">
          <FaUser />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name
            <div className="input-with-icon">
              <input 
                type="text" 
                name="name"
                value={userData.name} 
                onChange={handleChange}
                disabled={!isEditing} 
                placeholder="Enter your name"
              />
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Phone
            <div className="input-with-icon">
              <input 
                type="text" 
                name="phone"
                value={userData.phone} 
                onChange={handleChange}
                disabled={!isEditing} 
                placeholder="Enter your phone number"
              />
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Preferred Language
            <div className="input-with-icon">
              <select 
                name="language"
                value={userData.language} 
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option>English</option>
                <option>हिन्दी</option>
                <option>मराठी</option>
                <option>ਪੰਜਾਬੀ</option>
                <option>ગુજરાતી</option>
              </select>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Location
            <div className="input-with-icon">
              <input 
                type="text" 
                name="location"
                value={userData.location} 
                onChange={handleChange}
                disabled={!isEditing} 
                placeholder="Enter your location"
              />
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Crops Grown
            <div className="input-with-icon">
              <input 
                type="text" 
                name="crops"
                value={userData.crops} 
                onChange={handleChange}
                disabled={!isEditing} 
                placeholder="Enter crops you grow"
              />
            </div>
          </label>
        </div>
        {isEditing && (
          <button type="submit" className="save-button">
            <FaSave /> Save Changes
          </button>
        )}
      </form>
    </div>
  );
}

export default Profile;
