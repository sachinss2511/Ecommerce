import ProductList from "./ProductList";
const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl: "data:image/jpeg;base64,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",
    },
  
    {
      id: 2,
      title: "Black and white wallpapers",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const Products = () => {
    const listOfProducts = productsArr.map((prod)=>(
      <ProductList title ={prod.title} img={prod.imageUrl} price={prod.price} id={prod.id}/>
    ))
  return(
    <div>
    <ul> 
        {listOfProducts}
    </ul>    
    </div>
);


}
export default Products;
  