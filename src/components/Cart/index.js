import CartContext from '../../context/CartContext'
import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartItem from '../CartItem'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {removeAllCartItems, cartList} = value

      const showEmptyView = cartList.length === 0
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header dishList={cartList} />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                {/* Display dishList here */}
                <ul>
                  {cartList.map(dish => (
                    <CartItem key={dish.id} dishDetails={dish} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
