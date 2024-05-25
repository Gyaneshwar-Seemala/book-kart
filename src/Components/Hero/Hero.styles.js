import styled from "styled-components";
import heroback from "../../Assets/Images/HeroBack.png";
import bannerback from "../../Assets/Images/BannerImg.png";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 100px; /* Padding applied to the container */
  padding-bottom:100px;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dcf0fa;
  background-image: url(${heroback});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left; /* Aligns the background image */
  padding-top: 100px; /* Same padding applied to the background image */
`;

export const HeroSub = styled.span`
display:flex;
  font-size: 18px;
  font-weight: bold;
  font-family: "Outfit";
  padding-top:20px;
  color:#808080;
  padding-bottom:40px;
  width: 750px;
`;
export const HeroButton = styled(Link)`
color: black;
  background-color: #525FE1;
font-family: "Outfit";
text-decoration:none;
font-size: 20px;
text-align:center;
cursor:pointer;
font-weight: bold;
border-radius: 15px;
padding:20px;
transition: 0.2s ease-in;
  &:hover {
    color: black;
  background-color: #FFCF59;
  }
`;

export const BannerDiv=styled.div`
height:200px;
width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
background-image: url(${bannerback});
  background-size: cover;
  background-repeat: no-repeat;
`;


export const BannerText=styled.span`
font-family:"Outfit";
font-weight:800;
font-size:35px;
color:white;
text-align:center;
`;