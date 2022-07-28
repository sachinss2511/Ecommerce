import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Layouts/Header";
import Products from "../products/Products";

const Store = (props) => {
    // console.log('in state');
    const [cart, setCart] = useState(false);
    const hideCartHandler = () => {

        console.log('in usestate in hidecart');
      setCart(false);
    };
    const showCartHandler = () => {

        console.log('in usestate in show cart');
      setCart(true);
    };
  
    return (
          <>
         {<Header cart={showCartHandler} />}        
         <Products/>
         {cart && <Cart onClick={hideCartHandler} />}
         </>
          );
  };
  
  export default Store;