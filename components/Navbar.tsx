"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 lg:backdrop-blur-lg lg:border-b border-white/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-300 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-orange-800">
              K9Coach
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="text-black hover:text-orange-600 bg-transparent hover:bg-transparent">
              Features
            </Button>
            <Button className="text-black hover:text-orange-600 bg-transparent hover:bg-transparent">
              Pricing
            </Button>
            <Button className="bg-gradient-to-r from-red-400 to-orange-300
                rounded-full border border-transparent text-white px-8 py-4 text-sm
                hover:shadow-lg hover:shadow-orange-600/20 duration-100 transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-800 hover:text-orange-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-lg border-t border-white/80 shadow-xl shadow-orange-800/30 rounded-2xl mx-8">
          <div className="px-4 pt-4 pb-6 space-y-4">
          <Button className="w-full text-black hover:text-orange-600 bg-transparent hover:bg-transparent">
              Features
            </Button>
            <Button className="w-full text-black hover:text-orange-600 bg-transparent hover:bg-transparent">
              Pricing
            </Button>
            <Button className="w-full bg-gradient-to-r from-red-400 to-orange-300
                rounded-full border border-transparent text-white px-8 py-4 text-sm
                hover:shadow-lg hover:shadow-orange-600/20 duration-100 transition-all">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
