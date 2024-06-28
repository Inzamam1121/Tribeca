import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AlertState from './Alert/AlertState'
import Alert from './Component/Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AlertState>
      <Alert/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </AlertState>
    </>
  )
}

export default App
