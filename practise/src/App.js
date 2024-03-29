import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MenuCart from './Pages/MenuCart';
import About from './Pages/About';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from './Pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feedback from './Pages/Feedback';
// import pencilImage from "./Assets/printed-casual-shirt-in-white.jpg";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/MenuCart" element={<MenuCart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems}  />} />
          <Route path="/About" element={<About />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
