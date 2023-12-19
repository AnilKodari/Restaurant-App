import {Component} from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = dishId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (dishId === eachCartItem.dishId) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = dishId => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.dishId === dishId,
    )
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (dishId === eachCartItem.dishId) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(dishId)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]

      this.setState({cartList: updatedCartList})
    }
  }

  render() {
    const {cartList} = this.state

    console.log(`gggg ${JSON.stringify(cartList)}`)
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        {/* Use BrowserRouter as the root-level router */}
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </Router>
      </CartContext.Provider>
    )
  }
}

export default App

// import {Component} from 'react'
// import {Route, Router, Switch} from 'react-router-dom'

// import Login from './component/Login'
// import Home from './component/Home'
// import Cart from './component/cart'
// import ProtectedRoute from './component/ProtectedRoute'
// import CartContext from './Context/CartContext'

// import './App.css'

// class App extends Component {
//   state = {
//     dishList: [],
//   }

//   removeAllCartItems = () => {
//     this.setState({dishList: []})
//   }

//   incrementCartItemQuantity = id => {
//     this.setState(prevState => ({
//       dishList: prevState.cartList.map(eachCartItem => {
//         if (id === eachCartItem.id) {
//           const updatedQuantity = eachCartItem.quantity + 1
//           return {...eachCartItem, quantity: updatedQuantity}
//         }
//         return eachCartItem
//       }),
//     }))
//   }

//   decrementCartItemQuantity = id => {
//     const {dishList} = this.state
//     const productObject = dishList.find(eachCartItem => eachCartItem.id === id)
//     if (productObject.quantity > 1) {
//       this.setState(prevState => ({
//         cartList: prevState.cartList.map(eachCartItem => {
//           if (id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity - 1
//             return {...eachCartItem, quantity: updatedQuantity}
//           }
//           return eachCartItem
//         }),
//       }))
//     } else {
//       this.removeCartItem(id)
//     }
//   }

//   removeCartItem = id => {
//     const {dishList} = this.state
//     const updatedCartList = dishList.filter(
//       eachCartItem => eachCartItem.id !== id,
//     )

//     this.setState({dishList: updatedCartList})
//   }

//   addCartItem = product => {
//     const {dishList} = this.state
//     const productObject = dishList.find(
//       eachCartItem => eachCartItem.id === product.id,
//     )

//     if (productObject) {
//       this.setState(prevState => ({
//         cartList: prevState.cartList.map(eachCartItem => {
//           if (productObject.id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity + product.quantity

//             return {...eachCartItem, quantity: updatedQuantity}
//           }

//           return eachCartItem
//         }),
//       }))
//     } else {
//       const updatedCartList = [...dishList, product]

//       this.setState({dishList: updatedCartList})
//     }
//   }

//   render() {
//     const {dishList} = this.state

//     return (
//       <CartContext.Provider
//         value={{
//           dishList,
//           addCartItem: this.addCartItem,
//           removeCartItem: this.removeCartItem,
//           incrementCartItemQuantity: this.incrementCartItemQuantity,
//           decrementCartItemQuantity: this.decrementCartItemQuantity,
//           removeAllCartItems: this.removeAllCartItems,
//         }}
//       >
//         <Router>
//           <Switch>
//             <Route path="/login" component={Login} />
//             <ProtectedRoute exact path="/" component={Home} />
//             <ProtectedRoute exact path="/cart" component={Cart} />
//           </Switch>
//         </Router>
//       </CartContext.Provider>
//     )
//   }
// }

// export default App
