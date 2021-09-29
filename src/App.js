import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Home />
    </BrowserRouter>
  )
}

export default App
