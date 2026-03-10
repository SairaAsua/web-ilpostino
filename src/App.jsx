import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import IlPostino from './pages/IlPostino'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ilpostino" element={<IlPostino />} />
        </Routes>
        <footer className="footer section container" style={{ textAlign: 'center', opacity: 0.7, marginTop: '2rem' }}>
          <p>© 2026 ilpostino_bot. Tu rincón en internet.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
