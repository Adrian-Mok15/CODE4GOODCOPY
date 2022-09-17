import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import ExpandMenu from './ExpandMenu';


const Drawer = ({isOpen, toggleDrawer, routes}) => {

  return (
    <>
    {isOpen && <Backdrop onClick={toggleDrawer}/>}
    <SDrawer isOpen={isOpen}>
        <RightNav>
            <NavRoutes>
                {routes.map((route)=> {
                    if (route.subRoutes){
                        return <ExpandMenu route={route} key={route.name}/>
                    }
                    return (
                    <NavRoute onClick={toggleDrawer} to={route.link} key={route.name}>
                        {route.name}
                    </NavRoute>
                    );
                })}
            </NavRoutes>
        </RightNav>
    </SDrawer>
    </>
  )
}

export default Drawer;

const SNavbarBrand = styled.h2`
    font-size: 1.3rem;
    align-items: center;
    display: inline-flex;
`

const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    z-index; 100;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    background-color: rgba(0,0,0,0.2);

`
const SDrawer = styled.div`
    z-index: 150;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 60%;
    background-color: #0d1026;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: 0.3s ease;
`

const RightNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
`
const NavRoutes = styled.div`

`
const NavRoute = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
    &:hover {
        color: #2f4e92;
    }
`

const LoginButton = styled.button`
    font-family: 'Poppins', sans-serif;
    color: #fff;
    padding: 0.7rem 1.4rem;
    background-color: #2f4e92;
    border: 1px solid #2f4e92;
    border-radius: 3rem;
    align-self: flex-start;
    &:hover {
        transition: 0.3s ease;
        border: 1px solid transparent;
        background-color: #83a0df;
        box-shadow: 0px 0px 10px #83a0df;
    }
`
