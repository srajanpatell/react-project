import logo from './logo.svg';
import './App.css';
import './index.css';



import {Routes,Route} from 'react-router-dom';
 import Product from './components/Product.js';
 import About from './components/About';
 import Pricing from './components/Pricing';
 import Features from './components/Features'
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/features' element={<Features />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
