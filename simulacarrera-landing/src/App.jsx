import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import Precios from './pages/Precios'
import Inversionistas from './pages/Inversionistas'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/inversionistas" element={<Inversionistas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
