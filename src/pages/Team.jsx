import React, { useState, useEffect } from "react";
import { TeamMember } from "@/entities/TeamMember";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    const data = await TeamMember.list("-created_date");
    setTeam(data);
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
              Meet Our <span className="text-[#C9A55A]">Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Talented designers passionate about creating extraordinary spaces
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#C9A55A]/20 flex items-center justify-center">
                      <span className="text-6xl text-[#C9A55A] font-bold" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  {member.name}
                </h3>
                <p className="text-[#C9A55A] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                {member.specialties && member.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#C9A55A]/10 text-[#C9A55A] px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#C9A55A] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white p-12 rounded-2xl glass-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>Behind the Scenes</h3>
                <p className="text-[var(--muted)]">Our multidisciplinary studio brings together designers, architects and makers to craft every detail from concept through completion. Collaboration and craft are at the heart of each project.</p>
                <div className="mt-6">
                  <a href="#" className="text-[var(--primary)] font-semibold">Meet the team →</a>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000" alt="studio" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
