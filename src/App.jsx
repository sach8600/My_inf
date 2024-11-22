import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import ContactMe from './components/Contactme';

function App() {
  // Theme State: 'light' or 'dark'
  const [theme, setTheme] = useState('light');

  // Toggle Theme Function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark'); // Update the root class for dark mode
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="Contactme">
        <ContactMe />
      </div>
      <div id="footer">
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
