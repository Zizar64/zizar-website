"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-background to-accent-500/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20"
          >
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">
              Ingénieur Broadcast
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              Lucas Izard
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Ingénieur Broadcast spécialisé en infrastructures IP, plus de 5 ans d&apos;expérience chez des leaders du secteur.
            Expert en intégration de systèmes, gestion de projets techniques et support.
            Certification Dante et compétences AWS pour infrastructures cloud.
            Polyvalent IT/Audiovisuel, capable d&apos;intervenir du terrain à la conception.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
              +5 ans d&apos;expérience
            </span>
            <span className="px-4 py-2 rounded-full bg-accent-500/10 text-accent-500 text-sm font-medium">
              Infrastructures IP
            </span>
            <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
              DANTE Certified
            </span>
            <span className="px-4 py-2 rounded-full bg-accent-500/10 text-accent-500 text-sm font-medium">
              IT & Audiovisuel
            </span>
            <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
              Terrain & Conception
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
