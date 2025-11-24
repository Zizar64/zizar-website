"use client";

import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      name: "DANTE Level 3",
      status: "Certifié",
      level: "Janvier 2022",
      color: "primary",
    },
    {
      name: "Scality Advanced Operations",
      status: "Certifié",
      level: "Décembre 2021",
      color: "accent",
    },
    {
      name: "CCNA Routing & Switching",
      status: "En préparation",
      level: "Objectif 2025",
      color: "primary",
    },
    {
      name: "AWS Solutions Architect",
      status: "En préparation",
      level: "Associate - Sept 2025",
      color: "accent",
    },
    {
      name: "AWS Cloud Practitioner",
      status: "En préparation",
      level: "Foundational - Août 2025",
      color: "primary",
    },
    {
      name: "AWS AI Practitioner",
      status: "En préparation",
      level: "Foundational - Jan 2025",
      color: "accent",
    },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certifications professionnelles et formations continues
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-background border border-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    cert.color === "primary" ? "bg-primary-500/10" : "bg-accent-500/10"
                  } group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-accent-500 transition-all`}>
                    {cert.status === "Certifié" ? (
                      <Award className={`h-6 w-6 ${
                        cert.color === "primary" ? "text-primary-500" : "text-accent-500"
                      } group-hover:text-white transition-colors`} />
                    ) : (
                      <Clock className={`h-6 w-6 ${
                        cert.color === "primary" ? "text-primary-500" : "text-accent-500"
                      } group-hover:text-white transition-colors`} />
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "Certifié"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-orange-500/10 text-orange-500"
                  }`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                {cert.level && (
                  <p className="text-sm text-muted-foreground">{cert.level}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
