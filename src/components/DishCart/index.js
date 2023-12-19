import {useState, useEffect} from 'react'
import './index.css'

const DishCard = ({dishDetails, activeMenuCategory, updateCartCount}) => {
  const {categoryDishes} = dishDetails.tableMenuList.find(
    menu => menu.menuCategory === activeMenuCategory,
  ) || {
    categoryDishes: [],
  }

  const [dishQuantities, setDishQuantities] = useState({})

  useEffect(() => {
    setDishQuantities({})
  }, [activeMenuCategory])

  const handleIncrement = dishId => {
    setDishQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: (prevQuantities[dishId] || 0) + 1,
    }))
    // No updateCartCount here
  }

  const handleDecrement = dishId => {
    if (dishQuantities[dishId] > 0) {
      setDishQuantities(prevQuantities => ({
        ...prevQuantities,
        [dishId]: prevQuantities[dishId] - 1,
      }))
      // No updateCartCount here
    }
  }

  const handleAddToCart = () => {
    const totalQuantity = Object.values(dishQuantities).reduce(
      (total, quantity) => total + quantity,
      0,
    )

    // Only update the cart count when the user clicks on "ADD TO CART"
    if (totalQuantity > 0) {
      updateCartCount(totalQuantity)
    }
  }

  //   const onClickAddToCart = dishId => {
  //     const productData = categoryDishes.filter(dish => dish.dishId === dishId)
  //     addCartItem({...productData, dishQuantities})
  //   }

  return (
    <div className="menuList">
      {categoryDishes.map(dish => (
        <li key={dish.dishId} className="all-menu-list">
          {/* ... (existing code) */}
          <div className="round-container">
            <h1> O </h1>
          </div>
          <div className="description-container">
            <h1 key={dish.dishName}> {dish.dishName} </h1>
            <p>
              {dish.dishCurrency} {dish.dishPrice}
            </p>
            <p> {dish.dishDescription} </p>
            {dish.dishAvailability ? (
              <div className="count">
                <button
                  type="button"
                  className="button"
                  onClick={() => handleDecrement(dish.dishId)}
                  disabled={dishQuantities[dish.dishId] <= 0}
                >
                  -
                </button>
                <p className="para">{dishQuantities[dish.dishId] || 0}</p>

                <button
                  type="button"
                  className="button"
                  onClick={() => handleIncrement(dish.dishId)}
                >
                  +
                </button>
              </div>
            ) : null}
            {dish.dishAvailability ? (
              <p className="green-color">
                {Array.isArray(dish.addonCat) && dish.addonCat.length > 0
                  ? 'Customizations available'
                  : null}
              </p>
            ) : (
              <p className="red-color"> Not Available </p>
            )}
            <button
              type="button"
              className="addToCartButton"
              onClick={handleAddToCart}
              style={{
                display: dishQuantities[dish.dishId] > 0 ? 'block' : 'none',
              }}
            >
              ADD TO CART
            </button>
          </div>
          <div className="calories-container">
            <p>{dish.dishCalories} calories</p>
          </div>
          <div className="image-container">
            <img src={dish.dishImage} alt={dish.dishName} className="image" />
          </div>
        </li>
      ))}
    </div>
  )
}

export default DishCard
