import React from 'react'
import AppContext from '../../Context'
import style from '../Pages.module.scss'

const CartItem = ({
  add,
  img,
  title,
  size_pizza,
  size,
  count_pizza,
  price,
  id,
  sumcount,
}) => {
  const { drawer, setDrawer, pizzasCount } = React.useContext(AppContext)
  const [sum, setSum] = React.useState(1)
  const plus = (sum) => {
    setSum(sum + 1)
  }
  const minus = (sum) => {
    if (sum > 0) {
      setSum(sum - 1)
    }
  }
  React.useEffect(() => {
    sumcount()
  }, [count_pizza])
  count_pizza = sum

  const deletFromCart = drawer.filter((elem) => elem.id !== id)

  return (
    <div className={style.cart_item}>
      <div className={style.cart_item_info}>
        <img src={img} alt="cat_item_img" />
        <div>
          <h3>{title}</h3>
          <div>
            <span>{size_pizza}</span>, <span>{size} см.</span>
          </div>
        </div>
      </div>
      <div className={style.count_side}>
        <div className={style.count_box}>
          <button onClick={() => minus(count_pizza)}>
            <div className={style.btn_minus}></div>
          </button>
          <span>{count_pizza}</span>
          <button onClick={() => plus(count_pizza)}>
            <div className={style.btn_plus}></div>
          </button>
        </div>
        <span>{price * count_pizza} &#8372;</span>
        <button
          className={style.delete_box}
          onClick={() => setDrawer(deletFromCart)}
        >
          <div className={style.delete_cart}></div>
        </button>
      </div>
    </div>
  )
}

export default CartItem
