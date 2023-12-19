// import CartContext from '../../context/CartContext'
// import Header from '../Header'
// import EmptyCartView from '../EmptyCartView'
// import CartItem from '../CartItem'

// const Cart = () => (
//   <CartContext.Consumer>
//     {value => {
//       const {removeAllCartItems, cartList} = value
//       console.log(cartList)
//       const showEmptyView = cartList.length === 0
//       const onClickRemoveAllBtn = () => {
//         removeAllCartItems()
//       }

//       return (
//         <>
//           <Header dishList={cartList} />
//           <div className="cart-container">
//             {showEmptyView ? (
//               <EmptyCartView />
//             ) : (
//               <div className="cart-content-container">
//                 <h1 className="cart-heading">My Cart</h1>
//                 <button
//                   type="button"
//                   className="remove-all-btn"
//                   onClick={onClickRemoveAllBtn}
//                 >
//                   Remove All
//                 </button>
//                 {/* Display dishList here */}
//                 <ul>
//                   {cartList.map(dish => (
//                     <CartItem key={dish.id}>{dish.name}</CartItem>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </>
//       )
//     }}
//   </CartContext.Consumer>
// )

// export default Cart

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

// 1.
// When the cart is empty, the CartRoute should consist of an HTML image element with src attribute value as URL for cart empty image
// 2.
// When the dishes are added to the cart, the count of the cart items should be displayed in the header after the cart icon button
// 3.
// When a dish is added to the cart, the CartRoute should consist of an HTML button element with text content as "Remove All"
// 4.
// When a dish is added to the cart, the page should consist of an HTML image element with src value as "dishImage" for dish added
// 5.
// When a dish is added to the cart, the page should consist of an HTML element with text content as "dishName" of the dish added
// 6.
// When a dish is added to the cart, the page should consist of an HTML button element with text content as "+" should be displayed
// 7.
// When a dish is added to the cart, the page should consist of an HTML button element with text content as "-" should be displayed
// 8.
// When the HTML button element with text content as "+" is clicked, then the "incrementCartItemQuantity" function in "CartContext" should be called
// 9.
// When the HTML button element with text content as "-" is clicked, then the "decrementCartItemQuantity" function in "CartContext" should be called
// 10.
// When multiple dishes are added to the cart, the count of the cart items should be updated in the header after the cart link
// 11.
// When the "Remove All" button is clicked, then the "removeAllCartItems" function in "CartContext" should be called