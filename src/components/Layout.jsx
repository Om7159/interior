import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
  <div className="min-h-screen bg-[var(--bg)]" style={{scrollBehavior: 'smooth'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

  <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] backdrop-blur-md shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl("Home")} className="text-3xl font-bold text-[var(--dark)] flex items-center gap-3" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              <span className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center soft-border float-slow">
                <span className="text-[var(--primary)] text-lg font-semibold">I</span>
              </span>
              Interio
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors nav-link ${
                    location.pathname === item.path
                      ? "text-[var(--primary)] active"
                      : "text-[var(--dark)] hover:text-[var(--primary)]"
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
              aria-label="Toggle menu"
              className="lg:hidden p-3 rounded-md hover:bg-[rgba(44,44,44,0.02)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-[rgba(12,12,12,0.6)] backdrop-blur-sm">
            <div className="absolute inset-0 flex items-start justify-center pt-28 px-6">
              <nav className="w-full max-w-md bg-[var(--bg)] rounded-2xl p-6 glass-card shadow-xl">
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-medium py-3 px-2 rounded-md ${
                        location.pathname === item.path ? "text-[var(--primary)] bg-[rgba(201,165,90,0.06)]" : "text-[var(--dark)] hover:text-[var(--primary)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button className="w-full bg-[var(--primary)] text-white">Get Started</Button>
                  </div>
                </div>
              </nav>
            </div>
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

          <div className="border-t border-gray-700/30 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Interio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}