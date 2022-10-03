import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Pages.module.scss'

const Empty = () => {
  return (
    <div className={style.cart_empty}>
      <div>
        <h2>Корзина пустая </h2>
        <img src="/smile_empty.png" alt="smile_empty" />
      </div>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src="/cart_empty.png" alt="cart_empty" />
      <Link to="/">
        <button className={style.btn_back}>Вернуться назад</button>
      </Link>
    </div>
  )
}

export default Empty
