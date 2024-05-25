import styled from "styled-components";
import testimonial from "../../Assets/Images/Testimonial.png";

export const TestimonialDiv = styled.div`
  height: 400px;
  display: flex;
`;

export const TestImage=styled.div`
width: 100%;
  height: 100%;
  background-image: url(${testimonial});
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const TestimonialText = styled.span`
  font-family: "Outfit";
  font-size: 25px;
  font-weight: bold;
  color: white;
  width:70%;
`;

export const TestName=styled.span`
font-family: "Outfit";
  font-size: 15px;
  font-weight: bold;
  color: white;
  width:70%;
  text-align:right;
`
