import React from "react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function Pricing() {
  const tiers = [
    { name: "Consultation", price: "Free", desc: "Introductory consultation to define scope and vision." },
    { name: "Design Package", price: "$4,500+", desc: "Concepts, plans, and material selection for full interior projects." },
    { name: "Full Service", price: "$15,000+", desc: "Turnkey project delivery including procurement and installation." }
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>Pricing</h1>
          <p className="text-[var(--muted)] max-w-2xl mx-auto mb-10">We offer transparent pricing and flexible packages; the prices below are starting points. Contact us for a tailored proposal.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="glass-card p-6 rounded-xl project-elevate text-left">
                <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                <p className="text-[var(--primary)] font-bold text-2xl mb-4">{t.price}</p>
                <p className="text-[var(--muted)] mb-6">{t.desc}</p>
                <div>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
