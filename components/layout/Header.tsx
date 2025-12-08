"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import LanguageDropdown from '@/components/ui/LanguageDropdown';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-indigo-700/90 backdrop-blur-md border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Fashaura<span className="text-yellow-300">AI</span>
            </span>
          </motion.div>

          {/* Language Dropdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <LanguageDropdown />
          </motion.div>
        </div>
      </Container>
    </header>
  );
}