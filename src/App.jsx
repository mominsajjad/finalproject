
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css"
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter> 
     <Routes>
       <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;