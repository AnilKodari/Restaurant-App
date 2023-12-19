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
