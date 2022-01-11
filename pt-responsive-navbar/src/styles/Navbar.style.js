import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    flex-direction: column;
`

export const LeftContainer = styled.nav`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    /* background-color: red; */
`

export const RightContainer = styled.nav`
    flex : 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    /* background-color: salmon; */
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;

`;

export const NavbarLink = styled(Link)`
    color : white;
    font-size : x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`


export const NavbarExtendedContainer = styled.nav`

`;