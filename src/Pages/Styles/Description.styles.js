import styled from "styled-components";

export const DescriptionDiv = styled.div`
  display: flex;
  height: 600px;
  padding: 100px 20px;
  gap: 40px;
  align-items: center;
  justify-content: space-evenly;
  background-image:url("https://i.pinimg.com/736x/5f/76/d9/5f76d9f938903e44c6a2d5e1f97eb4b4.jpg");
  background-size:cover;
  background-repeat:no-repeat;
  overflow: hidden; /* Prevent horizontal overflow */
`;

export const DescImage = styled.div`
  flex: 0 0 20%;
  display: flex;
  max-width: 20%; /* Limit maximum width to prevent overflow */
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Hide overflow */
`;

export const DImg = styled.img`
width:100%;
`;


export const DescText = styled.div`
display:flex;
flex-direction:column;
height:600px;
align-items:center;
justify-content:center;
`;

export const ButtonContainer = styled.div`
padding-top:1rem;
width:100%;`;

export const ImageList = styled.div`
display:flex;
width:80px;
height:100%;
padding-top:40px;
gap:2rem;
flex-direction:column;
`;

export const ImagelistImage = styled.img`
width:80px;
`;