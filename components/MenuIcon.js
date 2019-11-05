import React from "react";
import styled from "styled-components";

const MightyMorphinMenuIcon = styled.div`
  height: auto;
  width: auto;
  position: relative;
  .icon {
    background-color: white;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    &.hamburger {
      width: 1.5rem;
      height: 0.25rem;
      transition: transform 250ms ease-in-out;
      transform: rotate(0);
      position: absolute;
      border-radius: 0.3rem;
      &:before,
      &:after {
        border-radius: 0.3rem;
        transform: rotate(0);
        content: "";
        width: 1.5rem;
        height: 0.25rem;
        background-color: white;
        position: absolute;
        left: 0;
      }
      &:before {
        top: -0.5rem;
        transition: top 250ms ease-in-out, transform 250ms ease-in-out;
      }
      &:after {
        bottom: -0.5rem;
        transition: bottom 250ms ease-in-out, transform 250ms ease-in-out;
      }
    }
    &.times {
      width: 1.5rem;
      height: 0.25rem;
      transform: rotate(-45deg);
      transition: transform 250ms ease-in-out;
      position: absolute;
      border-radius: 0.3rem;
      &:before,
      &:after {
        border-radius: 0.3rem;
        transform: rotate(90deg);
        content: "";
        width: 1.5rem;
        height: 0.25rem;
        background-color: white;
        position: absolute;
        left: 0;
      }
      &:before {
        top: 0;
        transition: top 200ms ease-in-out, transform 250ms ease-in-out;
      }
      &:after {
        bottom: 0;
        transition: bottom 200ms ease-in-out, transform 250ms ease-in-out;
      }
    }
  }
`;

const MenuIcon = ({ menuIsOpen }) => {
  return (
    <MightyMorphinMenuIcon>
      <span className={`icon ${menuIsOpen ? "times" : "hamburger"}`} />
    </MightyMorphinMenuIcon>
  );
};

export default MenuIcon;
