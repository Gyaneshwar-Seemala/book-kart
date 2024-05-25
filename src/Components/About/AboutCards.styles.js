import styled from "styled-components";

export const AboutCardContainer = styled.div`
display: flex;
  flex-wrap:wrap;
  gap: 30px;
  align-items: center;
  justify-content:center;
  `;

export const AboutContainer = styled.div`display: flex;
  flex-direction: column;
  background:white;
  background-size: cover;
  align-items: center;
  gap:10px;
  padding: 30px;`

export const AboutHeading = styled.span`
  font-family: 'Outfit';
  font-size: 65px;
  font-weight: bold;
  color:black;
  padding-bottom: 30px;
  text-align: center;
`;

export const AboutValuesCard = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:20px;
    border-radius:15px;
    justify-content: center;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease; /* Smooth transition for box-shadow */
    &:hover {
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.4); /* Add box-shadow on hover */
    }
    `;

export const AboutValuesImage=styled.img`
width:90px;
height:90px;
padding-left:20px;
`;

export const AboutValuesHeading=styled.span`
font-family:"Outfit";
font-size:20px;
font-weight:bold;
padding:20px;
`;

export const AboutValuesSub=styled.span`
font-family:"Outfit";
font-size:15px;
padding-left:20px;
`;