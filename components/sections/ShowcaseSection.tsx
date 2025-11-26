"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, Eye } from "lucide-react"
import { Container } from "@/components/ui/Container"
import Image from "next/image"

export default function ShowcaseSection() {
  const [activeItems, setActiveItems] = useState<Record<number, boolean>>({})

  const toggleView = (itemId: number) => {
    setActiveItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const showcaseItems = [
    {
      id: 1,
      before: "/avatar-before.png",
      after: "/avatar-after.jpg",
      description: "Yapay zeka ile mükemmel vücut haritalama ve sanal avatar oluşturma",
      delay: 0.2
    },
    {
      id: 2,
      before: "/classic-try-on-before.jpeg", 
      after: "/classic-try-on-after.jpeg",
      description: "Gerçekçi kumaş simülasyonu ile klasik deneme modu",
      delay: 0.4
    },
    {
      id: 3,
      before: "/product-before.png",
      after: "/product-after.jpg", 
      description: "Ürün-model uyumu ile anında stil dönüşümü",
      delay: 0.6
    },
    {
      id: 4,
      before: "/text-to-model-before.png",
      after: "/text-to-model-after.jpeg",
      description: "Yapay zeka destekli metin-model oluşturma ve stil önerileri",
      delay: 0.8
    }
  ]

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sihiri</span> Görün
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Gerçek müşteriler, gerçek sonuçlar. Fashaura AI'nın moda alışverişini nasıl dönüştürdüğünü görün.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols- md:grid-cols-3 lg:grid-col-2 xl:grid-cols-2 gap-8">
          {showcaseItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Before/After Images */}
                <div className="relative mb-6 overflow-hidden rounded-xl cursor-pointer" onClick={() => toggleView(item.id)}>
                  <motion.div 
                    className="flex transition-transform duration-700 ease-in-out"
                    animate={{ x: activeItems[item.id] ? "-100%" : "0%" }}
                    transition={{ 
                      duration: 0.7,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Before Image */}
                    <div className="w-full shrink-0 relative">
                      <Image
                        width={400}
                        height={533}
                        src={item.before}
                        alt="Dönüşüm öncesi"
                        className="aspect-3/4 object-cover rounded-lg w-full p-2"
                      />
                      <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                        Önce
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="w-full shrink-0 relative">
                      <Image
                        width={400}
                        height={533}
                        src={item.after}
                        alt="Dönüşüm sonrası"
                        className="aspect-3/4 object-cover rounded-lg w-full"
                      />
                      <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Sonra
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Click hint */}
                  <motion.div 
                    className="absolute bottom-2 right-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg cursor-pointer flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleView(item.id)
                    }}
                  >
                    <Eye className="w-3 h-3" />
                    {activeItems[item.id] ? 'Önceki Hali' : 'Sonraki Hali'}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating action button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: item.delay + 0.3 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                onClick={() => toggleView(item.id)}
                className="absolute top-4 right-4 w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 shadow-lg rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 border-2 border-white"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Tüm Stilleri Keşfet
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  )
}
