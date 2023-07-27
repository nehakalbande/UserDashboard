import React, { useState } from 'react';
import './App.css';
import { usersData } from './userData';
import ProfileDropdown from './ProfileDropdown';
import PostDetails from './PostDetails';
import Gallery from './Gallery';
import ToDo from './ToDo';

function LandingPage({ users, onUserSelect }) {
  return (
    <div className="landing-page">
    <h2>Choose an Account</h2>
    <div className="user-list">
      {users.map((user) => (
        <div className="user-item" key={user.id} onClick={() => onUserSelect(user)}>
          <img src={user.profilepicture} alt={user.name} />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

function ProfileDetails({ user }) {
return (
    <div className="profile-details">
      <div className="left-details">
      <div className="profile-image">
          <img src={user.profilepicture} alt={user.name} />
        </div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <ul></ul>
      <h5>Company</h5>
      <p>name: {user.company.name}</p>
      <p>catchPhrase: {user.company.catchPhrase}</p>
      <p>bs: {user.company.bs}</p>
  
      </div>
      <div className="right-details">
        <h5>Address</h5>
        <p>{user.address.street},</p>
        <p>{user.address.suite}</p>
        <p>{user.address.city} - {user.address.zipcode}</p>
      </div>
    </div>
  );
}

function HomePage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setActiveTab('profile');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSignOut = () => {
    setSelectedUser(null);
  };

  return (
    <div className="home-page">
      {selectedUser ? (
        <>
          <div className="profile-dropdown-container">
            <ProfileDropdown loggedInUser={selectedUser} onSignOut={handleSignOut} />
          </div>
          <div className="tab-container">
            <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => handleTabChange('profile')}>
              Profile
            </button>
            <button className={activeTab === 'post' ? 'active' : ''} onClick={() => handleTabChange('post')}>
              Posts
            </button>
            <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => handleTabChange('gallery')}>
              Gallery
            </button>
            <button className={activeTab === 'todo' ? 'active' : ''} onClick={() => handleTabChange('todo')}>
              ToDo
            </button>
          </div>
          {activeTab === 'profile' && <ProfileDetails user={selectedUser} />} 
          {activeTab === 'post' && <PostDetails />}
          {activeTab === 'gallery' && <Gallery />}
          {activeTab === 'todo' && <ToDo />}
        </>
      ) : (
        <LandingPage users={usersData.users} onUserSelect={handleUserSelect} />
      )}
    </div>
  );
}



function App() {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
