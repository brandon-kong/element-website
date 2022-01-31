import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

`

export const BrandContainer = styled.div`
    position: relative;
    left: 20px;
    cursor: pointer;
`

export const Logo = styled.img`
    max-height: 45px;
    user-select: none;
    image-rendering: crisp-edges;
    margin-right: ${props => props.right ? "10px" : "0px"};
`
export const Button = styled(Link)`
    padding: 8px 23px;
    text-decoration: none;
    background-color: #00a896;
    color: white;
    border-radius: 50px;
    font-size: 20px;
    position: relative;
    right: 20px;
    font-family: 'Sora', sans-serif;
    margin-right: 10px;
    box-sizing: border-box;
    transition: 0.2s;

    &:hover {
        background-color: white;
        color: #00a896;
        box-shadow:0px 0px 0px 1px #00a896 inset;
    }
`

export const NavContainer = styled.div`
    right: 10px;

    @media (max-width: 767px) {
        display: none;
    }
`

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
`

export const NavItem = styled.li`
    
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: rgb(120, 120, 120);
    text-align: center;
    position: relative;
    right: 20px;
    font-size: 20px;
    margin-right: 20px;
    font-family: 'Sora', sans-serif;

`

export const HamburgerContainer = styled.div`
    display: none;
    position: relative;
    right: 20px;

    @media (max-width: 767px) {
        display: block;
    }
`