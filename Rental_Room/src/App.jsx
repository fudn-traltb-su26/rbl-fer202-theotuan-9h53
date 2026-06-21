import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import './index.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Background Đầy Màu Sắc - Aurora */}
      <div className="aurora-bg">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
      </div>

      <Header />
      
      <main className="flex-grow-1">
        <Banner />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
