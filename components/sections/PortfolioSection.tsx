"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const categories = ["Tous", "Broadcast", "Live Event", "Cloud", "Consulting"];

const projects = [
  {
    title: "Migration ST 2110 - Broadcaster National",
    category: "Broadcast",
    description:
      "Conception et déploiement d'une infrastructure complète ST 2110 pour une régie finale. Migration d'un système SDI legacy vers IP.",
    tags: ["ST 2110", "Evertz", "Networking", "Audio AES67"],
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Production Mobile NDI",
    category: "Live Event",
    description:
      "Mise en place d'un workflow NDI pour car régie mobile. Intégration multi-sources et streaming live.",
    tags: ["NDI", "Production", "Streaming", "Multi-cam"],
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Infrastructure Cloud AWS",
    category: "Cloud",
    description:
      "Architecture et déploiement d'une solution cloud pour distribution vidéo et transcoding à la demande.",
    tags: ["AWS", "MediaLive", "CloudFront", "S3"],
    image: "/images/projects/project3.jpg",
  },
  {
    title: "Audit Technique Système IP",
    category: "Consulting",
    description:
      "Audit complet d'une infrastructure broadcast IP. Recommandations d'optimisation et plan de migration.",
    tags: ["Audit", "Consulting", "Documentation", "Formation"],
    image: "/images/projects/project4.jpg",
  },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Portfolio & Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-unes de mes réalisations
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary-500/50 transition-all"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center">
                <div className="text-6xl opacity-10">📡</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
