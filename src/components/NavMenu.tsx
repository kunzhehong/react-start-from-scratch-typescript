import { useState } from 'react';
import { Collapse, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { MyAppRoutes } from '../data/MyAppRoutes';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export function NavMenu(){

  const [collapsed, toggleCollapsed] = useState(true);
  let navitems = MyAppRoutes.map((item, index)=>
  <NavItem key={index}><NavLink tag={Link} className="text-dark" to={item.path}>{item.name}</NavLink></NavItem>)

    return (
        <>
            <NavbarBrand tag={Link} to="/">Project1</NavbarBrand>
            <NavbarToggler onClick={() => toggleCollapsed(collapsed => !collapsed)} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                {navitems}
              </ul>
            </Collapse>
        </>     
    );
}
