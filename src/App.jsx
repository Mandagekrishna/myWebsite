import { useState } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import style from './Styles/App.module.css'
// import Introduction from './Components/Introduction'

function App() {


  return (
    <>
      <Router>
   
    <Nav></Nav>

      <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Home' element={<Home></Home>}></Route>
            

      </Routes>        
      </Router>
    </>
  )
}

export default App
