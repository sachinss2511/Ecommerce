import ProductList from "./ProductList";
import './Product.css';
import Cart from "../Cart/Cart";

const productsArr = [
    {
      id: 1,
      title: "Calvin Harris",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  
    {
      id: 2,
      title: "Dimitri Vegas",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      id: 3,
      title: "Marshmello",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      id: 4,
      title: "Justin Beiber",
      price:  100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const Products = () => {
    const listOfProducts = productsArr.map((prod)=>(
      <ProductList title ={prod.title} img={prod.imageUrl} price={prod.price} id={prod.id}/>
    ))

  return(
    <div>
     
        <div className="h2">
            <h2>Most Replayed Albums</h2>
        </div>
     <ul className="productContainer">
        {listOfProducts}
    </ul>    
    </div>
);


}
export default Products;
  