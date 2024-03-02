import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import AppProvider from './AppProvider'
import Chap1 from './pages/Chap1'
import Chap2 from './pages/Chap2'
import Chap3 from './pages/Chap3'
import Chap4 from './pages/Chap4'
import Chap5 from './pages/Chap5'
import Chap6 from './pages/Chap6'
import Chap7 from './pages/Chap7'
import img from './assets/menu.svg'
import img2 from './assets/close.svg'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Chap8 from './pages/Chap8'
import Chap9 from './pages/Chap9'
import Chap10 from './pages/Chap10'
function App() {
  const [open,setopen] = useState(false);
  const Side = useRef()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const HandleResize = ()=>{
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize',HandleResize);

    return () => {
        window.removeEventListener('resize',HandleResize);
    }
  },[])
  
  return (
    <AppProvider>
    <div className='flex'>
      {open && <SideBar/>}
      {windowWidth>765 && <SideBar/>}
        <img ref={Side} src={open ? (img2) : (img)} className='md:hidden top-1 px-2 right-2 absolute cursor-pointer' onClick={(e)=>{setopen(!open)}} />
        <div className='w-full overflow-x-scroll overflow-y-hidden h-screen'>
          <Routes>
            <Route path='/' element={<Chap1/>} />
            <Route path='/chap1' element={<Chap1/>} />
            <Route path='/chap2' element={<Chap2/>} />
            <Route path='/chap3' element={<Chap3/>} />
            <Route path='/chap4' element={<Chap4/>} />
            <Route path='/chap5' element={<Chap5/>} />
            <Route path='/chap6' element={<Chap6/>} />
            <Route path='/chap7' element={<Chap7/>} />
            <Route path='/chap8' element={<Chap8/>} />
            <Route path='/chap9' element={<Chap9/>} />
            <Route path='/chap10' element={<Chap10/>} />
          </Routes>
        </div>
    </div>
    </AppProvider>
  )
}

export default App
