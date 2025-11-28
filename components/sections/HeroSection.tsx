"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-background to-accent-500/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20"
          >
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">
              Ingénierie Audiovisuelle & Systèmes IP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block">Bienvenue chez</span>
            <span className="block bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              ZIZAR
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground"
          >
            Expert en solutions audiovisuelles sur IP, consulting technique et
            gestion de projets pour broadcasters et production vidéo. Conception et fabrication de régies fly modulaires et systèmes de réalisation/streaming compacts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20"
            >
              Discutons de votre projet
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-500 font-medium hover:bg-primary-500/10 transition-colors"
            >
              Découvrir mes services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-16"
          >
            <a
              href="#services"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary-500 transition-colors"
            >
              <span className="text-sm mb-2">Découvrir</span>
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
