import { useState } from 'react'
import './App.css'

import Buscador from './components/Buscador'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MyApi from './components/MyApi'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="app-container">
        <Header />
        <Hero />
        <Buscador searchTerm={searchTerm} onSearch={setSearchTerm} />
        <h1 className="page-title"> GameScout </h1>
        <MyApi searchTerm={searchTerm} />
      </div>
      <Footer />
    </>
  )
};

export default App;
