import React from 'react';
import SearchTool from './../components/search-tool';
import {Navbar, Nav, NavItem} from 'react-bootstrap'


export default class NavigationBar extends React.Component  {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
                MOZILLA LOGO
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
