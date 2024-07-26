import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resetpassword from './components/Resetpassword'
import Forgetpassword from './components/Forgetpassword'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes >

     
     <Route path='/signup' element={<Signup/>}/>

     <Route path='/login' element={<Login/>}/>

     <Route path='/dashboard' element={<Dashboard/>}/>

     <Route path='/forgetpassword' element={<Forgetpassword/>}/>

     <Route path='/reset-password/:randomString/:expirationTimestamp' element={<Resetpassword/>}/>

     <Route path='*' element={<Login/>}/>

     </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
