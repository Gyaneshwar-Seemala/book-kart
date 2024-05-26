import React, { useState, useEffect } from 'react';
import { HeaderContainer, LogoDiv, HeaderNavContainer, NavLink, HeaderLogo } from '../Components/Header/Header.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'; // Import RemoveShoppingCartIcon
import { CartItem, CartItemImage, CartItemName, CartItems, Price, TotalPrice } from './Styles/Cart.styles'; // Assuming you have a TotalPrice styled component
import { ProductData } from '../data/ProductData';
import { BuyNowButton } from '../Components/ProductCards/Card.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function Cart({ cart, setCart }) {
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

    // Initialize product quantities based on items already in the cart
    const initialProductQuantities = cart.reduce((quantities, productId) => {
        quantities[productId] = (quantities[productId] || 0) + 1;
        return quantities;
    }, {});

    const [productQuantities, setProductQuantities] = useState(initialProductQuantities);

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

    // Filter products based on cart items
    const cartItems = ProductData.filter(product => cart.includes(product.productId));
    const totalPrice = cartItems.reduce((total, product) => {
        const price = parseInt(product.price.split(' ')[0]); // Extract numerical value from the price string
        const quantity = productQuantities[product.productId]; // Get the quantity of the product
        return total + (price * quantity);
    }, 0);

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
            {cart.length === 0 ? ( // Render when cart is empty
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                    <RemoveShoppingCartIcon style={{ fontSize: '5rem', marginBottom: '1rem' }} />
                    <CartItemName>Cart is empty</CartItemName>
                </div>
            ) : (
                <CartItems>
                    {cartItems.map((item) => (
                        <CartItem key={item.productId}>
                            <CartItemImage src={item.image[0]} />
                            <CartItemName>{item.name}</CartItemName>
                            {/* Display the number of instances of the product in the cart */}
                            <CartItemName style={{ marginRight: "1rem" }}>Quantity: {productQuantities[item.productId]}</CartItemName>
                            <Price>{(parseInt(item.price.split(' ')[0]) * productQuantities[item.productId])} INR</Price>
                            <BuyNowButton onClick={(event) => handleAddToCart(item.productId, event)} style={{ display: 'flex', position: "relative", justifyContent: 'space-evenly',bottom:"0" }}>
                                {productQuantities[item.productId] ? (
                                    <>
                                        <DeleteIcon onClick={(event) => handleRemoveFromCart(item.productId, event)} />
                                        {productQuantities[item.productId]}
                                        <AddIcon onClick={(event) => handleAddToCart(item.productId, event)} />
                                    </>
                                ) : (
                                    "Add to cart"
                                )}
                            </BuyNowButton>
                        </CartItem>
                    ))}
                    <CartItem style={{ justifyContent: "flex-end",gap:"3rem",alignItems:"center"}}>
                        <Price>Total:<span style={{ paddingLeft: "10rem" }}>{totalPrice} INR</span></Price>
                        <BuyNowButton style={{ display: 'flex', position: "relative", justifyContent: 'space-evenly' ,bottom:"0"}}>
                            Check Out
                        </BuyNowButton>
                    </CartItem>
                </CartItems>
            )}
            <CartItems>

            </CartItems>
        </div>
    );
}

export default Cart;