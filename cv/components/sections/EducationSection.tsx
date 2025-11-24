"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Globe } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Licence W.A.M.N",
      school: "IUT de Bayonne",
      location: "Bayonne",
      year: "2021",
      description: "Codecs Audio/Vidéo, Virtualisation, Data Base, Administration Réseau, Gestion de Projet, Économie et communication, Diffusions de médias, Video IP, Contrôle d'équipements",
      badges: [
        { label: "Major", icon: Award, color: "amber" }
      ],
    },
    {
      degree: "BTS AUDIOVISUEL SON",
      school: "BTS de Bayonne-Biarritz",
      location: "Biarritz",
      year: "2019",
      description: "Acoustique, Prise de son, Mixage, Post-production, Électronique audio, Technologies numériques, Traitement du signal, Réseaux audionumériques, Gestion de projet audiovisuel, Culture audiovisuelle",
      badges: [
        { label: "Major", icon: Award, color: "amber" }
      ],
    },
    {
      degree: "BAC SCIENTIFIQUE",
      school: "Lycée Jean Vigo",
      location: "Millau",
      year: "2016",
      description: "Mathématiques, Physique-Chimie (spécialité), Sciences de la Vie et de la Terre, Anglais section européenne, Musique (option facultative), Philosophie, Sciences de l'ingénieur",
      badges: [
        { label: "Mention Bien", icon: Award, color: "amber" },
        { label: "Section Anglais Européen", icon: Globe, color: "green" }
      ],
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
              Formations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Parcours académique en audiovisuel et technologies de l&apos;information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
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
                  <div className="p-3 rounded-lg bg-primary-500/10 group-hover:bg-primary-500 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary-500 group-hover:text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>

                {edu.badges && edu.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {edu.badges.map((badge, badgeIndex) => {
                      const Icon = badge.icon;
                      const colorClasses = {
                        amber: {
                          bg: "bg-gradient-to-r from-amber-500/20 to-yellow-500/20",
                          border: "border-amber-500/30",
                          icon: "text-amber-500",
                          text: "text-amber-600 dark:text-amber-400"
                        },
                        blue: {
                          bg: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
                          border: "border-blue-500/30",
                          icon: "text-blue-500",
                          text: "text-blue-600 dark:text-blue-400"
                        },
                        green: {
                          bg: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
                          border: "border-green-500/30",
                          icon: "text-green-500",
                          text: "text-green-600 dark:text-green-400"
                        }
                      };
                      const colors = colorClasses[badge.color as keyof typeof colorClasses];

                      return (
                        <div
                          key={badgeIndex}
                          className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full ${colors.bg} border ${colors.border}`}
                        >
                          <Icon className={`h-3.5 w-3.5 ${colors.icon}`} />
                          <span className={`text-xs font-semibold ${colors.text}`}>
                            {badge.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <p className="text-primary-500 font-semibold mb-1">{edu.school}</p>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>

                {edu.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
