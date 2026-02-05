// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/login.jsx'
import Registration from './component/Registration.jsx'
import Dashboard from './component/Dashboard.jsx'
import MainLayout from './component/MainLayout.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const logData = {}; // Define logData here

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login loginData={logData}/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<MainLayout/>} />
       
    </Routes>



    </BrowserRouter>
      {/* <h2>Welcome online shopping  </h2> */}
      


    </>
  )
}


export default App
