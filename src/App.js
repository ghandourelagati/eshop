import "./App.scss";
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Contact from './pages/contact/Contact'
import { Home } from './pages' 


function App() {
  const [first, setFirst] = useState("Zino")
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/> } />
        </Routes>

        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
