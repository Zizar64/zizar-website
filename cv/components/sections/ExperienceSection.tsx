"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Chargé d'exploitation",
      company: "AMP Visual TV",
      location: "Paris",
      period: "Depuis Juin 2024",
      type: "CDI",
      missions: [
        "Conception de 8 OB VAN remote production",
        "Formation de plus de 30 intermittents aux évolutions IP",
        "Relationnel client Canal+, BeIN, 21P, ECPAD",
      ],
      technologies: "DANTE, VSM LAWO, Riedel Mediornet",
    },
    {
      title: "INGÉNIEUR Intégration & Support",
      company: "CANAL+",
      location: "Paris",
      period: "Fev 2024",
      type: "Mission via AskiDA - Société de Services en Ingénierie",
      missions: [
        "Migration de postes vers infrastructure Cerebrum",
        "Déploiement de mise à jour Neuron",
      ],
      technologies: "Cerebrum, Neuron, SMPTE2110",
    },
    {
      title: "AUDIO SYSTEM ENGINEER",
      company: "WARNER BROS",
      location: "Paris",
      period: "Oct 2023 - Fev 2024",
      type: "Mission via AskiDA - Société de Services en Ingénierie",
      missions: [
        "Intégration Cloud AWS pour contribution distante",
        "Migration système audio vers Lawo Cores",
        "Configuration réseau AES67/SIP pour interconnexion multi-sites",
        "Support tier 3 : résolution de 50+ incidents critiques",
      ],
      technologies: "AWS (EC2, networking), Lawo Cores, AES67, SIP, Systèmes SIP",
    },
    {
      title: "BROADCAST SUPPORT ENGINEER",
      company: "Eurosport",
      location: "Paris",
      period: "Sept 2022 - Oct 2023",
      type: "Mission via AskiDA - Société de Services en Ingénierie",
      missions: [
        "Gestion incidents live : disponibilité 99.8% maintenue",
        "Formation utilisateurs : 30 opérateurs formés aux nouveaux outils",
        "Gestion de projets : coordination upgrade technique de 3 régies",
        "Documentation : + 20 procédures de troubleshooting",
      ],
      technologies: "AES67, SMPTE 2110, AMPP, AWS",
    },
    {
      title: "BROADCAST ENGINEER JR",
      company: "QVEST",
      location: "Paris",
      period: "2021 - 2022",
      type: "Mission via AskiDA - Société de Services en Ingénierie",
      missions: [
        "Déploiement système cloud privé Scality - France TV",
        "Déploiement et support système Mosart Vizrt - Avrotros",
      ],
      technologies: "AWS S3, NDI",
    },
    {
      title: "RESPONSABLE TECHNIQUE",
      company: "LA RUCHE",
      location: "Biarritz",
      period: "2020 - 2021",
      type: "CDI",
      missions: [
        "Gestion complète du studio : audio, vidéo, réseau",
        "Déploiement infrastructure réseau : câblage, configuration",
        "Réalisation broadcast multi-caméras",
      ],
      technologies: "",
    },
    {
      title: "Technicien Audiovisuel - Intermitent",
      company: "Freelance",
      location: "Nouvelle Aquitaine",
      period: "2019 - 2021",
      type: "Intermittent",
      missions: [],
      technologies: "",
    },
  ];

  return (
    <section className="py-16 bg-background">
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
              Professionnelles
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plus de 5 ans d&apos;expérience dans l&apos;ingénierie broadcast et les infrastructures IP
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-background" />
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary-500 font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground italic">{exp.type}</p>
                      </div>
                      <Briefcase className="h-6 w-6 text-primary-500 flex-shrink-0 ml-4" />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {exp.missions.length > 0 && (
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                        {exp.missions.map((mission, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start">
                            <span className={`inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 ${index % 2 === 0 ? "lg:ml-2 lg:order-2" : "mr-2"}`} />
                            <span className="flex-1">{mission}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies && (
                      <div className={`mt-4 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                        <p className="text-xs text-muted-foreground mb-2">Technologies :</p>
                        <p className="text-sm font-medium text-primary-500">{exp.technologies}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
