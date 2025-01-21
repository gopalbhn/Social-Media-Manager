import { useState,useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar'
import Login from './pages/login'
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)
  let themeValue = sessionStorage.getItem('theme');
  let parsedTheme = themeValue === 'true';
  const [dark,setDark] = useState(parsedTheme)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    sessionStorage.setItem('theme',dark)
  }, [dark]);


  function handleToogle(){
    console.log('hello')
    setDark(!dark);
  }

  return (
    <>
    
    <NavBar onclick={handleToogle} dark={dark}/>
    
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path='/login' element={<Login />}></Route>  
    <Route path="/signup" element ={<Signup />} />
  </Routes>    
    </>
  )
}

export default App
