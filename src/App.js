import React, { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import GlobalStyle from './Globals/GlobalStyle';
import Products from './Pages/Products';
import Description from './Pages/Description';
import Cart from './Pages/Cart';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}


function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
    <GlobalStyle/>
    <div className='App' >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
          <Route path='/products' element={<Products cart={cart} setCart={setCart}/>} />
          <Route path='/product/:productId' element={<Description cart={cart} setCart={setCart}/>} />
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
