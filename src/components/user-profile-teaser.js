import React from 'react';
import user from './../profile';

export default class UserProfileTeaser extends React.Component  {
  render() {
    return(
      <div className="user-profile-teaser">
        <img src={user.avatar} alt={user.username} className="user-profile-teaser__image" />
      </div>
    );
  }
}
