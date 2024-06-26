import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import AboutCards from '../Components/About/AboutCards'
import valuesdata from "../data/Focus";
import { BannerDiv, BannerText,HeroSub } from '../Components/Hero/Hero.styles';
import { AboutHeading } from '../Components/About/AboutCards.styles';
import { ProductDiv, StudentSay, ViewMore } from './Styles/Home.styles';
import Testimonial from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';
import { ProductContainer } from '../Components/ProductCards/Card.styles';
import Cards from '../Components/ProductCards/Cards';
import { FooterLink } from '../Components/Footer/Footer.styles';

function Home({cart,setCart}) {
  return (
    <div >
      <Header />
      <Hero />
      <BannerDiv>
        <BannerText>1200+<br />Happy Students</BannerText>
        <BannerText>5000+<br />Quality Books</BannerText>
        <BannerText>2+<br />Amazing Years</BannerText>
      </BannerDiv>
      <AboutCards Values={valuesdata} />
      <ProductContainer>
      <AboutHeading>Our <span style={{ color: "#525FE1" }}>Products</span></AboutHeading>
      <HeroSub style={{width:"80%",textAlign:"center", marginTop:"-2%"}}>Discover Student Testimonials: Hear Firsthand Experiences, Insights, and Joys Shared by Our Community. Explore How BookKart has Enriched Learning, Fueled Curiosity, and Fostered a Love for Reading Among Students of All Ages.</HeroSub>
        <Cards limit={4} link={'/products'} text="View More" cart={cart}/>
      </ProductContainer>
      <StudentSay>
        <AboutHeading><span style={{ color: "#525FE1" }}>What</span> our students say</AboutHeading>
        <HeroSub style={{width:"80%",textAlign:"center", marginTop:"-2%"}}>Discover Student Testimonials: Hear Firsthand Experiences, Insights, and Joys Shared by Our Community. Explore How BookKart has Enriched Learning, Fueled Curiosity, and Fostered a Love for Reading Among Students of All Ages.</HeroSub>
        <Testimonial/>
      </StudentSay>
      <Footer/>
    </div>
  )
}

export default Home