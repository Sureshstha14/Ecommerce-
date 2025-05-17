import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import List from './pages/List.jsx';
import Add from './pages/Add.jsx';
import Orders from './pages/Orders.jsx';
import Login from './Components/Login.jsx';
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log(backendUrl);

function App() {
  // const [token, setToken] = useState( '');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token && token !== 'undefined' ) {
      localStorage.setItem('token', token); // Store token in localStorage
    }
  }, [token]);

  return ( 
    <div>
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div className="bg-slate-50">
            <Navbar setToken={setToken} />
            <hr />
            <div className="flex w-full">
              <Sidebar />
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
