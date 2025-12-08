"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ShowcaseSection() {
  const { t } = useLanguage();
  const [activeItems, setActiveItems] = useState<Record<number, boolean>>({});

  const toggleView = (itemId: number) => {
    setActiveItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const showcaseItems = [
    {
      id: 1,
      before: "/avatar-before.png",
      after: "/avatar-after.jpg",
      description: t.showcase.items.avatar,
      delay: 0.2,
    },
    {
      id: 2,
      before: "/classic-try-on-before.jpeg",
      after: "/classic-try-on-after.jpeg",
      description: t.showcase.items.classicTryOn,
      delay: 0.4,
    },
    {
      id: 3,
      before: "/product-before.png",
      after: "/product-after.jpg",
      description: t.showcase.items.productMatch,
      delay: 0.6,
    },
    {
      id: 4,
      before: "/text-to-model-before.png",
      after: "/text-to-model-after.jpeg",
      description: t.showcase.items.textToModel,
      delay: 0.8,
    },
  ];

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
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.showcase.title.highlight}
              </span>{" "}
              {t.showcase.title.normal}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.showcase.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {showcaseItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Before/After Images */}
                <div
                  className="relative mb-4 lg:mb-6 overflow-hidden rounded-xl cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600"
                  onClick={() => toggleView(item.id)}
                >
                  <motion.div
                    className="flex transition-transform duration-700 ease-in-out"
                    animate={{ x: activeItems[item.id] ? "-100%" : "0%" }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Before Image */}
                    <div className="w-full shrink-0 relative">
                      <Image
                        width={300}
                        height={400}
                        src={item.before}
                        alt="Before transformation"
                        className="aspect-[3/4] object-cover rounded-lg w-full p-3 lg:p-4 filter blur-[0.5px] hover:blur-none transition-all duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                        {t.common.before}
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="w-full shrink-0 relative">
                      <Image
                        width={300}
                        height={400}
                        src={item.after}
                        alt="After transformation"
                        className="aspect-[3/4] object-cover rounded-lg w-full p-2 lg:p-3"
                      />
                      <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                        {t.common.after}
                      </div>
                    </div>
                  </motion.div>

                  {/* Click hint */}
                  <motion.div
                    className="absolute bottom-3 right-3 bg-linear-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium shadow-lg cursor-pointer flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleView(item.id);
                    }}
                  >
                    <Eye className="w-3 h-3" />
                    {activeItems[item.id] ? t.showcase.toggleAfter : t.showcase.toggleBefore}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm leading-relaxed px-2">
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
                className="absolute top-3 right-3 w-10 h-10 lg:w-12 lg:h-12 bg-linear-to-r from-purple-600 to-pink-600 shadow-lg rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 border-2 border-white"
              >
                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
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
        ></motion.div>
      </Container>
    </section>
  );
}
