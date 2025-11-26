"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Heart, Share2, ShoppingBag } from "lucide-react"
import { Container } from "@/components/ui/Container"

export default function ShowcaseSection() {
  const showcaseItems = [
    {
      id: 1,
      before: "/api/placeholder/300/400",
      after: "/api/placeholder/300/400",
      title: "Summer Dress Collection",
      category: "Dresses",
      price: "$89.99",
      likes: 1247,
      delay: 0.2
    },
    {
      id: 2,
      before: "/api/placeholder/300/400", 
      after: "/api/placeholder/300/400",
      title: "Casual Streetwear",
      category: "Urban",
      price: "$124.99",
      likes: 892,
      delay: 0.4
    },
    {
      id: 3,
      before: "/api/placeholder/300/400",
      after: "/api/placeholder/300/400", 
      title: "Elegant Business Suit",
      category: "Professional",
      price: "$299.99",
      likes: 634,
      delay: 0.6
    },
    {
      id: 4,
      before: "/api/placeholder/300/400",
      after: "/api/placeholder/300/400",
      title: "Cozy Winter Outfit",
      category: "Winter",
      price: "$159.99",
      likes: 1456,
      delay: 0.8
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              See the <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Magic</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real customers, real results. See how Fashaura AI transforms the way people shop for fashion.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {showcaseItems.map((item, index) => (
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
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <motion.div 
                    className="flex transition-transform duration-700 ease-in-out"
                    whileHover={{ x: "-50%" }}
                  >
                    {/* Before Image */}
                    <div className="w-full flex-shrink-0 relative">
                      <div className="aspect-[3/4] bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Before</span>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                        Original
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="w-full flex-shrink-0 relative">
                      <div className="aspect-[3/4] bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">After</span>
                      </div>
                      <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Try-On
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Hover hint */}
                  <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover to compare
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        {item.category}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.price}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.likes}</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-500 hover:text-purple-600 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Try It
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Floating action button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: item.delay + 0.3 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-200 border border-gray-200 dark:border-gray-700"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Explore All Styles
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  )
}
