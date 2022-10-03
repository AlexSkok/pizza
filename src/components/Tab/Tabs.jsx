import React from 'react'
import AppContext from '../../Context'
import style from './Tabs.module.scss'

const Tabs = () => {
  const { tabs, active, btnActive, select, content } = React.useContext(
    AppContext,
  )

  return (
    <div className={style.tab_box}>
      <ul>
        {tabs.map((item, index) => (
          <li
            key={index}
            value={item}
            onClick={() => btnActive(item)}
            className={
              active === item
                ? style.tab_item + ' ' + style.active
                : style.tab_item
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <div className={style.sort}>
        <label htmlFor="select">Сортировка по: </label>
        <select
          id="select"
          name="select"
          className={style.select}
          onChange={(e) => console.log(e.target.value)}
        >
          {select.map((elem, key) => (
            <option value={elem.sort} id={elem.sort} key={key}>
              {elem.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Tabs
