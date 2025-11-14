"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Directeur Technique",
    company: "Broadcaster National",
    content:
      "Expertise technique exceptionnelle sur notre migration ST 2110. Zizar a su comprendre nos enjeux et proposer des solutions pragmatiques et efficaces.",
    rating: 5,
    avatar: "JD",
  },
  {
    name: "Marie Martin",
    role: "Chef de Projet",
    company: "Production Vidéo Mobile",
    content:
      "Professionnel réactif et compétent. L'intégration NDI sur notre car régie s'est déroulée sans accroc grâce à son expertise.",
    rating: 5,
    avatar: "MM",
  },
  {
    name: "Pierre Lefebvre",
    role: "Responsable Infrastructure",
    company: "Broadcaster Régional",
    content:
      "Conseil avisé et accompagnement de qualité sur notre stratégie cloud. Une vraie valeur ajoutée pour notre équipe.",
    rating: 5,
    avatar: "PL",
  },
];

export function TestimonialsSection() {
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
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de mes clients est ma priorité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary-500/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-500/20" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
