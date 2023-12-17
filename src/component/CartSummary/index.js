import {useState} from 'react'
import CartContext from '../../Context/CartContext'
// Update the path accordingly
import './index.css'

const CartSummary = () => {
  const [setShowCheckoutPopup] = useState(false)

  return (
    <CartContext.Consumer>
      {value => {
        const {dishList} = value
        let total = 0
        dishList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        const handleCheckoutClick = () => {
          setShowCheckoutPopup(true)
        }

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}/-
              </h1>
              <p className="total-items">{dishList.length} Items in cart</p>
              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckoutClick}
              >
                Checkout
              </button>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
