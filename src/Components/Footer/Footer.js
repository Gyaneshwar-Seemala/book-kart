import React from 'react';
import { FooterContainer, FooterLink, FooterLogo, SocialImage, SocialMedia } from './Footer.styles';
import { AboutHeading } from '../About/AboutCards.styles';
import { BannerText, HeroSub } from '../Hero/Hero.styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from '../Header/Header.styles';

function Footer() {
  // Function to handle clicking the mail icon
  const handleMailClick = () => {
    window.location.href = 'mailto:your-email@example.com';
  };

  return (
    <FooterContainer>
        <FooterLogo>
            <AboutHeading style={{color:"white"}}>Book-Kart</AboutHeading>
            <HeroSub style={{color:"white", width:"100%"}}>Bridging generations through shared passion for literature. Discover, share, and connect with fellow book enthusiasts today!</HeroSub>
            <SocialMedia>
                <SocialImage><InstagramIcon sx={{color:"white",fontSize:"30px"}}/></SocialImage>
                <SocialImage><LinkedInIcon sx={{color:"white",fontSize:"30px"}}/></SocialImage>
                <SocialImage><YouTubeIcon sx={{color:"white",fontSize:"30px"}}/></SocialImage>
            </SocialMedia>
        </FooterLogo>
        <FooterLogo style={{flex: "0 0 20%"}}>
            <BannerText style={{paddingBottom:"20px"}}>Links</BannerText>
            <FooterLink to="/products" style={{color:"white",alignItems:"start"}}>Products</FooterLink>
            <FooterLink to="/About" style={{color:"white",alignItems:"start"}}>About</FooterLink>
            <FooterLink to="/SignUp" style={{color:"white",alignItems:"start"}}>Register</FooterLink>
        </FooterLogo>
        <FooterLogo style={{flex: "0 0 20%"}}>
            <BannerText style={{paddingBottom:"20px"}}>Contact Us</BannerText>
            {/* LinkedIn Link */}
            <FooterLink to="/linkedin" style={{color:"white",alignItems:"start"}}>
                <LinkedInIcon /> LinkedIn
            </FooterLink>
            {/* Mail Link */}
            <FooterLink onClick={handleMailClick} style={{color:"white",alignItems:"start"}}>
                <MailIcon /> contact@BookKart.in
            </FooterLink>
        </FooterLogo>
    </FooterContainer>
  );
}

export default Footer;
