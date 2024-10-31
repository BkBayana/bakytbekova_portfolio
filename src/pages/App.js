import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const App=() => {
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;