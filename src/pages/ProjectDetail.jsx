import React from "react";
import { useLocation, Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ProjectDetail() {
  const q = useQuery();
  const id = q.get("id") || "1";

  // placeholder content — in a real app you'd fetch by id
  const project = {
    id,
    title: "Modern Minimalist Living",
    subtitle: "A sophisticated urban apartment featuring clean lines and premium materials",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
    ],
    description: `This project is a study in refined materials and restrained palette. We prioritized natural light, elegant proportions, and custom joinery that blends functionality with craftsmanship.`
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  {project.title}
                </h1>
                <p className="text-[var(--primary)] font-medium">{project.subtitle}</p>
                <p className="text-[var(--muted)] leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-4 mt-6">
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="lux">Enquire About This Project</Button>
                  </Link>
                  <Link to={createPageUrl("Projects")}>
                    <Button variant="outline">Back to Projects</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {project.images.map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden project-elevate">
                  <img src={src} alt={`${project.title} ${i}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
