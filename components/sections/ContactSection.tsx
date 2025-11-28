"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@zizar.fr",
    href: "mailto:contact@zizar.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 XX XX XX XX",
    href: "tel:+33600000000",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "France - Interventions nationales",
    href: null,
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = {
        access_key: "0c99fbb0-5645-47e9-be46-ea7e6d76f82b",
        name: data.name,
        email: data.email,
        company: data.company || "",
        subject: data.subject,
        message: data.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discutons de votre projet audiovisuel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-500">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <h4 className="font-bold mb-3">Disponibilité</h4>
              <p className="text-muted-foreground mb-4">
                Je réponds généralement sous 24h. Pour les urgences, n&apos;hésitez
                pas à me contacter directement par téléphone.
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500 font-medium">
                  Disponible pour nouveaux projets
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Entreprise
                </label>
                <input
                  {...register("company")}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Sujet *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                  placeholder="Sujet de votre demande"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
