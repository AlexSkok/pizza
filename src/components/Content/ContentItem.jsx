import React from 'react'
import AppContext from '../../Context'
import style from './Content.module.scss'

const ContentItem = ({ id, img, title, size_pizza, size, price }) => {
  const { drawer } = React.useContext(AppContext)
  const typePizza = ['тонкое', 'традиционное']
  const sizePizza = ['26', '30', '40']
  const [activeType, setActiveType] = React.useState()
  const [add, setAdd] = React.useState(0)
  const [added, setAdded] = React.useState(false)

  const [activeSize, setActiveSize] = React.useState()
  const onSelectType = (index) => {
    setActiveType(index)
  }

  const onSelectSize = (index) => {
    setActiveSize(index)
  }
  const onAdd = (elem) => {
    elem = { add, id, img, title, size_pizza, size, price }

    onClickAdd()
    added ? onClickAdd() : drawer.push(elem)
  }
  const onAdded = () => {
    setAdded(true)
  }
  const onClickAdd = () => {
    setAdd(add + 1)
    onAdded()
  }
  return (
    <div className={style.pizza_item}>
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <div>
        <ul>
          {typePizza.map((elem, index) => (
            <li
              onClick={() => onSelectType(index)}
              key={index}
              className={
                activeType === index
                  ? style.active_type
                  : size_pizza.includes(index)
                  ? ''
                  : style.disabled
              }
            >
              {elem}
            </li>
          ))}
        </ul>
        <ul>
          {sizePizza.map((elem, index) => (
            <li
              onClick={() => onSelectSize(index)}
              className={
                activeSize === index
                  ? style.active_type
                  : size.includes(index)
                  ? ''
                  : style.disabled
              }
              key={elem}
            >
              {elem} см.
            </li>
          ))}
        </ul>
      </div>

      <span>
        от {price} &#8372;
        <button className="btn_orange" onClick={(e) => onAdd(e)}>
          <div className={add < 1 ? style.plus : style.oval}>
            <div>{add < 1 ? null : add}</div>
          </div>
          Добавить
        </button>
      </span>
    </div>
  )
}

export default ContentItem
