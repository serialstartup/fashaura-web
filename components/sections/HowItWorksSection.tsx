"use client"

import { motion } from "motion/react"
import { Upload, Scan, Download, CheckCircle } from "lucide-react"
import { Container } from "@/components/ui/Container"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Take a photo or upload an existing one. Our AI works with any standard photo.",
      color: "purple",
      delay: 0.2
    },
    {
      icon: Scan,
      title: "AI Processing",
      description: "Our advanced AI analyzes your body shape and creates a personalized 3D model.",
      color: "pink",
      delay: 0.4
    },
    {
      icon: CheckCircle,
      title: "Try On Clothes",
      description: "Browse thousands of items and see how they look on your virtual model instantly.",
      color: "indigo",
      delay: 0.6
    },
    {
      icon: Download,
      title: "Save & Share",
      description: "Save your favorite looks and share them with friends or on social media.",
      color: "emerald",
      delay: 0.8
    }
  ]

  const colorVariants = {
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700"
    },
    pink: {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      text: "text-pink-600 dark:text-pink-400",
      border: "border-pink-200 dark:border-pink-700"
    },
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-200 dark:border-indigo-700"
    },
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-200 dark:border-emerald-700"
    }
  }

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
              How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get started with Fashaura AI in just four simple steps. 
              It's that easy to revolutionize your shopping experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorVariants[step.color as keyof typeof colorVariants]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-8 rounded-2xl border-2 ${colors.border} ${colors.bg} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting line (except for the last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 transform -translate-y-1/2" />
                  )}

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Start Trying On Now
          </motion.button>
        </motion.div>
      </Container>
    </section>
  )
}
