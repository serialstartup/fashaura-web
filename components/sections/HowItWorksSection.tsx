"use client";

import { motion } from "motion/react";
import { Upload, Scan, User, Type } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorksSection() {
  const { t } = useLanguage();
  
  const aiModes = [
    {
      icon: Upload,
      title: t.howItWorks.modes.classic.title,
      description: t.howItWorks.modes.classic.description,
      color: "purple",
      delay: 0.2,
    },
    {
      icon: Scan,
      title: t.howItWorks.modes.productMatch.title,
      description: t.howItWorks.modes.productMatch.description,
      color: "pink",
      delay: 0.4,
    },
    {
      icon: User,
      title: t.howItWorks.modes.avatar.title,
      description: t.howItWorks.modes.avatar.description,
      color: "indigo",
      delay: 0.6,
    },
    {
      icon: Type,
      title: t.howItWorks.modes.textToModel.title,
      description: t.howItWorks.modes.textToModel.description,
      color: "emerald",
      delay: 0.8,
    },
  ];

  const colorVariants = {
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700",
    },
    pink: {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      text: "text-pink-600 dark:text-pink-400",
      border: "border-pink-200 dark:border-pink-700",
    },
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-200 dark:border-indigo-700",
    },
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-200 dark:border-emerald-700",
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.howItWorks.title.line1}{" "}
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.howItWorks.title.line2}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiModes.map((mode, index) => {
            const Icon = mode.icon;
            const colors =
              colorVariants[mode.color as keyof typeof colorVariants];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: mode.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-8 min-h-[340px] rounded-2xl border-2 ${colors.border} ${colors.bg} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {mode.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Connecting line (except for the last item) */}
                  {index < aiModes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 transform -translate-y-1/2" />
                  )}

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        ></motion.div>
      </Container>
    </section>
  );
}
