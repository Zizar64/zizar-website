"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Migration vers ST 2110 : Les bonnes pratiques",
    excerpt:
      "Guide complet pour réussir votre migration d'une infrastructure SDI vers IP avec SMPTE ST 2110.",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Technical",
    slug: "migration-st-2110-bonnes-pratiques",
  },
  {
    title: "DANTE vs AES67 : Quel protocole audio choisir ?",
    excerpt:
      "Comparatif détaillé des deux principaux protocoles audio sur IP pour vous aider à faire le bon choix.",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Audio",
    slug: "dante-vs-aes67-comparatif",
  },
  {
    title: "AWS MediaLive pour le Broadcast : Retour d'expérience",
    excerpt:
      "Mon retour d'expérience sur l'utilisation d'AWS MediaLive pour des workflows broadcast professionnels.",
    date: "2024-01-05",
    readTime: "10 min",
    category: "Cloud",
    slug: "aws-medialive-broadcast-rex",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Blog & Actualités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partage de connaissances et retours d&apos;expérience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-full p-6 bg-card border border-border rounded-2xl hover:border-primary-500/50 transition-all hover:shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime} de lecture</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-500 font-medium hover:bg-primary-500/10 transition-colors"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
