
import { useContext } from 'react'
import CartContext from '../Store/Cart-context'
import './Header.css'

const Header =(props)=>{
let number =0
 const cartCntxt = useContext(CartContext)
 cartCntxt.items.map((elements)=>{
    number+=elements.quantity
 })
 console.log(cartCntxt.items.length);
   return (
        <div className="up">
        <button className="butt" onClick={props.cart}> Cart </button>
        <span className="num">{number}</span>
        </div>
    )
   
}
export default Header;
