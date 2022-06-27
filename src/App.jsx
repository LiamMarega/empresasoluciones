import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Loading from './Components/Loading/Loading.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Loading />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
