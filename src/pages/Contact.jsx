import React, { useState } from "react";
import { SendEmail } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    await SendEmail({
      to: "hello@interio.design",
      subject: `New Contact Form: ${formData.name}`,
      body: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `
    });

    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-[#FAFAF8]">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Get in <span className="text-[#C9A55A]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's discuss how we can transform your space
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                Send Us a Message
              </h2>
              
              {sent && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Project
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your vision..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={sending}
                  className="w-full bg-[#C9A55A] hover:bg-[#B89550] text-white py-6 text-lg"
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A55A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C9A55A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C] mb-1">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A55A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C9A55A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C] mb-1">Email</p>
                    <p className="text-gray-600">hello@interio.design</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A55A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C9A55A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C] mb-1">Studio</p>
                    <p className="text-gray-600">123 Design Avenue<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>Our Studio</h3>
                  <p className="text-[var(--muted)]">A curated workshop and studio where ideas are prototyped and finishes are sampled. We welcome visitors by appointment.</p>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000" alt="studio" className="rounded-lg shadow-lg" />
                </div>
              </div>

              <div className="mt-10 bg-white p-8 rounded-2xl glass-card">
                <h4 className="text-xl font-semibold mb-4">FAQ</h4>
                <div className="space-y-4 text-[var(--muted)]">
                  <div>
                    <strong>How long does a typical project take?</strong>
                    <p>Timelines vary — small interiors can take 6-12 weeks; full-service projects are typically 6-12 months.</p>
                  </div>
                  <div>
                    <strong>Do you work remotely?</strong>
                    <p>Yes. We offer remote consulting and can manage procurement and installations nationwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
