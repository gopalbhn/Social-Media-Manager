import { useState,useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar'
import Login from './components/pages/login'
import Signup from './components/pages/Signup'

function App() {
  const [count, setCount] = useState(0)
  const [dark,setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  function handleToogle(){
    console.log('hello')
    setDark(!dark);
  }

  return (
    <>
    
    <NavBar onclick={handleToogle} dark={dark}/>
    
  <Routes>
    <Route path='/login' element={<Login />}></Route>  
    <Route path="/signup" element ={<Signup />} />
  </Routes>    
    </>
  )
}

export default App
