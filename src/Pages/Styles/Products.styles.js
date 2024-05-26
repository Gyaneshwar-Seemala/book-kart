import styled from "styled-components";
import bannerimg from "../../Assets/Images/BannerImg.png"

export const FiltersDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center; /* Centering the child elements */
  padding-top: 120px;
  gap: 20px;
`;

export const PDiv=styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
background-color:#525FE1;
`;

export const FilterCont = styled.div`
  width: 120px;
  height: 50px;
  background-color: ${props => (props.active ? "#111538" : "#dcf0fa")};
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 800;
  font-family: "Outfit";
  color: ${props => (props.active ? "white" : "black")};
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: #111538;
    color: white;
  }
`;
