import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import WelcomeSection from './components/WelcomeSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <WelcomeSection />
      <Footer />
    </div>
  )
}

export default App