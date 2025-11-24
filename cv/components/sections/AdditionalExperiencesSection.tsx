"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function AdditionalExperiencesSection() {
  const experiences = [
    {
      title: "Chef d'équipements",
      company: "DCI Event",
      location: "Biarritz",
      period: "2020-2021",
      type: "Intermittent",
    },
    {
      title: "Chef électricien",
      company: "Studios Fontaine",
      location: "Hendaye",
      period: "2020-2021",
      type: "Freelance",
    },
    {
      title: "Technicien Son",
      company: "ACE Event",
      location: "Nouvelle Aquitaine",
      period: "2019-2020",
      type: "Intermittent",
    },
    {
      title: "Assistant Son",
      company: "Atlantis Télévision",
      location: "Nouvelle Aquitaine",
      period: "2019",
      type: "Stage",
    },
    {
      title: "Stagiaire Son",
      company: "France Bleu",
      location: "Bayonne",
      period: "2018",
      type: "Stage",
    },
    {
      title: "Assistant son",
      company: "Natural Games",
      location: "Millau",
      period: "2015-2020",
      type: "Freelance",
    },
  ];

  const stats = [
    { number: "200+", label: "Événements couverts" },
    { number: "30+", label: "Personnes formées" },
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
            Expériences{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Complémentaires
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Parcours riche et diversifié dans l&apos;audiovisuel depuis le début de ma carrière
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-background border border-border flex-1 md:min-w-[280px]"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full p-4 rounded-lg bg-background border border-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-md hover:shadow-primary-500/10">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500 transition-colors flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-primary-500 group-hover:text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 truncate">{exp.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 truncate">{exp.company}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-500">
                  {exp.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Expérience variée acquise à travers de nombreuses missions en tant qu&apos;intermittent et freelance,
            travaillant avec des broadcasters, producteurs et organisateurs d&apos;événements
          </p>
        </motion.div>
      </div>
    </section>
  );
}
