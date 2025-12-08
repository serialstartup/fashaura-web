"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WordRotate } from "@/components/ui/word-rotate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToBetaSignup = () => {
    const element = document.getElementById('beta-signup');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-20 left-10 text-purple-400 dark:text-purple-300"
      >
        <Sparkles size={32} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-20 right-10 text-pink-400 dark:text-pink-300"
      >
        <Zap size={40} />
      </motion.div>

      <Container className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-gray-900 dark:text-white"
            >
              {t.hero.title.line1}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-4"
            >
              <SparklesText
                colors={{ first: "#9333ea", second: "#ec4899" }}
                className="text-5xl md:text-7xl lg:text-8xl"
              >
                <WordRotate
                  words={t.hero.title.rotating}
                  duration={2000}
                  className="bg-linear-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
                />
              </SparklesText>
              {t.hero.title.line3 && (
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block text-gray-900 dark:text-white mb-4"
                >
                  {t.hero.title.line3}
                </motion.span>
              )}
            </motion.div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToBetaSignup}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              {t.hero.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
