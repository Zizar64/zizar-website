"use client";

import { motion } from "framer-motion";
import { Network, Radio, Cloud, Cpu } from "lucide-react";

const competences = [
  {
    category: "Vidéo sur IP",
    icon: Network,
    skills: [
      { name: "SMPTE ST 2110", level: 95 },
      { name: "NDI", level: 90 },
      { name: "SRT/RIST", level: 85 },
      { name: "SDI/HDMI", level: 90 },
    ],
  },
  {
    category: "Audio sur IP",
    icon: Radio,
    skills: [
      { name: "AES67", level: 90 },
      { name: "DANTE", level: 95 },
      { name: "Ravenna", level: 80 },
      { name: "SIP", level: 85 },
    ],
  },
  {
    category: "Cloud & IT",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Networking IP", level: 90 },
      { name: "Linux/Docker", level: 80 },
      { name: "Monitoring", level: 85 },
    ],
  },
  {
    category: "Systèmes",
    icon: Cpu,
    skills: [
      { name: "Evertz", level: 85 },
      { name: "Grass Valley", level: 80 },
      { name: "Lawo", level: 85 },
      { name: "Ross Video", level: 80 },
    ],
  },
];

export function CompetencesSection() {
  return (
    <section id="competences" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Compétences Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise approfondie en technologies broadcast et systèmes IP
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competences.map((competence, index) => (
            <motion.div
              key={competence.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary-500/50 transition-colors"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary-500/10 text-primary-500 mb-4">
                <competence.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-4">{competence.category}</h3>
              <div className="space-y-4">
                {competence.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
