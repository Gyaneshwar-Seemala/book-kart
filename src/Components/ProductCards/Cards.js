// import React, { useState,useEffect } from 'react';
// import { CardContainer, ProductImage, ProductText, ProductName, ProductDesc, BuyNowButton, ProductContainer } from './Card.styles';
// import { ProductData } from '../../data/ProductData';
// import productimg from "../../Assets/Images/ProductImage.png";
// import { ProductDiv } from '../../Pages/Styles/Home.styles';
// import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';

// const Cards = ({ filter, limit, link, text, setCart, cart }) => {
  
//   let filteredProducts = ProductData;

//   if (filter) {
//     filteredProducts = filteredProducts.filter(product => product.category === filter);
//   }

//   if (limit) {
//     filteredProducts = filteredProducts.slice(0, limit);
//   }

//   const navigate = useNavigate();

//   // State to track quantity of each product in the cart
//   const [productQuantities, setProductQuantities] = useState({});

//   const handleAddToCart = (productId, event) => {
//     event.stopPropagation();
//     setCart(prevCart => [...prevCart, productId]);
//     console.log(cart);
//     // Increment quantity or set to 1 if not exists
//     setProductQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [productId]: (prevQuantities[productId] || 0) + 1
//     }));
//   };

//   const handleRemoveFromCart = (productId, event) => {
//     event.stopPropagation();
//     if (productQuantities[productId] && productQuantities[productId] > 0) {
//       setCart(prevCart => {
//         const index = prevCart.indexOf(productId);
//         if (index !== -1) {
//           const newCart = [...prevCart];
//           newCart.splice(index, 1); // Remove only one instance
//           return newCart;
//         }
//         return prevCart;
//       });
//       // Decrement quantity
//       const updatedQuantities = { ...productQuantities };
//       updatedQuantities[productId]--;
//       setProductQuantities(updatedQuantities);
//     }
//   };
//   useEffect(() => {
//     console.log("Cart updated:", cart);
//   }, [cart]);

//   return (
//     <ProductDiv>
//       {filteredProducts.map(product => (
//         <CardContainer key={product.productId} onClick={() => navigate(`/product/${product.productId}`)}>
//           <ProductImage background={productimg} />
//           <ProductText>
//             <ProductName>{product.name}</ProductName>
//             <ProductDesc>Condition:<span style={{ fontWeight: "600" }}>{product.condition}</span></ProductDesc>
//             <ProductDesc>Usage:<span style={{ fontWeight: "600" }}>{product.usage}</span></ProductDesc>
//             <ProductName>{product.price}</ProductName>
//           </ProductText>
//           {/* Pass productId to handleAddToCart */}
//           {text === "Add to Cart" ? <BuyNowButton onClick={(event) => handleAddToCart(product.productId, event)} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//             {productQuantities[product.productId] ? (
//               <>
//                 <DeleteIcon onClick={(event) => handleRemoveFromCart(product.productId, event)} />
//                 {productQuantities[product.productId]}
//                 <AddIcon onClick={(event) => handleAddToCart(product.productId, event)} />
//               </>
//             ) : (
//               text
//             )}
//           </BuyNowButton> : <BuyNowButton onClick={(event) => { event.stopPropagation(); navigate(link) }}>{text}</BuyNowButton>}
//         </CardContainer>
//       ))}
//     </ProductDiv>
//   );
// };

// export default Cards;

import React, { useState, useEffect } from 'react';
import { CardContainer, ProductImage, ProductText, ProductName, ProductDesc, BuyNowButton, ProductContainer } from './Card.styles';
import { ProductData } from '../../data/ProductData';
import productimg from "../../Assets/Images/ProductImage.png";
import { ProductDiv } from '../../Pages/Styles/Home.styles';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Cards = ({ filter, limit, link, text, setCart, cart,id }) => {

  let filteredProducts = ProductData;

  if (filter) {
    filteredProducts = filteredProducts.filter(product => product.category === filter  && id!=product.productId);
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  const navigate = useNavigate();

  // State to track quantity of each product in the cart
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

  return (
    <ProductDiv>
      {filteredProducts.map(product => (
        <CardContainer key={product.productId} onClick={() => navigate(`/product/${product.productId}`)}>
          <ProductImage background={product.image[0]} />
          <ProductText>
            <ProductName>{product.name}</ProductName>
            <ProductDesc>Condition:<span style={{ fontWeight: "600" }}>{product.condition}</span></ProductDesc>
            <ProductDesc>Usage:<span style={{ fontWeight: "600" }}>{product.usage}</span></ProductDesc>
            <ProductName>{product.price}</ProductName>
          </ProductText>
          {/* Pass productId to handleAddToCart */}
          {text === "Add to Cart" ? <BuyNowButton onClick={(event) => handleAddToCart(product.productId, event)} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {productQuantities[product.productId] ? (
              <>
                <DeleteIcon onClick={(event) => handleRemoveFromCart(product.productId, event)} />
                {productQuantities[product.productId]}
                <AddIcon onClick={(event) => handleAddToCart(product.productId, event)} />
              </>
            ) : (
              text
            )}
          </BuyNowButton> : <BuyNowButton onClick={(event) => { event.stopPropagation(); navigate(link) }}>{text}</BuyNowButton>}
        </CardContainer>
      ))}
    </ProductDiv>
  );
};

export default Cards;
