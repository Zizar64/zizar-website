"use client";

import { motion } from "framer-motion";
import { Settings, Users, Video } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Consulting & Gestion de Projets",
    description:
      "Accompagnement stratégique et technique pour vos projets audiovisuels. Analyse des besoins, conception d'architecture et suivi de mise en œuvre.",
    features: [
      "Analyse technique et audit",
      "Architecture de solutions IP",
      "Gestion de projet end-to-end",
      "Formation et documentation",
    ],
  },
  {
    icon: Video,
    title: "Renforts Ingénierie Systèmes IP",
    description:
      "Expertise technique pointue en vidéo et audio sur IP pour renforcer vos équipes sur des projets complexes.",
    features: [
      "ST 2110 / NDI / AES67",
      "Intégration cloud AWS",
      "Workflows broadcast",
      "Optimisation réseau",
    ],
  },
  {
    icon: Users,
    title: "Opérateur Polyvalent",
    description:
      "Intervention opérationnelle sur site pour assurer le bon déroulement de vos productions et événements.",
    features: [
      "Régie vidéo et audio",
      "Support technique live",
      "Maintenance préventive",
      "Dépannage rapide",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Services & Prestations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une expertise complète pour accompagner vos projets audiovisuels de
            la conception à la réalisation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative h-full p-8 bg-card border border-border rounded-2xl hover:border-primary-500/50 transition-colors">
                <div className="inline-flex p-3 rounded-xl bg-primary-500/10 text-primary-500 mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
