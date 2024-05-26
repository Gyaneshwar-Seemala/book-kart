import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  gap: 10px;
  position: relative;
  cursor:pointer;
  padding-bottom: 40px; /* Add padding to make space for the button */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease; /* Smooth transition for box-shadow */
    &:hover {
        box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4); /* Add box-shadow on hover */
    }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 175px;
  border-radius: 15px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProductText = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ProductName = styled.span`
  font-family: "Outfit";
  font-weight: 800;
  font-size: 20px;
  text-align:center;
`;

export const ProductDesc = styled.span`
  font-family: "Outfit";
  font-weight: 500;
  font-size: 15px;
  text-align:center;
`;

export const BuyNowButton = styled.button`
border:none;
cursor:pointer;
  width: 150px;
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
  background-color: #FFCF59;
  transition: background-color 0.3s ease, color 0.3s ease;

  position: absolute; /* Positioning relative to the CardContainer */
  bottom: -10px; /* Move it below the CardContainer */
  
  &:hover {
    background-color: #111538;
    color:white;
  }
`;
