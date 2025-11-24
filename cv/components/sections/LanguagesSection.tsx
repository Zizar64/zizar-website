"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";

export function LanguagesSection() {
  const languages = [
    {
      name: "Français",
      level: "Langue maternelle",
      percentage: 100,
    },
    {
      name: "Anglais",
      level: "B2 TOEIC | Pratique professionnelle quotidienne",
      percentage: 80,
    },
    {
      name: "Espagnol",
      level: "A2",
      percentage: 40,
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
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Langues
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compétences linguistiques et niveau de maîtrise
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500 transition-colors">
                      <LanguagesIcon className="h-5 w-5 text-primary-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    {lang.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
