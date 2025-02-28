import React, { useState } from 'react';
import { User, Mail, Lock, Save } from 'lucide-react';

interface ProfileData {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password validation
    if (profileData.newPassword) {
      if (profileData.newPassword !== profileData.confirmPassword) {
        setMessage({ text: 'New passwords do not match', type: 'error' });
        return;
      }
      
      if (profileData.currentPassword === '') {
        setMessage({ text: 'Current password is required', type: 'error' });
        return;
      }
    }
    
    // Success message
    setMessage({ text: 'Profile updated successfully', type: 'success' });
    setIsEditing(false);
    
    // Reset password fields
    setProfileData({
      ...profileData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  return (
    <div>
      <h1 className="greeting">Your Profile</h1>
      
      <div className="card">
        <div className="profile-header">
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
            alt="Profile" 
            className="profile-picture" 
          />
          <div className="profile-info">
            <h2>{profileData.name}</h2>
            <p>{profileData.email}</p>
          </div>
        </div>
        
        {message.text && (
          <div 
            style={{ 
              padding: '10px 15px', 
              borderRadius: '5px', 
              marginBottom: '20px',
              backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
              color: message.type === 'success' ? '#155724' : '#721c24',
            }}
          >
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              <User size={16} style={{ marginRight: '8px' }} />
              Full Name
            </label>
            <input 
              type="text" 
              name="name" 
              className="form-control"
              value={profileData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">
              <Mail size={16} style={{ marginRight: '8px' }} />
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              className="form-control"
              value={profileData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          
          {isEditing && (
            <>
              <h3 style={{ margin: '30px 0 20px', fontSize: '1.2rem' }}>Change Password</h3>
              
              <div className="form-group">
                <label className="form-label">
                  <Lock size={16} style={{ marginRight: '8px' }} />
                  Current Password
                </label>
                <input 
                  type="password" 
                  name="currentPassword" 
                  className="form-control"
                  value={profileData.currentPassword}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  <Lock size={16} style={{ marginRight: '8px' }} />
                  New Password
                </label>
                <input 
                  type="password" 
                  name="newPassword" 
                  className="form-control"
                  value={profileData.newPassword}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  <Lock size={16} style={{ marginRight: '8px' }} />
                  Confirm New Password
                </label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  className="form-control"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          
          <div style={{ marginTop: '30px' }}>
            {isEditing ? (
              <>
                <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>
                  <Save size={16} style={{ marginRight: '8px' }} />
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="btn" 
                  onClick={() => {
                    setIsEditing(false);
                    setProfileData({
                      ...profileData,
                      currentPassword: '',
                      newPassword: '',
                      confirmPassword: '',
                    });
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;