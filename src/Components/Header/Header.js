import React,{useState,useEffect} from 'react'
import { ButtonsDiv, HeaderContainer, HeaderLogo, HeaderNavContainer, LogoDiv,NavLink, SignUpButton } from './Header.styles'

function Header() {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [prevScrollPos]);
    return (
        <HeaderContainer visible={visible}>
            <LogoDiv>
                <HeaderLogo to="/"><span style={{color:"#525FE1"}}>BOOK</span>-KART</HeaderLogo>
            </LogoDiv>
            <HeaderNavContainer>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
            </HeaderNavContainer>
            <ButtonsDiv>
                <NavLink to='/SignIn'>Sign In</NavLink>
                <SignUpButton to='/SignUp'>Sign Up</SignUpButton>
            </ButtonsDiv>
        </HeaderContainer>
    )
}

export default Header