"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Heart, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-3 left-0 right-0 z-[100] flex justify-center mx-4"
    >
      <motion.div
        layout
        className="w-full mx-2 md:hidden rounded-2xl bg-white/30 backdrop-blur-lg border border-white 
        shadow-xl shadow-orange-400/20 px-4"
      >
        {/* Top bar with logo and hamburger */}
        <div className="flex justify-between items-center py-3">
  <Link href="/" className="w-12 h-auto hover:rotate-12 transition duration-200">
    <img
      src="/fetch1.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </Link>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-black"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
        {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
              <div className="flex flex-col pb-6 space-y-4">
                {["Courses", "About", "Contact"].map((label, index) => (
                  <motion.div key={index} variants={buttonVariants}>
                    <Button className="w-full text-orange-800 text-md bg-transparent hover:bg-transparent">
                      {label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div variants={buttonVariants}>
                  <Button className="w-full bg-gradient-to-r from-red-400 to-orange-300
                    rounded-full border border-transparent text-white px-8 py-4 text-md
                    hover:shadow-lg hover:shadow-orange-600/20 duration-100 transition-all">
                    Log in
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full max-w-7xl justify-between items-center px-4 py-2 bg-white/30 
      rounded-full backdrop-blur-lg border border-white shadow-xl shadow-orange-400/20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <Link href="/" className="w-12 h-auto hover:rotate-12 transition duration-200">
    <img
      src="/fetch1.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </Link>

        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6">
        <Button asChild className="bg-transparent text-md text-orange-800 hover:bg-transparent hover:text-orange-400/50">
        <Link href="/courses">Courses</Link>
        </Button>
        <Button asChild className="bg-transparent text-md text-orange-800 hover:bg-transparent hover:text-orange-400/50">
        <Link href="/about">About</Link>
        </Button>
        <Button asChild className="bg-transparent text-md text-orange-800 hover:bg-transparent hover:text-orange-400/50">
        <Link href="/contact">Contact</Link>
        </Button>
          <Button className="bg-gradient-to-r from-red-400 to-orange-300 text-white text-md transition-all 
          shadow-lg hover:shadow-sm shadow-orange-400/50 hover:shadow-orange-400/50 rounded-full px-6">
            Log in
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
