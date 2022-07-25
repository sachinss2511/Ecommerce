

const ProductList = (props)=>{
const imaging = props.img;
return (
    <div>
<div>
    
    {"" + props.title}
</div>
<div>
<img src={imaging}></img> 
</div>
   </div>
)

}
export default ProductList;