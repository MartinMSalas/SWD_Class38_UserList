import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import UserList from './components/UserList'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <h1>User List</h1>
        <UserList></UserList>
      </div>
      
    </>
  )
}

export default App
