// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";

import MenuIcon from "../components/MenuIcon";

const StyledNav = styled.nav`
  .navbar {
    box-sizing: border-box;
    background-color: ${p => p.theme.lightgreen};
    color: ${p => p.theme.white};
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    &.active .items {
      right: 0;
    }
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: none;
    }
  }
  .site-name {
    font-family: Merriweather;
    font-size: 1.7rem;
    width: 100%;
    text-align: center;
    @media (min-width: 900px) {
      font-size: 2rem;
    }
  }
  .item {
    .link {
      width: 100%;
      display: inline-block;
      font-size: 1.5rem;
      background-color: ${p => p.theme.red};
      text-align: center;
      white-space: nowrap;
      padding: 1.5rem 0;
      &:hover {
        cursor: pointer;
        background-color: ${p => p.theme.lightred};
      }
    }
  }
  .items {
    width: 100%;
    order: 2;
    position: absolute;
    top: 5rem;
    right: -100vw;
    transition: right 400ms ease-in-out;
    @media (min-width: 900px) {
      max-width: 40vw;
    }
  }
  .toggle {
    padding: 1rem 2rem;
    order: 1;
    position: absolute;
    right: 0;
    z-index: 11;
    button {
      font-size: 1.7rem;
      color: ${p => p.theme.white};
      padding: 0;
      margin: 0;
      background: none;
      border: none;
      outline: none;
      height: 2rem;
      width: 2rem;
      &:active {
        outline: none;
      }
      &:focus {
        outline: none;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const NavItem = ({ text, href }) => (
  <li className="item">
    <Link href={href}>
      <a className="item link">{text}</a>
    </Link>
  </li>
);

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  useEffect(() => {
    const handleRouteChange = () => {
      if (menuIsOpen) toggleMenu();
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [menuIsOpen]);
  return (
    <StyledNav>
      <ul className={`navbar${menuIsOpen ? " active" : ""}`}>
        <li className="site-name">
          <Link href="/">
            <a>Pilcher Holidays</a>
          </Link>
        </li>
        <li className="items">
          <ul>
            <NavItem text="Home" href="/" />
            <NavItem text="Lists" href="/" />
            <NavItem text="Me" href="/" />
          </ul>
        </li>
        <li className="toggle">
          <button onClick={toggleMenu}>
            <MenuIcon menuIsOpen={menuIsOpen} />
          </button>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
