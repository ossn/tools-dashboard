import React from 'react';
import SearchTool from './../components/search-tool';
import osssnLogo from './../images/ossn_logo.png';


export default class NavigationBar extends React.Component  {

  render() {
    return (
        <div className="navigation-bar">
          <div className="navigation-bar__container">
            <div className="navigation-bar__logo-link">
              <a href="/" className="navigation-bar__logo-link" >
                  <img src={osssnLogo} alt="mozilla" className="navigation-bar__logo"/>
                  <span className="navigation-bar__brand-text"> Tools Dashboard </span>
              </a>
          </div>
            <div className="navigation-bar__search">
              <SearchTool
                updateSearch={(event)=>this.props.updateSearch(event)}
                searchString={this.props.searchString}
              />
            </div>
          </div>
        </div>
    );
  }
}
