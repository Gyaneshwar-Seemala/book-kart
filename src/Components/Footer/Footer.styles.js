import { Link } from "react-router-dom";
import styled,{keyframes} from "styled-components";
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  overflow:hidden;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  background-color:#111538;
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 35%;
  align-items: flex-start;
  justify-content: flex-start;
  height:100%;
  font-family: 'Outfit';
  font-size: 26px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  color:white;
  width: 100px;
  border-right: 1px solid white;`;


export const SocialMedia=styled.div`
display:flex;
align-items:center;
gap:20px;
justify-content:space-evenly;
`;

export const SocialImage=styled.span`
width:20px;
height:20px;
cursor:pointer;
`;

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
export const FooterLink = styled(Link)`
  font-family: 'Outfit';
  font-weight: 800;
  font-size: 18px;
  align-items:center;
  display:flex;
  margin-bottom:1rem;
  text-decoration: none;
  color: black;
  padding: 0 10px; /* Adds padding inside each nav link */
  position: relative;
  color: white;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
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