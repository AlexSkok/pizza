import React from 'react'
import AppContext from '../../Context'
import style from './Content.module.scss'
import ContentItem from './ContentItem'
import MyLoader from './ContentLoader'

const Content = () => {
  const { content, onFilterTab, active, loading } = React.useContext(AppContext)
  const renderContent = () => {
    return (
      <div className={style.content_box}>
        {loading
          ? active === 'Все'
            ? content.map((item, key) => <ContentItem key={key} {...item} />)
            : onFilterTab.map((item, key) => (
                <ContentItem key={key} {...item} />
              ))
          : [...Array(10)].map((e, key) => <MyLoader key={key} />)}
      </div>
    )
  }
  return <div>{renderContent()}</div>
}

export default Content
