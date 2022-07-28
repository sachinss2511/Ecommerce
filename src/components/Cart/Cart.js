import CartItems from "./CartItems";
import Modal from "./Modal";
import "./Cart.css";

// import { useContext } from "react";
// import CartContext from "../../Store/cart-context";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const quantity = 1;
  const cartarr = cartElements.map((item) => (
    <CartItems
      price={item.price}
      amount={item.quantity}
      img={item.imageUrl}
      title={item.title}
    />
  ));

console.log(cartarr);
  const messageHandler = () => {
    if (cartarr.length !== 0) {
      alert("ThankYou For Purchasing !");
    } else {
      alert("Please Add Items To Cart !");
    }
  };
 
  return (
  
      <div className="cart">
        <h3 className="cartName">
          Cart
          <button className="btn btn-primary X" onClick={props.onClick}>
            X
          </button>
        </h3>
        <div className="container">
          <div className="row Header">
            <div className="col">
              <span>Item</span>
            </div>
            <div className="col">
              <span>Price</span>
            </div>
            <div className="col">
              <span>Amount</span>
            </div>
          </div>
        </div>
        <div>{cartarr}</div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary purchase"
              onClick={messageHandler}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
  
  );
};

export default Cart;
