"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Clock } from "lucide-react";

const certifications = [
  {
    title: "DANTE Level 3",
    organization: "Audinate",
    status: "Certifié",
    date: "Janvier 2022",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Scality Advanced Operations",
    organization: "Scality",
    status: "Certifié",
    date: "Décembre 2021",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "CCNA Routing & Switching",
    organization: "Cisco",
    status: "En préparation",
    date: "Objectif 2025",
    icon: Clock,
    color: "from-blue-500 to-teal-500",
  },
  {
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    status: "En préparation",
    date: "Associate - Sept 2025",
    icon: Clock,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    status: "En préparation",
    date: "Foundational - Août 2025",
    icon: Clock,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AWS AI Practitioner",
    organization: "Amazon Web Services",
    status: "En préparation",
    date: "Foundational - Jan 2025",
    icon: Clock,
    color: "from-pink-500 to-purple-500",
  },
];

const formations = [
  {
    title: "Licence W.A.M.N",
    subtitle: "Workflow Audiovisuel et Médias Numériques",
    school: "IUT de Bayonne",
    year: "2021",
    description: "Codecs Audio/Vidéo, Virtualisation, Data Base, Administration Réseau, Gestion de Projet, Économie et communication, Diffusions de médias, Video IP, Contrôle d'équipements",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    badges: ["Major"]
  },
  {
    title: "BTS AUDIOVISUEL SON",
    school: "BTS de Bayonne-Biarritz",
    year: "2019",
    description: "Acoustique, Prise de son, Mixage, Post-production, Électronique audio, Technologies numériques, Traitement du signal, Réseaux audionumériques, Gestion de projet audiovisuel, Culture audiovisuelle",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    badges: ["Major"]
  }
];

const experience = [
  "Broadcasters nationaux et internationaux",
  "Production vidéo mobile et live events",
  "Régies finales et studios TV",
  "Infrastructures IP complexes",
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
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

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="h-6 w-6 mr-2 text-primary-500" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary-500/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white`}
                  >
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "Certifié"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-orange-500/10 text-orange-500"
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-primary-500" />
            Formations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary-500/50 transition-colors group"
              >
                <div className="flex items-start space-x-4 mb-3">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${formation.color} text-white flex-shrink-0`}
                  >
                    <formation.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold">{formation.title}</h4>
                        {formation.subtitle && (
                          <p className="text-xs text-muted-foreground">{formation.subtitle}</p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">{formation.year}</span>
                    </div>
                    <p className="text-sm text-primary-500 font-medium mb-2">{formation.school}</p>
                    {formation.badges && formation.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formation.badges.map((badge, badgeIndex) => (
                          <span
                            key={badgeIndex}
                            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30"
                          >
                            <Award className="h-3.5 w-3.5 text-amber-500" />
                            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                              {badge}
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">{formation.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expérience */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Expérience</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {experience.map((exp, index) => (
              <motion.li
                key={exp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-4 bg-card border border-border rounded-xl hover:border-primary-500/50 transition-colors"
              >
                <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{exp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
