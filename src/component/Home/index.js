// import {Component} from 'react'
// import Header from '../Header'
// import DishCard from '../DishCard'
// import './index.css'

// class Home extends Component {
//   state = {
//     dishList: [],
//     activeMenuCategory: 'From The Barnyard',
//     cartCount: 0,
//   }

//   componentDidMount() {
//     this.getJobs()
//   }

//   getJobs = async () => {
//     const apiUrl =
//       'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
//     const options = {
//       method: 'GET',
//     }

//     try {
//       const response = await fetch(apiUrl, options)

//       if (response.ok) {
//         const data = await response.json()
//         const updatedData = data.map(item => ({
//           // ... existing code ...
//   restaurantId: item.restaurant_id,
//   restaurantName: item.restaurant_name,
//   restaurantImage: item.restaurant_image,
//   tableId: item.table_id,
//   tableName: item.table_name,
//   branchName: item.branch_name,
//   nextUrl: item.nexturl,
//   tableMenuList: item.table_menu_list.map(menuItem => ({
//     menuCategory: menuItem.menu_category,
//     menuCategoryId: menuItem.menu_category_id,
//     menuCategoryImage: menuItem.menu_category_image,
//     nextUrl: menuItem.nexturl,
//     categoryDishes: menuItem.category_dishes.map(dish => ({
//       dishId: dish.dish_id,
//       dishName: dish.dish_name,
//       dishPrice: dish.dish_price,
//       dishImage: dish.dish_image,
//       dishCurrency: dish.dish_currency,
//       dishCalories: dish.dish_calories,
//       dishDescription: dish.dish_description,
//       dishAvailability: dish.dish_Availability,
//       dishType: dish.dish_Type,
//       nextUrl: dish.nexturl,
//       addonCat: dish.addonCat.map(addonCategory => ({
//         addonCategory: addonCategory.addon_category,
//         addonCategoryId: addonCategory.addon_category_id,
//         addonSelection: addonCategory.addon_selection,
//         nextUrl: addonCategory.nexturl,
//         addons: addonCategory.addons.map(addon => ({
//           dishId: addon.dish_id,
//           dishName: addon.dish_name,
//           dishPrice: addon.dish_price,
//           dishImage: addon.dish_image,
//           dishCurrency: addon.dish_currency,
//           dishCalories: addon.dish_calories,
//           dishDescription: addon.dish_description,
//           dishAvailability: addon.dish_Availability,
//           dishType: addon.dish_Type,
//         })),
//       })),
//     })),
//   })),
//         }))
//         this.setState({
//           dishList: updatedData,
//           activeMenuCategory: updatedData[0].tableMenuList[0].menuCategory,
//         })
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error)
//     }
//   }

//   setActiveMenuCategory = menuCategory => {
//     this.setState({
//       activeMenuCategory: menuCategory,
//     })
//   }

//   updateCartCount = count => {
//     this.setState(prevState => ({
//       cartCount: Math.max(prevState.cartCount + count, 0),
//     }))
//   }

//   renderDishList = () => {
//     const {dishList, activeMenuCategory} = this.state

//     return (
//       <ul className="dish-list">
//         {dishList.map(dish => (
//           <DishCard
//             dishDetails={dish}
//             key={dish.restaurantId}
//             activeMenuCategory={activeMenuCategory}
//             updateCartCount={this.updateCartCount}
//           />
//         ))}
//       </ul>
//     )
//   }

//   render() {
//     const {cartCount, activeMenuCategory, dishList} = this.state

//     return (
//       <>
//         <div>
//           <Header cartCount={cartCount} dishList={dishList} />
//           <ul className="home-navbar">
//             {dishList.flatMap(dish =>
//               dish.tableMenuList.map(menu => (
//                 <li key={`${dish.restaurantId}-${menu.menuCategory}`}>
//                   <button
//                     type="button"
//                     className={`cat ${
//                       menu.menuCategory === activeMenuCategory ? 'active' : ''
//                     }`}
//                     onClick={() =>
//                       this.setActiveMenuCategory(menu.menuCategory)
//                     }
//                   >
//                     {menu.menuCategory}
//                   </button>
//                 </li>
//               )),
//             )}
//           </ul>
//           {this.renderDishList()}
//         </div>
//       </>
//     )
//   }
// }

// export default Home
import {Component} from 'react'
import Header from '../Header'
import DishCard from '../DishCard'
import './index.css'

class Home extends Component {
  state = {
    dishList: [],
    activeMenuCategory: 'From The Barnyard',
    cartCount: 0,
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)

      if (response.ok) {
        const data = await response.json()
        const updatedData = data.map(item => ({
          // ... existing code ...
          restaurantId: item.restaurant_id,
          restaurantName: item.restaurant_name,
          restaurantImage: item.restaurant_image,
          tableId: item.table_id,
          tableName: item.table_name,
          branchName: item.branch_name,
          nextUrl: item.nexturl,
          tableMenuList: item.table_menu_list.map(menuItem => ({
            menuCategory: menuItem.menu_category,
            menuCategoryId: menuItem.menu_category_id,
            menuCategoryImage: menuItem.menu_category_image,
            nextUrl: menuItem.nexturl,
            categoryDishes: menuItem.category_dishes.map(dish => ({
              dishId: dish.dish_id,
              dishName: dish.dish_name,
              dishPrice: dish.dish_price,
              dishImage: dish.dish_image,
              dishCurrency: dish.dish_currency,
              dishCalories: dish.dish_calories,
              dishDescription: dish.dish_description,
              dishAvailability: dish.dish_Availability,
              dishType: dish.dish_Type,
              nextUrl: dish.nexturl,
              addonCat: dish.addonCat.map(addonCategory => ({
                addonCategory: addonCategory.addon_category,
                addonCategoryId: addonCategory.addon_category_id,
                addonSelection: addonCategory.addon_selection,
                nextUrl: addonCategory.nexturl,
                addons: addonCategory.addons.map(addon => ({
                  dishId: addon.dish_id,
                  dishName: addon.dish_name,
                  dishPrice: addon.dish_price,
                  dishImage: addon.dish_image,
                  dishCurrency: addon.dish_currency,
                  dishCalories: addon.dish_calories,
                  dishDescription: addon.dish_description,
                  dishAvailability: addon.dish_Availability,
                  dishType: addon.dish_Type,
                })),
              })),
            })),
          })),
        }))
        this.setState({
          dishList: updatedData,
          activeMenuCategory: updatedData[0].tableMenuList[0].menuCategory,
        })
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  setActiveMenuCategory = menuCategory => {
    this.setState({
      activeMenuCategory: menuCategory,
    })
  }

  updateCartCount = count => {
    this.setState(prevState => ({
      cartCount: Math.max(prevState.cartCount + count, 0),
    }))
  }

  renderDishList = () => {
    const {dishList, activeMenuCategory} = this.state

    return (
      <ul className="dish-list">
        {dishList.map(dish => (
          <DishCard
            dishDetails={dish}
            key={dish.restaurantId}
            activeMenuCategory={activeMenuCategory}
            updateCartCount={this.updateCartCount}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {cartCount, activeMenuCategory, dishList} = this.state

    return (
      <>
        <div>
          <Header cartCount={cartCount} dishList={dishList} />
          <ul className="home-navbar">
            {dishList.flatMap(dish =>
              dish.tableMenuList.map(menu => (
                <li key={`${dish.restaurantId}-${menu.menuCategory}`}>
                  <button
                    type="button"
                    className={`cat ${
                      menu.menuCategory === activeMenuCategory ? 'active' : ''
                    }`}
                    onClick={() =>
                      this.setActiveMenuCategory(menu.menuCategory)
                    }
                  >
                    {menu.menuCategory}
                  </button>
                </li>
              )),
            )}
          </ul>
          {this.renderDishList()}
        </div>
      </>
    )
  }
}

export default Home
