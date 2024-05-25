// RotatingText.js
import React from "react";
import { Span, TextP, TextWrapper, Words } from "./RotatingText.styles";
import { HeroButton, HeroSub } from "../Hero/Hero.styles";
function RotatingText({ theme }) {
  return (
    <TextWrapper>
      <TextP>Passing Stories<br /> Forward</TextP>
      <Words>
        <Span>Warmly</Span>
        <Span>Curiously</Span>
        <Span>Fervently</Span>
      </Words>
      <HeroSub >
        Legacy Exchange: Seniors' Stories Enrich Juniors' Journeys. Our Bookstore Facilitates Connections, Offers Wisdom, and Nurtures Community. Join Us to Buy, Sell, and Share in the Love of Learning and Literature Across Generations.
      </HeroSub>
      <HeroButton to="/products">Buy Now</HeroButton>
    </TextWrapper>
  );
}

export default RotatingText;
