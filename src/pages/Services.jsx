import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Service } from "@/entities/Service";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const data = await Service.list("-created_date");
    setServices(data);
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
              Our <span className="text-[#C9A55A]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive design solutions tailored to your unique vision
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {service.image && (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.short_description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C9A55A] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to={createPageUrl("ServiceDetail") + `?id=${service.id}`}>
                    <Button variant="outline" className="border-[#C9A55A] text-[#C9A55A] hover:bg-[#C9A55A] hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
