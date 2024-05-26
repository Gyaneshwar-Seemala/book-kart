import React, { useState, useEffect } from 'react';
import { HeaderContainer, LogoDiv, HeaderNavContainer, NavLink, HeaderLogo } from '../Components/Header/Header.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from 'react-router-dom';
import { ProductData } from '../data/ProductData';
import Cards from '../Components/ProductCards/Cards';
import { TestimonialText } from '../Components/Testimonials/Testimonial.styles';
import { ButtonContainer, DImg, DescImage, DescText, DescriptionDiv,ImagelistImage,ImageList } from './Styles/Description.styles';
import Footer from '../Components/Footer/Footer';
import { AboutHeading } from '../Components/About/AboutCards.styles';
import { HeroSub } from '../Components/Hero/Hero.styles';
import { BuyNowButton } from '../Components/ProductCards/Card.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ProductName } from '../Components/ProductCards/Card.styles';
import { useNavigate } from 'react-router-dom';
function Description({ cart, setCart }) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [selectedImage,setSelectedImage]=useState('')
    const navigate=useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        // Initialize product quantities based on items already in the cart
        const initialQuantities = {};
        cart.forEach(productId => {
            initialQuantities[productId] = (initialQuantities[productId] || 0) + 1;
        });
        setProductQuantities(initialQuantities);
    }, [cart]);

    const handleAddToCart = (productId, event) => {
        event.stopPropagation();
        setCart(prevCart => [...prevCart, productId]);
        // Increment quantity or set to 1 if not exists
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleRemoveFromCart = (productId, event) => {
        event.stopPropagation();
        if (productQuantities[productId] && productQuantities[productId] > 0) {
            setCart(prevCart => {
                const index = prevCart.indexOf(productId);
                if (index !== -1) {
                    const newCart = [...prevCart];
                    newCart.splice(index, 1); // Remove only one instance
                    return newCart;
                }
                return prevCart;
            });
            // Decrement quantity
            const updatedQuantities = { ...productQuantities };
            updatedQuantities[productId]--;
            setProductQuantities(updatedQuantities);
        }
    };
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    useEffect(() => {
        // Fetch product data based on productID from an API or local data source
        // For example, you might use fetch or axios to make an API call
        // Here's a simplified example assuming ProductData is an array of products
        const fetchedProduct = ProductData.find(product => product.productId === productId);
        setSelectedImage(fetchedProduct.image[0])
        setProduct(fetchedProduct);
    }, [productId]);

    return (
        <div>
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
            {product && (
                <>
                    <DescriptionDiv>
                    <ImageList>
                    {product.image.map((url, index) => (
                        <ImagelistImage src={url} key={index} onClick={() => handleImageClick(url)} />
                    ))}
                    </ImageList>
                        <DescImage>
                            <DImg src={selectedImage} />
                        </DescImage>
                        <DescText>
                        <ProductName style={{width:"100%",textAlign:"left"}}>{product.category}</ProductName>
                            <AboutHeading style={{ display: "flex", justifyContent: "flex-start", width: "100%", paddingBottom: "0px" }}>{product.name}</AboutHeading>
                            <HeroSub>{product.DesPageDescription}</HeroSub>
                            <TestimonialText style={{ alignItems: "center", color: "black", display: "flex", width: "100%", fontSize: "30px" }}>Condition:<span style={{ color: "#808080", paddingLeft: "5px" }}>{product.condition}</span></TestimonialText>
                            <TestimonialText style={{ alignItems: "center", color: "black", display: "flex", width: "100%", fontSize: "30px" }}>Usage:<span style={{ color: "#808080", paddingLeft: "5px" }}>{product.usage}</span></TestimonialText>
                            <TestimonialText style={{ alignItems: "center", color: "black", display: "flex", width: "100%", fontSize: "30px" }}>Price:<span style={{ color: "#808080", paddingLeft: "5px" }}>{product.price}</span></TestimonialText>
                            <ButtonContainer>
                                <BuyNowButton onClick={(event) => handleAddToCart(product.productId, event)} style={{ display: 'flex', position: "relative", justifyContent: 'space-evenly' }}>
                                    {productQuantities[product.productId] ? (
                                        <>
                                            <DeleteIcon onClick={(event) => handleRemoveFromCart(product.productId, event)} />
                                            {productQuantities[product.productId]}
                                            <AddIcon onClick={(event) => handleAddToCart(product.productId, event)} />
                                        </>
                                    ) : (
                                        "Add to cart"
                                    )}
                                </BuyNowButton>
                                <BuyNowButton onClick={()=>navigate("/Cart")} style={{ display: 'flex', position: "relative", justifyContent: 'space-evenly',marginTop:"1rem" }}>
                                    Buy Now
                                </BuyNowButton>
                            </ButtonContainer>
                        </DescText>
                    </DescriptionDiv>
                    <TestimonialText style={{ alignItems: "center", color: "black", display: "flex", width: "100%", justifyContent: "center", paddingTop: "20px", fontSize: "40px" }}>Similar Items</TestimonialText>
                    <Cards text="Add to Cart" filter={product.category} id={product.productId} setCart={setCart} cart={cart} limit={5} />
                </>
            )}
            <Footer />
        </div>
    );
}

export default Description;