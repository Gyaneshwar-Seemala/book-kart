import React, { useState, useEffect } from 'react';
import { HeaderContainer, LogoDiv, HeaderNavContainer, NavLink, HeaderLogo } from '../Components/Header/Header.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FilterCont, FiltersDiv, PDiv } from './Styles/Products.styles';
import Cards from '../Components/ProductCards/Cards';
import Footer from '../Components/Footer/Footer';

function Products({ cart, setCart }) {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [activeFilter, setActiveFilter] = useState('All Products');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <PDiv>
            <HeaderContainer visible={visible}>
                <LogoDiv>
                    <HeaderLogo to="/"><span style={{ color: "#525FE1" }}>BOOK</span>-KART</HeaderLogo>
                </LogoDiv>
                <HeaderNavContainer>
                    <NavLink to='/'>Home</NavLink>
                    {/* Render the number of products in the cart */}
                    <NavLink to='/Cart'><ShoppingCartIcon /> {cart.length}</NavLink>
                </HeaderNavContainer>
            </HeaderContainer>
            <FiltersDiv>
                {['All Products', 'Text books', 'Notes', 'Assignments'].map((filter) => (
                    <FilterCont
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        active={filter === activeFilter}
                    >
                        {filter}
                    </FilterCont>
                ))}
            </FiltersDiv>
            {/* Pass activeFilter, setCart function, and cart state to Cards component */}{activeFilter == "All Products" ? <Cards text="Add to Cart" setCart={setCart} cart={cart} /> : <Cards text="Add to Cart" filter={activeFilter} setCart={setCart} cart={cart} />}
            <Footer />
        </PDiv>

    );
}

export default Products;
