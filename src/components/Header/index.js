import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartCount, dishList, history}) => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="link">
          {dishList && dishList.length > 0 && (
            <h1 className="heading">{dishList[0].restaurantName}</h1>
          )}
        </Link>

        <div className="my-order-container">
          <p className="my-order">My Orders</p>
          <Link to="/cart">
            <div className="myOrders">
              <AiOutlineShoppingCart className="ai-shoppingCart" />
              <p className="cartCount"> {cartCount} </p>
            </div>
          </Link>

          <button type="button" className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
// import {Link, withRouter} from 'react-router-dom'
// import Cookies from 'js-cookie'
// import {AiOutlineShoppingCart} from 'react-icons/ai'
// import './index.css'

// const Header = ({cartCount, dishList, history}) => {
//   const onClickLogout = () => {
//     Cookies.remove('jwt_token')
//     history.replace('/login')
//   }

//   return (
//     <nav className="nav-header">
//       <div className="nav-content">
//         <Link to="/" className="link">
//           {dishList && dishList.length > 0 && (
//             <h1 className="heading">{dishList[0].restaurantName}</h1>
//           )}
//         </Link>

//         <div className="my-order-container">
//           <p className="my-order">My Orders</p>
//           <Link to="/cart">
//             <div className="myOrders">
//               <AiOutlineShoppingCart className="ai-shoppingCart" />
//               <p className="cartCount"> {cartCount} </p>
//             </div>
//           </Link>

//           <button type="button" className="logout-btn" onClick={onClickLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default withRouter(Header)
// Cart Route tests 11. test cases are failed

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

// Home Route tests

// 9 test case are failed
// 1.
// When the Page is opened, an HTTP GET request should be made to the given dishesApiUrl to get the list of dishes
// 2.
// When the HTTP GET request is successful, then the page should initially consist of an HTML paragraph elements to display the count of each dish quantity with text content as "0"
// 3.
// When the HTTP GET request is successful and the active "menu_category" is "From the Barnyard", then the page should consist of an HTML paragraph element with text content as the value of the key "dish_description" received from the response within "category_dishes" list
// 4.
// When the HTTP GET request is successful and the active "menu_category" is "From the Hen House", then the page should initially consist of an HTML paragraph elements to display the count of each dish quantity with text content as "0"
// 5.
// When the HTTP GET request is successful and the active "menu_category" is "Fresh From The Sea", then the page should not consist of an HTML button elements with text content as "-" and "+" along with its quantity as all "dish_Availability" keys has the value "false" received from the response
// 6.
// When the HTTP GET request is successful and the active "menu_category" is "Salads and Soup", and when the "-" button in the Page is clicked initially, then the "dish quantity" count or "cart count" should not be decremented
// 7.
// When the HTTP GET request is successful and the active "menu_category" is "Salads and Soup", and when the "+" button in the Page is clicked, then the particular "dish quantity" count should be incremented by one
// 8.
// When the HTTP GET request is successful and the active "menu_category" is "Salads and Soup", and when the button with text content "ADD TO CART" is clicked , then the "cart count" should not be incremented by one
// 9.
// When the HTTP GET request is successful and the active "menu_category" is "Salads and Soup", and when you click the "+" button on the page first, and then click the "-" button, it should reduce the quantity of that specific dish by one
