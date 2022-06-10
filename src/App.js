import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./Cart";
import{ CartProvider} from "react-use-cart";
function App() {
  return (
    <>
    <CartProvider>
    <Cart />
    <Home />
   
    </CartProvider>
    </>
  );
}

export default App;
