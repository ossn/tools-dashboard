import React from 'react';
import SearchTool from './../components/search-tool';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import mozillaLogo from './../images/Mozilla_logo.svg';


export default class NavigationBar extends React.Component  {

  render() {
    return (
      <Navbar collapseOnSelect className="navigation-bar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand" className="navigation-bar__logo-link" >
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
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
