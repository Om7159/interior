import React from "react";
import { Award, Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue perfection in every detail, delivering designs that exceed expectations"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to create spaces that inspire and delight"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to bring their vision to life"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We blend timeless elegance with cutting-edge design trends"
    }
  ];

  return (
    <div className="bg-[#FAFAF8]">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              About <span className="text-[#C9A55A]">Interio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Creating timeless interiors that tell your story and elevate your everyday life
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A55A] text-sm font-semibold tracking-wider uppercase mb-4">Our Story</p>
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                Crafting Spaces with Soul
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Interio emerged from a simple belief: that exceptional design has the power to transform not just spaces, but lives. What began as a small studio has grown into a renowned design firm, trusted by discerning clients who seek sophistication, functionality, and timeless beauty.
                </p>
                <p>
                  Our approach combines classical elegance with contemporary innovation. We believe that every space has a story to tell, and our role is to help that story unfold through thoughtful design, exquisite materials, and meticulous attention to detail.
                </p>
                <p>
                  Today, our portfolio spans residential estates, commercial spaces, and hospitality projects across the country. Each project is a testament to our commitment to excellence and our passion for creating environments that inspire.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
                alt="Elegant interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#C9A55A] text-white p-8 rounded-lg shadow-xl">
                <div className="text-4xl font-bold mb-1" style={{fontFamily: "'Cormorant Garamond', serif"}}>14+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A55A] text-sm font-semibold tracking-wider uppercase mb-2">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#C9A55A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#C9A55A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#C9A55A] mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A55A] mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A55A] mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>25</div>
              <div className="text-gray-400">Design Awards</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A55A] mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>14</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
