import './styles/app.css'

import Header from './components/header_components/Header'
import LeftMenu from './components/left_menu_components/LeftMenu'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App
