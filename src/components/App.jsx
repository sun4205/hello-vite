
import './App.css'
import './Header'
import Header from './Header'
import Main from './Main'
import Animal from './Animal.jsx'

function App() {
  

  return (
    
    <div className = 'page'>
      <Header />
      <Main />
      <Animal selectedAnimal='dog' />
      </div>
    
  )
}

export default App
