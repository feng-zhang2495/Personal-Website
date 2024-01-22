import './App.css';
import Navbar from './components/Navbar';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

export const pageContext = createContext("myworld")

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const setPage = (value) => {
    setCurrentPage(value)
  }

  return (
    <div className="App">
      <pageContext.Provider value={currentPage}>
        <Navbar context={pageContext}/>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>

      </pageContext.Provider>
    </div>
  );
}

export default App;