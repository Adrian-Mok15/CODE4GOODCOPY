import styled from 'styled-components';
import React from 'react'
import { routes } from './constant';
import { useState } from 'react';
import {Link as LinkRS} from "react-scroll"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu"

const Navbar = ({ toggleDrawer, routes }) => {
    return (
        <SNavbar>
            <NavContainer>
                <DrawerButton onClick={toggleDrawer}>
                    <FaBars />
                </DrawerButton>
                <RightNav>
                    <NavRoutes>
                        {routes.map((route) => {
                            if (route.name === 'About') {
                                return (
                                    <LinkRS to="about" spy={true} smooth={true} offset={50}>
                                        <NavRoute to={route.link} key={route.name}>
                                            {route.name}
                                        </NavRoute>
                                    </LinkRS>
                                )
                            }
                            if (route.name === 'Contact') {
                                return (
                                    <LinkRS to="contactform" spy={true} smooth={true} offset={2}>
                                        <NavRoute to={route.link} key={route.name}>
                                            {route.name}
                                        </NavRoute>
                                    </LinkRS>
                                )
                            }
                            return (
                                <NavRoute to={route.link} key={route.name}>
                                    {route.name}
                                </NavRoute>
                            );
                        })}
                    </NavRoutes>
                </RightNav>
            </NavContainer>
        </SNavbar>
    )
}

export default Navbar;

const DrawerButton = styled.button`
    all: unset;
    font-size: 1.7rem;
    display: grid;
    @media (min-width: 768px) {
        display: none;
    }
`


const SNavbar = styled.nav`
    background-color: #ba9d79;
    margin-bottom: 0px;
    
`
const NavContainer = styled.div`
    padding: 1rem;
    height: 70px;
    align-items: center;
    color: white;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
const SNavbarBrand = styled.h2`
    font-size: 1rem;
    align-items: center;
    display: inline-flex;
    opacity: 1;
    &:hover {
        transition: 0.3s ease;
        opacity: 0.8;
    }
`
const RightNav = styled.div`
    display: flex;
`
const NavRoutes = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 1rem;
    align-items: center;
    margin-right: rem;
    @media (max-width: 768px) {
        display: none;
    }
`
const NavRoute = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.4rem;
    border-radius: 3rem;
    transition: 0.3s ease;
    &:hover {
        transition: 0.3s ease;
        color: #000;
        background-color: white;
    }
`

const LoginButton = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    background-color: #2f4e92;
    border: 1px solid black;
    border-radius: 3rem;
    &:hover {
        transition: 0.3s ease;
        border: 1px solid transparent;
        background-color: #83a0df;
    }
`


const UserButton = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    font-weight: 550;
    background-color: transparent;
    border-radius: 3rem;
    border: 1px solid transparent;
`