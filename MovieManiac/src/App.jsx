
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
     <Navbar/>
     <main><MovieList/></main>
   </div>
  )
}

export default App
