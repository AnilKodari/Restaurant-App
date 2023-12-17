import CartItem from '../CartItem'
import CartContext from '../../Context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {dishList} = value
      console.log('cartList in CartListView:', dishList)
      return (
        <ul className="cart-list">
          {dishList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
