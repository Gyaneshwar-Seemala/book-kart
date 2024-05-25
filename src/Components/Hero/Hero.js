import React from 'react'
import { BackgroundImage, HeroContainer } from './Hero.styles'
import RotatingText from '../RotatingText/RotatingText'

function Hero() {
    return (
        <HeroContainer>
            <BackgroundImage>
                <RotatingText />
            </BackgroundImage>
        </HeroContainer>
    )
}

export default Hero