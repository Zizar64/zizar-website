"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "AWS Solution Architect",
    organization: "Amazon Web Services",
    icon: Award,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "DANTE Level 3",
    organization: "Audinate",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
];

const formation = {
  title: "Licence Workflow Audiovisuel et Médias Numériques",
  icon: GraduationCap,
  color: "from-purple-500 to-pink-500",
};

const experience = [
  "Broadcasters nationaux et internationaux",
  "Production vidéo mobile et live events",
  "Régies finales et studios TV",
  "Infrastructures IP complexes",
];

export function CertificationsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Certifications & Formation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formation continue et expertise reconnue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary-500/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white`}
                    >
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary-500" />
              Formation
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary-500/50 transition-colors mb-8"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${formation.color} text-white`}
                >
                  <formation.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{formation.title}</h4>
                </div>
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-6">Expérience</h3>
            <ul className="space-y-3">
              {experience.map((exp, index) => (
                <motion.li
                  key={exp}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{exp}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
