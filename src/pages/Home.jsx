import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Minimalist Living",
      subtitle: "A sophisticated urban apartment featuring clean lines and premium materials",
      category: "Residential",
      main_image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop"
    },
    {
      id: 2,
      title: "Luxury Hotel Suite",
      subtitle: "Elegant hospitality design that creates unforgettable experiences",
      category: "Commercial",
      main_image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=1000&fit=crop"
    },
    {
      id: 3,
      title: "Contemporary Family Home",
      subtitle: "Warm and inviting spaces designed for modern family living",
      category: "Residential",
      main_image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop"
    }
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Residential Design",
      short_description: "Complete home transformations that reflect your lifestyle and create beautiful, functional living spaces."
    },
    {
      id: 2,
      title: "Commercial Spaces",
      short_description: "Professional design solutions for offices, retail, and hospitality that enhance brand experience."
    },
    {
      id: 3,
      title: "Space Planning",
      short_description: "Optimize your space with intelligent layouts that maximize functionality and flow."
    }
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Interio transformed our house into a dream home. Their attention to detail and creative vision exceeded our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner", 
      content: "The commercial space design was outstanding. Our customers love the ambiance, and it's boosted our business significantly.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Architect",
      content: "Working with Interio was seamless. They understood our vision and delivered beyond what we imagined possible.",
      rating: 5
    }
  ]);

  return (
    <div className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] via-[#3a3a3a] to-[#2C2C2C] opacity-95" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Timeless Elegance<br />
              <span className="text-[#C9A55A]">Meets Modern Living</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
              We craft sophisticated interiors that reflect your unique story and elevate everyday moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Projects")}>
                <Button className="bg-[#C9A55A] hover:bg-[#B89550] text-white px-8 py-6 text-lg">
                  Explore Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-6 text-lg">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A55A] text-sm font-semibold tracking-wider uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated selection of our most transformative design projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id}>
                <Link to={createPageUrl("ProjectDetail") + `?id=${project.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                      <img
                        src={project.main_image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-[#C9A55A] text-sm font-medium">{project.category}</p>
                    <h3 className="text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#C9A55A] transition-colors" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{project.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Projects")}>
              <Button variant="outline" className="border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white px-8">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A55A] text-sm font-semibold tracking-wider uppercase mb-2">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id}>
                <Link to={createPageUrl("ServiceDetail") + `?id=${service.id}`}>
                  <div className="group bg-[#FAFAF8] p-8 rounded-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#C9A55A]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A55A] transition-colors" />
                    <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-4 group-hover:text-[#C9A55A] transition-colors" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.short_description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A55A] text-sm font-semibold tracking-wider uppercase mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A55A] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's create something beautiful together. Get in touch for a free consultation and bring your vision to life.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-[#C9A55A] hover:bg-[#B89550] text-white px-8 py-6 text-lg">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}