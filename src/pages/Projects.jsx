import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Project } from "@/entities/Project";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await Project.list("-created_date");
    setProjects(data);
  };

  const categories = ["All", "Residential", "Commercial", "Hospitality", "Retail", "Office"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#FAFAF8]">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Our <span className="text-[#C9A55A]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our collection of transformative design projects
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-[#C9A55A] hover:bg-[#B89550] text-white" 
                  : "border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
