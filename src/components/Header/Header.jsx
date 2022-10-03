import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import '../../index.scss'
import AppContext from '../../Context'

const Header = () => {
  const { summCart, pizzasCount } = React.useContext(AppContext)
  return (
    <div className={s.header}>
      <Link to="/">
        <div className={s.header_logo}>
          <img src="/img/logo.png" alt="logo" className={s.header_title} />
          <div>
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Link to="/cart">
        <div className="btn_orange_active">
          <p>{summCart} &#8372;</p>
          <span></span>
          <div>
            <img src="/img/cart.svg" alt="cart" />
            {pizzasCount}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Header
