import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Banner />
     <About />
     <Skills />
     <Expertise />
    <Footer />
    </>
  )
}

export default App
