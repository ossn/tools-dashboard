import React from 'react';
import SearchTool from './../components/search-tool';
import UserProfileTeaser from './../components/user-profile-teaser';
import mozillaLogo from './../images/Mozilla_logo.svg';


export default class NavigationBar extends React.Component  {

  render() {
    return (
        <div className="navigation-bar">
          <div className="navigation-bar__container">
            <div className="navigation-bar__logo-link">
              <a href="/" className="navigation-bar__logo-link" >
                  <img src={mozillaLogo} alt="mozilla" className="navigation-bar__logo"/>
                  <span className="navigation-bar__brand-text"> Tools Dashboard </span>
              </a>
          </div>
            <div className="navigation-bar__search">
              <SearchTool />
            </div>
            <div  className="navigation-bar__user-profile">
              <UserProfileTeaser />
            </div>
          </div>
        </div>
    );
  }
}
