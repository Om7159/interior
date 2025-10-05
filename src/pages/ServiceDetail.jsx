import React from "react";
import { useLocation, Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ServiceDetail() {
  const q = useQuery();
  const id = q.get("id") || "1";

  const service = {
    id,
    title: "Residential Design",
    description: `Full-service residential interior design: concept, space planning, finishes, lighting plans and project management.`
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
            {service.title}
          </h1>
          <div className="section-sep mx-auto mb-6" />
          <p className="text-[var(--muted)] leading-relaxed max-w-3xl mx-auto">{service.description}</p>

          <div className="mt-8 flex justify-center gap-4">
            <Link to={createPageUrl("Contact")}>
              <Button variant="lux">Discuss Your Home</Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button variant="outline">All Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
