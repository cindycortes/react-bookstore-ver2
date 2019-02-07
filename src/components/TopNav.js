import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';


const TopNav = (props) => {
  
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BookStore</NavbarBrand>
        </Navbar>  
    )
  
}

export default TopNav;

