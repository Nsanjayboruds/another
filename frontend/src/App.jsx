import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import SignUp from './pages/signUp'
import SignIn from './pages/signin'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to ="/signup"/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
    </Routes>
  )
}

export default App