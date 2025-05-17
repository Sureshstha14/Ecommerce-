import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx'
import Navbar from './Components/Navbar.jsx';
import Contact from './pages/Contact.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Footer from './Components/Footer.jsx';
import SearchBar from './Components/SearchBar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/Orders.jsx';

const App = () => {
  return (
    <div className="px-4 sm:px-[4px] md:px-[6px] lg:px-[8px]">
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      {/* Define Routes for your components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placeorder" element={<PlaceOrder/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product/:product_id' element={<Product/>}/>
    
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
