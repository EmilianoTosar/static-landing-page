import React from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Body from './components/Body'
import Footer from'./components/Footer'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Input />
      <Body />
      <Footer />
    </div>
  )
}

export default App
