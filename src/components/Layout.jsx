import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "Projects", path: createPageUrl("Projects") },
    { name: "Team", path: createPageUrl("Team") },
    { name: "Pricing", path: createPageUrl("Pricing") },
    { name: "Blog", path: createPageUrl("Blog") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl("Home")} className="text-3xl font-bold text-[#2C2C2C]" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Interio
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-[#C9A55A]"
                      : "text-[#333333] hover:text-[#C9A55A]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-[#C9A55A] hover:bg-[#B89550] text-white px-6">
                Get Started
              </Button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-[#FAFAF8]">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium ${
                    location.pathname === item.path ? "text-[#C9A55A]" : "text-[#333333]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

      <footer className="bg-[#2C2C2C] text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-[#C9A55A] mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                Interio
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating timeless spaces that reflect your unique style and elevate everyday living.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-gray-400 hover:text-[#C9A55A] transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Residential Design</li>
                <li>Commercial Spaces</li>
                <li>Space Planning</li>
                <li>3D Visualization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-[#C9A55A]" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-[#C9A55A]" />
                  hello@interio.design
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Interio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}