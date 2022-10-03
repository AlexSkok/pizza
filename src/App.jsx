import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import AppContext from './Context'
import Cart from './Pages/Cart/Cart'
import Main from './Pages/Main'
import cart from './cart.json'
import contentpizza from './content.json'
import axios from 'axios'

const tabs = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const select = [
  { value: 'популярности', sort: 'popular' },
  { value: 'цене', sort: 'price' },
  { value: 'алфавиту', sort: 'alphabet' },
]

function App() {
  const [content, setContent] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [active, setActive] = React.useState('Все')
  const [drawer, setDrawer] = React.useState([])

  // =====================
  const pizzasCount = drawer.reduce(
    (count, elem) => Number(elem.count_pizza) + Number(count),
    0,
  )

  // =============data api
  // React.useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchContent = await axios
  //         .get(
  //           // 'https://2rogrs7ri9.api.quickmocker.com/content',
  //           'https://2rogrs7ri9.api.quickmocker.com/pizza',
  //         )
  //         .then((e) => console.log(e))

  //       setContent(fetchContent.data)
  //       setLoading(true)
  //     } catch (error) {
  //       alert('не удалось загрузить данные')
  //     }
  //   }
  //   fetchData()
  // }, [])
  // ====json file==============
  React.useEffect(() => {
    setContent(contentpizza)
    setDrawer([])
    setLoading(true)
  }, [])
  // ================
  const summCart = drawer.reduce(
    (sum, elem) => Number(elem.price) + Number(sum),
    0,
  )

  const btnActive = (index) => {
    setActive(index)
  }
  const onFilterTab = content.filter((item) =>
    item.type.toLowerCase().includes(active.toLowerCase()),
  )
  const sortPrice = content.sort((a, b) => b.price - a.price)
  console.log(sortPrice)

  console.log(summCart)
  console.log(loading)
  return (
    <div className="container">
      <AppContext.Provider
        value={{
          tabs,
          content,
          setContent,
          cart,
          summCart,
          active,
          onFilterTab,
          btnActive,
          loading,
          drawer,
          setDrawer,
          pizzasCount,
          select,
          sortPrice,
        }}
      >
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
