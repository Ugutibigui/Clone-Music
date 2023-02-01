import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <div className="top">
        <div className='left-menu'>

        </div>
        <div className='content'>
          <header>

          </header>
          <div className='info-content'>

          </div>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

export default App
