import React from 'react';
import SearchTool from './../components/search-tool';
import UserProfileTeaser from './../components/user-profile-teaser';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import mozillaLogo from './../images/Mozilla_logo.svg';


export default class NavigationBar extends React.Component  {

  render() {
    return (
      <Navbar collapseOnSelect className="navigation-bar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="navigation-bar__logo-link" >
                <img src={mozillaLogo} alt="mozilla" className="navigation-bar__logo"/>
                <span className="navigation-bar__brand-text"> Tools Dashboard </span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <SearchTool />
            </NavItem>
            <NavItem eventKey={2} href="#">
              <UserProfileTeaser />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
