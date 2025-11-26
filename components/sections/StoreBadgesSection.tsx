"use client"

import { motion } from "motion/react"
import { Smartphone, Shield, Zap, Sparkles } from "lucide-react"
import { Container } from "@/components/ui/Container"

export default function StoreBadgesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Tüm Platformlar",
      description: "iOS ve Android",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Gizlilik Öncelikli",
      description: "Verileriniz Korumalı",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Yıldırım Hızı",
      description: "Anında Deneme",
      delay: 0.6
    },
    {
      icon: Sparkles,
      title: "Yapay Zeka Destekli",
      description: "Gelişmiş Teknoloji",
      delay: 0.8
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20" />
      
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Yakında</span> İndirin
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              Devrimsel yapay zeka destekli sanal deneme teknolojimizle modanın geleceğini deneyimleyin.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl mb-4"
                >
                  <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          {/* App Store Badge */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="bg-black rounded-xl px-8 py-4 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-linear-to-br from-purple-600 to-pink-600 rounded" />
              </div>
              <div className="text-white">
                <p className="text-xs">İndir</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </div>
          </motion.div>

          {/* Google Play Badge */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="bg-black rounded-xl px-8 py-4 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-linear-to-br from-green-500 to-blue-500 rounded" />
              </div>
              <div className="text-white">
                <p className="text-xs">Al</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Tarayarak İndirin
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              QR kodu taramak ve uygulamayı anında indirmek için telefon kamerasını kullanın.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="w-32 h-32 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center border-2 border-gray-200 dark:border-gray-700">
              <div className="w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-sm">QR</div>
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-600 rounded-tl" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-600 rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-600 rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-600 rounded-br" />
          </motion.div>
        </motion.div>

        {/* Platform compatibility */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            iOS ve Android platformları için yakında
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Gerçek Zamanlı İşlem
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Gelişmiş Yapay Zeka
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              Güvenli ve Gizli
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
