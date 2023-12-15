import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartCount}) => (
  <div className="header">
    <h1 className="heading"> UNI Resto Cafe </h1>
    <div className="my-order-container">
      <p className="my-order"> My Orders </p>
      <div className="myOrders">
        <AiOutlineShoppingCart className="ai-shoppingCart" />
        <p className="cartCount"> {cartCount} </p>
      </div>
    </div>
  </div>
)

export default Header
