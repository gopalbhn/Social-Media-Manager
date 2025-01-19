import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'

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
      
    </>
  )
}

export default App
