
import './Header.css'

const Header =(props)=>{
const number =0
    return (
        <div className="up">
        <button className="butt" onClick={props.cart}> Cart </button>
        <span className="num">{number}</span>
        </div>
    )
   
}
export default Header;
