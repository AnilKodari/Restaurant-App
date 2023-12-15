import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartCount, dishList}) => (
  <div className="header">
    <div>
      {dishList.length > 0 && (
        <h1 className="heading">{dishList[0].restaurantName}</h1>
      )}
    </div>
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
