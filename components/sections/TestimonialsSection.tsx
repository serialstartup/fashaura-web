"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Marquee } from "@/components/ui/marquee"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TestimonialsSection() {
  const { t } = useLanguage();
  
  const testimonials = t.testimonials.items.map((item, index) => ({
    id: index + 1,
    name: item.name,
    avatar: "/api/placeholder/60/60",
    rating: 5,
    quote: item.quote,
    role: item.role
  }));

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-w-[350px] mx-4"
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
        <Quote className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial.quote}"
      </p>

      {/* User info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.testimonials.title.line1} <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t.testimonials.title.line2}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Testimonials Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Marquee className="py-4" pauseOnHover>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </motion.div>

        {/* Second row with reverse direction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-8"
        >
          <Marquee className="py-4" pauseOnHover reverse>
            {testimonials.slice().reverse().map((testimonial) => (
              <TestimonialCard key={`reverse-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </Marquee>
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />
      </Container>
    </section>
  )
}