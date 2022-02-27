
import './App.css';
import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import PrivateRoute from './Components/privateRoute/PrivateRoute';

export const userContex = createContext();
function App() {
  const [logedInUser, setLogedInUser] = useState({});
  console.log(logedInUser);
  return (
   <userContex.Provider value={[logedInUser, setLogedInUser]}>

    <BrowserRouter>
     <Header></Header>
     <Routes>
       <Route path='home' element={<Home />} />
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login /> } />
       <Route path="/book/:id" element={<PrivateRoute><Book /></PrivateRoute>} />
     </Routes>
    </BrowserRouter>
  </userContex.Provider>
  );
}

export default App;
