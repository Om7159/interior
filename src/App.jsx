import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Placeholder components for navigation links
const About = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">About Us</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>
const Services = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">Our Services</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>
const Projects = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">Our Projects</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>
const Team = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">Our Team</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>
const Pricing = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">Pricing</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>
const Blog = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">Blog</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>
const Contact = () => <div className="min-h-screen pt-20 px-4 text-center"><h1 className="text-4xl font-bold text-[#2C2C2C] mt-20">Contact Us</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div>

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App