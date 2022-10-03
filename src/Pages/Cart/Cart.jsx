import React from 'react'
import AppContext from '../../Context'
import style from '../Pages.module.scss'
import CartItem from './CartItem'
import Empty from './Empty'

const Cart = () => {
  const {
    drawer,
    setDrawer,
    summCart,
    pizzasCount,
    content,
  } = React.useContext(AppContext)

  const sumcount = () => {
    drawer.reduce((sum, e) => e.count_pizza + sum, 0)
  }
  const drawerFiltered = content.filter((e) => e.add !== 0)
  return (
    <div className={style.cart_box}>
      {!drawer.length ? (
        <Empty />
      ) : (
        <div>
          <div className={style.cart_header}>
            <div>
              <img src="/cart.png" alt="cart" />
              <h2>Корзина</h2>
            </div>
            <span onClick={() => setDrawer([])}>
              <img src="/empty.svg" alt="delete" /> Очистить корзину
            </span>
          </div>
          {drawer.map((item, index) => (
            <CartItem {...item} key={index} sumcount={sumcount} />
          ))}
          <div className={style.cart_footer}>
            <div className={style.footer_count}>
              <span>Всего пицц: </span>
              <p>{pizzasCount} шт.</p>
            </div>
            <div className={style.footer_sum}>
              <span>Сумма заказа: </span>
              <p>{summCart} &#8372;</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <button
              className="btn_orange_active"
              style={{
                padding: '20px 50px',
              }}
            >
              Оплатить сейчас
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
