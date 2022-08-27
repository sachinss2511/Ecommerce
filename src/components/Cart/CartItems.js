import React, { useContext } from 'react';
import CartContext from '../Store/Cart-context';
import './CartItems.css';
const CartItems = (props) => {
  const cartCntxt = useContext(CartContext);
  const removeFromCart=(event)=>
  {
    event.preventDefault();
    cartCntxt.removeItem(props.id)
  }
 const imgsrc = props.img;
 const itemTotal=props.price*props.quantity
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>{props.item}</span>
          <img src={imgsrc} alt="products" className="i"/>
        </div>
        <div className="col">
          <span>{Number(props.price) }</span>
        </div>
        <div className="col">
          <span>{props.quantity}</span>
        </div>
        <div className="col">
          <span>{itemTotal}</span>
        <button className='btn btn-danger remove' onClick={removeFromCart}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;