import React from 'react';
import { AboutCardContainer, AboutContainer, AboutHeading, AboutValuesCard, AboutValuesHeading, AboutValuesImage, AboutValuesSub } from './AboutCards.styles';
import { HeroSub } from '../Hero/Hero.styles';
function AboutCards({ Values, Heading }) {

    return (
        <AboutContainer>
            <AboutHeading ><span style={{color:"#525FE1"}}>Why are We</span> better than others</AboutHeading>
            <HeroSub style={{width:"80%",textAlign:"center", marginTop:"-2%"}}>Discover the BookKart Difference: Where Passion Meets Selection, Community Thrives, and Every Page Holds Promise. Experience Unmatched Quality, Convenience, and Expertise in Every Book Journey.</HeroSub>
            <AboutCardContainer>
                {Values.map((value, index) => (
                    <AboutValuesCard key={index}>
                        <AboutValuesImage src={value.Icon} />
                        <AboutValuesHeading>{value["Values Heading"]}</AboutValuesHeading>
                        <AboutValuesSub>{value["Values Description"]}</AboutValuesSub>
                    </AboutValuesCard>
                ))}
            </AboutCardContainer>
        </AboutContainer>
    );
}

export default AboutCards;
