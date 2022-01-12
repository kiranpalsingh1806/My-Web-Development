import React, { useState } from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkEntended } from '../styles/Navbar.style';
import LogoImage from "../assets/logo.png"


const Navbar = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);

    return <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/products">Products</NavbarLink>
                    <NavbarLink to="/contact">Contact</NavbarLink>
                    <NavbarLink to="/about">About Us</NavbarLink>
                    <OpenLinksButton onClick={() => {
                        setExtendNavbar((curr) => !curr);
                    }}>
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinksButton>
                </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
                <Logo src={LogoImage}>

                </Logo>
            </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar &&
            <NavbarExtendedContainer>
                <NavbarLinkEntended to="/">Home</NavbarLinkEntended>
                <NavbarLinkEntended to="/products">Products</NavbarLinkEntended>
                <NavbarLinkEntended to="/contact">Contact</NavbarLinkEntended>
                <NavbarLinkEntended to="/about">About Us</NavbarLinkEntended>
            </NavbarExtendedContainer>
        }
    </NavbarContainer>
}

export default Navbar;
