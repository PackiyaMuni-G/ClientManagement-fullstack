import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); // Toggle the state of isOpen
    };

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={toggle} /> {/* Calls toggle when clicked */}
            <Collapse isOpen={isOpen} navbar>
                {/* Add your Navbar items here */}
            </Collapse>
        </Navbar>
    );
};

export default AppNavbar;
