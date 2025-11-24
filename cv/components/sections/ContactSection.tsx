"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Car, Linkedin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lucas.izardpro@gmail.com",
      href: "mailto:lucas.izardpro@gmail.com",
    },
    {
      icon: Phone,
      label: "Portable",
      value: "+33 6 31 02 30 80",
      href: "tel:+33631023080",
    },
    {
      icon: Car,
      label: "Permis",
      value: "Permis A, B et C",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Lucas Izard (500+ connexions)",
      href: "https://www.linkedin.com/in/lucas-izard-92659b188/",
      centered: true, // Will be centered on desktop
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
            Informations de{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${item.centered ? 'md:col-start-2 lg:col-start-2' : ''}`}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-background border border-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className="p-3 rounded-lg bg-primary-500/10 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <item.icon className="h-5 w-5 text-primary-500 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-background border border-border">
                  <div className="p-3 rounded-lg bg-primary-500/10">
                    <item.icon className="h-5 w-5 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
