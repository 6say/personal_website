import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../index.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Resume from './pages/Resume.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFoundPage from './pages/404.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
)
