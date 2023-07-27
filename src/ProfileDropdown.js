import React from 'react';
import './ProfileDropdown.css';
import { usersData } from './userData';

function ProfileDropdown({ loggedInUser, onSignOut }) {
  const otherUsers = usersData.users.filter((user) => user.id !== loggedInUser.id);

  return (
    <div className="profile-dropdown">
      <div className="user-profile">
        <img src={loggedInUser.profilepicture} alt={loggedInUser.name} />
        <div className="user-details">
          <h4>{loggedInUser.name}</h4>
          <p>{loggedInUser.username}</p>
        </div>
      </div>
      <div className="other-users">
        {otherUsers.map((user) => (
          <div className="other-user" key={user.id}>
            <img src={user.profilepicture} alt={user.name} />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
      <button className="signout-btn" onClick={onSignOut}>Sign Out</button>
    </div>
  );
}

export default ProfileDropdown;

