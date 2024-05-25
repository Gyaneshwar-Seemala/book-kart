import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const slideOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  transition: top 0.3s;
  z-index: 999;
  top: ${props => (props.visible ? "0" : "-100px")};
  background-color: #dcf0fa;
`;

export const LogoDiv = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
  width: 100%;
  height: 100%;
  font-family: 'Outfit';
  font-weight: 800;
  font-size: 20px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  gap: 20px; /* Adds space between the nav links */
`;

export const NavLink = styled(Link)`
  font-family: 'Outfit';
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
  color: black;
  padding: 0 10px; /* Adds padding inside each nav link */
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
    transform-origin: top left;
  }

  &:hover:after {
    width: 100%;
    animation: ${slideIn} 0.3s forwards;
  }

  &:not(:hover):after {
    width: 100%;
    animation: ${slideOut} 0.3s forwards;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const ButtonsDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SignUpButton = styled(Link)`
  width: 125px;
  height: 50px;
  border-radius: 13px;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #525FE1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFCF59;
  }
`;
