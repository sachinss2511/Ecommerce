import React,{ Fragment, useContext } from "react";
import CartContext from "../Store/Cart-context";
// import { Link } from "react-router-dom";

import './style.css';

const ProductList = (props) => {

    const cartCntxt=useContext(CartContext);
    
    const addToCart=(event) =>{
        event.preventDefault();
        cartCntxt.addItem(
           {
               id:props.id,      
               title:props.title,
               imgsrc:props.img,
               price:props.price,
               quantity:props.quantity
           }
       );
      
    }

    const imgsrc = props.img;
    return (
        <Fragment>
            
            <ul className="products">
                
            {/* <Link to={`store/${props.id}`}> */}
                
                <div><h4>{props.title}</h4></div>
                <div>
                    <img src={imgsrc} alt="products" />
                </div>
                <span> </span>
                <div><h4>Rs.{props.price} </h4><button className="add" onClick={addToCart} >Add To Cart</button></div>
                
                {/* </Link> */}
            </ul>
            
        </Fragment>
    );
};

export default ProductList;