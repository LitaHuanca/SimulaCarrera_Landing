import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import Precios from './pages/Precios'
import ModeloNegocio from './pages/ModeloNegocio'
import Inversionistas from './pages/Inversionistas'
import Institucional from './pages/Institucional'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/modelo-negocio" element={<ModeloNegocio />} />
        <Route path="/inversionistas" element={<Inversionistas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
