import styled from "styled-components";

export const CartItems=styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:3rem;
align-items:center;
padding-top:100px;
justify-content:space-evenly;
`;

export const CartItem=styled.div`
height:100px;
width:75%;
padding:10px;
display:flex;
align-items:center;
gap:5rem;
border-bottom:1px solid black;
justify-content:space-between;
`;

export const CartItemImage=styled.img`
height:100px;
`;

export const CartItemName=styled.span`
font-family:"Outfit";
font-size:20px;
font-weight:800;
`;

export const Price=styled.span`
font-family:"Outfit";
font-size:25px;
font-weight:800;
`;