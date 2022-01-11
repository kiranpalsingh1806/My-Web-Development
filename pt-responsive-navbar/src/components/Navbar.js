import React from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo } from '../styles/Navbar.style';
import LogoImage from "../assets/logo.png"


const Navbar = () => {
    return <NavbarContainer>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/products">Products</NavbarLink>
                    <NavbarLink to="/contact">Contact</NavbarLink>
                    <NavbarLink to="/about">About Us</NavbarLink>
                </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
                <Logo src={LogoImage}>

                </Logo>
            </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer>

        </NavbarExtendedContainer>
    </NavbarContainer>
}

export default Navbar;
