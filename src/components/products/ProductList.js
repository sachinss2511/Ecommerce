import "./ProductList.css";

const ProductList = (props) => {
  const addToCartHandler = () => {};
  const imaging = props.img;
  return (
      
        <ul className="products">
          <div className="h4">{props.title}</div>
          <div>
            <img src={imaging} alt='images'></img>
          </div>
          <div className="pricing">${props.price}</div>    
            <button type="button" className="btn" onClick={addToCartHandler}>
              Add to Cart
            </button>
        </ul>
      
  );
};
export default ProductList;
