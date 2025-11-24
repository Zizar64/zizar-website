"use client";

import { motion } from "framer-motion";
import { Code, Network, Cloud, Wifi, Server, Zap } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Wifi,
      title: "Audio IP",
      color: "primary",
      skills: [
        { name: "AES67", percentage: 75 },
        { name: "DANTE", percentage: 85 },
        { name: "SIP", percentage: 90 },
      ],
    },
    {
      icon: Network,
      title: "Video IP",
      color: "accent",
      skills: [
        { name: "SMPTE2110", percentage: 70 },
        { name: "NDI", percentage: 85 },
        { name: "IPMX", percentage: 30 },
      ],
    },
    {
      icon: Code,
      title: "INTERCOM",
      color: "primary",
      skills: [
        { name: "RTS", percentage: 85 },
        { name: "RIEDEL", percentage: 80 },
        { name: "Clearcom", percentage: 35 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud",
      color: "accent",
      skills: [
        { name: "AWS EC2", percentage: 60 },
        { name: "AWS S3", percentage: 70 },
        { name: "AWS Networking", percentage: 65 },
      ],
    },
    {
      icon: Server,
      title: "Infrastructure",
      color: "primary",
      skills: [
        { name: "TCP/IP", percentage: 70 },
        { name: "VLAN", percentage: 75 },
        { name: "QoS", percentage: 65 },
        { name: "Virtualisation", percentage: 80 },
      ],
    },
    {
      icon: Zap,
      title: "Automation & Scripting",
      color: "accent",
      skills: [
        { name: "Python", percentage: 55 },
        { name: "Bash/Shell", percentage: 65 },
        { name: "API REST", percentage: 55 },
      ],
    },
  ];

  const technologies = [
    "SMPTE 2110",
    "Python",
    "Node.js",
    "Docker",
    "Ravenna",
    "Scality",
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
            Protocoles &{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Standards
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise approfondie dans les technologies audiovisuelles et infrastructures IP
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${
                    category.color === "primary" ? "bg-primary-500/10" : "bg-accent-500/10"
                  } group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-accent-500 transition-all`}>
                    <category.icon className={`h-6 w-6 ${
                      category.color === "primary" ? "text-primary-500" : "text-accent-500"
                    } group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-sm font-bold ${
                          category.color === "primary" ? "text-primary-500" : "text-accent-500"
                        }`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + idx * 0.1 }}
                          className={`absolute top-0 left-0 h-full rounded-full ${
                            category.color === "primary"
                              ? "bg-gradient-to-r from-primary-500 to-primary-600"
                              : "bg-gradient-to-r from-accent-500 to-accent-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maîtrises */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Maîtrises
            </span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-sm font-medium hover:border-primary-500/50 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
