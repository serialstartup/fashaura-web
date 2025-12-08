"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, CheckCircle, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BetaSignupSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Submit to Mailchimp
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setIsSubscribed(true);

      // Trigger confetti effect
      setTimeout(() => {
        confettiRef.current?.fire({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#9333ea", "#ec4899", "#06b6d4"],
          startVelocity: 45,
          scalar: 1.2,
        });
      }, 300);
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <section className="py-24 bg-linear-to-br from-purple-600 via-pink-600 to-indigo-700 relative overflow-hidden">
      {/* Confetti Canvas */}
      <Confetti
        ref={confettiRef}
        className="absolute inset-0 pointer-events-none"
        manualstart
      />

      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              {t.betaSignup.badge}
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.betaSignup.title.line1}
              <br />
              <SparklesText
                colors={{ first: "#fde047", second: "#fb923c" }}
                className="text-4xl md:text-5xl lg:text-6xl inline-block mt-2"
              >
                {t.betaSignup.title.line2}
              </SparklesText>
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t.betaSignup.subtitle}
            </p>
          </motion.div>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.betaSignup.successTitle}
                </h3>
                <p className="text-white/90 mb-4">
                  {t.betaSignup.successMessage}
                </p>
                <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                  <Users className="w-4 h-4" />
                  {t.betaSignup.successSubtext}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder={t.betaSignup.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 cursor-pointer bg-white text-purple-600 font-semibold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-purple-600/20 border-t-purple-600 rounded-full animate-spin" />
                    ) : (
                      <>
                        {t.betaSignup.submitButton}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              <p className="text-white/70 text-sm mb-8">
                {t.betaSignup.privacyText}
              </p>
            </motion.div>
          )}

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12"
          >
            {t.betaSignup.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white/90"
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social proof */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2,500+</div>
                <div className="text-sm">Beta Başvurusu</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                <div className="text-sm">Beklenen Puan</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2025 Q1</div>
                <div className="text-sm">Lansman Tarihi</div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}
