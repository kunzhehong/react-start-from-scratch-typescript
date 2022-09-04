import { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { MyAppRoutes } from '../data/MyAppRoutes';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export function NavMenu(){

  const [collapsed, toggleCollapsed] = useState(true);
  let navitems = MyAppRoutes.map((item)=>
  <NavItem><NavLink tag={Link} className="text-dark" to={item.path}>{item.name}</NavLink></NavItem>)

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Project1</NavbarBrand>
            <NavbarToggler onClick={() => toggleCollapsed(collapsed => !collapsed)} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                {navitems}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
}
