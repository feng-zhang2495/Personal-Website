import Navbar from './components/Navbar';
import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Footer from './components/Footer';

export const pageContext = createContext("myworld")

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const setPage = (value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: false,
      mirror: false,
    });
  }, [])

  return (
    <div className="App">
      <pageContext.Provider value={currentPage}>
        <Navbar context={pageContext}/>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
        <Footer />
      </pageContext.Provider>
    </div>
  );
}

export default App;