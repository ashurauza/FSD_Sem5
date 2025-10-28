import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/gallery.jsx'
import Profile from './component/Orofile.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h2>
       Welcome to React with Vite</h2>
       <div className='parent'>
        <h2 style={{ color: 'red' }}>Welcome to my profile page</h2>
        <img src='https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png' alt='profile' />     </div>
       </div>

<div>
       <h2>Name:</h2>
       <h2>RollNo:3268674</h2>
       <h2>Branch:CSE-AIML</h2>
       <h2>Section: B</h2>
       <h2>College: ABES Engineering College</h2>
</div>
      
    </>
  )
}

export default App
