"use client";

import { motion } from "motion/react";
import { Shield, Lock, Eye, Database, ExternalLink, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacySection() {
  const { t } = useLanguage();
  
  const privacyFeatures = [
    {
      icon: Shield,
      title: t.privacy.features.encryption.title,
      description: t.privacy.features.encryption.description,
      color: "green",
    },
    {
      icon: Lock,
      title: t.privacy.features.storage.title,
      description: t.privacy.features.storage.description,
      color: "blue",
    },
    {
      icon: Eye,
      title: t.privacy.features.design.title,
      description: t.privacy.features.design.description,
      color: "purple",
    },
    {
      icon: Database,
      title: t.privacy.features.compliance.title,
      description: t.privacy.features.compliance.description,
      color: "amber",
    },
  ];

  const colorVariants = {
    green:
      "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    purple:
      "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
    amber:
      "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              {t.privacy.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.privacy.title.line1}{" "}
              <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {t.privacy.title.line2}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.privacy.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Privacy Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const colors =
              colorVariants[feature.color as keyof typeof colorVariants];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${colors} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {t.privacy.trustBadges.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.privacy.trustBadges.items.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-linear-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {badge.name}
                </h4>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                  {badge.status}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.privacy.promise.title}
            </h3>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              {t.privacy.promise.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                target="_blank"
                href="https://serialstartup.github.io/virtual-room-mobile/privacy-policy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all"
              >
                {t.privacy.promise.privacyPolicyButton}
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                target="_blank"
                href="https://serialstartup.github.io/virtual-room-mobile/terms-and-conditions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                {t.privacy.promise.securityDocButton}
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.privacy.footer.copyright} •
            <a
              href="#"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-1"
            >
              {t.privacy.footer.privacyPolicy}
            </a>{" "}
            •
            <a
              href="#"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-1"
            >
              {t.privacy.footer.termsOfService}
            </a>{" "}
            •
            <a
              href="#"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-1"
            >
              {t.privacy.footer.contactUs}
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
