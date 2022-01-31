import React, { Component, useState } from 'react';
import styled from "styled-components"
import { Container, BrandContainer, Logo, Button, NavContainer, NavList, NavItem, NavLink, HamburgerContainer } from './components.jsx'
import { Link } from 'react-router-dom'

import { Slant as Hamburger } from 'hamburger-react'

import LogoImg from '../../imgs/logo.png'
import LogoWorld from '../../imgs/logo-world.png'

import NavbarDropdown from "react-navbar-dropdown"

function Navbar() {
    const [toggled, toggle] = useState(false)
    return (
        <Container>
            <BrandContainer>
                <Logo src={LogoWorld} right="5px"/>
                <Logo src={LogoImg}/>
            </BrandContainer>

            <NavContainer>
                <NavList>
                    <NavItem>
                       <NavLink to="/" id="home" >Home</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink to="/about" id="about" >About</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink to="/services" id="services" >Services</NavLink>
                    </NavItem>

                    <Button to="/signup" id="signup" >Sign Up</Button>
                </NavList>
            </NavContainer>

            

            <HamburgerContainer>
                <Hamburger size={30} toggled={toggled} toggle={toggle}>
                </Hamburger>
            </HamburgerContainer>
            

            
        </Container>
    )
}

export default Navbar