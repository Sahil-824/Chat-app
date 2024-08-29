import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Chat from './components/chat/chat'
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate'

const App = () => {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/chat' element={<Chat/>}></Route>
      <Route path='/Profile' element={<ProfileUpdate/>} />
    </Routes>
    </>
  )
}

export default App