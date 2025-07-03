"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/language-context";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();

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
      y: -10,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const handleLanguageSwitch = () => {
    // Toggle language between EN and ES
    const newLang = lang === "en" ? "es" : "en";
    setLang(newLang);
    setIsOpen(false); // Close the mobile menu when switching language
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-3 left-0 right-0 z-[100] flex justify-center mx-2"
    >
      {/* Mobile Navbar */}
      <motion.div
        layout
        className="w-full mx-2 md:hidden rounded-2xl bg-white/30 backdrop-blur-lg border border-white shadow-xl shadow-orange-400/20 px-4"
      >
        {/* Top bar with logo and hamburger */}
        <div className="flex justify-between items-center py-3">
          <Link
            href="/"
            className="w-12 h-auto hover:rotate-12 transition duration-200"
          >
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
                {[
                  { label: t("navbar.classes"), href: "/classes" },
                  { label: t("navbar.about"), href: "/about" },
                  { label: t("navbar.contact"), href: "/contact" },
                ].map((item, index) => (
                  <motion.div key={index} variants={buttonVariants}>
                    <Button
                      asChild
                      className="w-full text-orange-800 text-md bg-transparent hover:bg-transparent"
                    >
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        {item.label}
                      </Link>
                    </Button>
                  </motion.div>
                ))}

                {/* Mobile Language Switcher */}
                <motion.div variants={buttonVariants}>
                  <Button
                    onClick={handleLanguageSwitch}
                    className="w-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full text-white px-6 py-2 text-md"
                  >
                    {lang === "en" ? "ES" : "EN"}
                  </Button>
                </motion.div>

                {/* Mobile Log in Button */}
                <motion.div variants={buttonVariants}>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full border border-transparent text-white px-8 py-4 text-md hover:shadow-lg hover:shadow-orange-600/20 duration-100 transition-all"
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      {t("navbar.login")}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full max-w-6xl justify-between items-center px-4 py-2 bg-white/30 rounded-full backdrop-blur-lg border border-white shadow-xl shadow-orange-400/20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="w-12 h-auto hover:rotate-12 transition duration-200"
          >
            <img
              src="/fetch1.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <Button
            asChild
            className="bg-transparent text-md text-orange-800 hover:bg-transparent hover:text-orange-400/50"
          >
            <Link href="/classes">{t("navbar.classes")}</Link>
          </Button>
          <Button
            asChild
            className="bg-transparent text-md text-orange-800 hover:bg-transparent hover:text-orange-400/50"
          >
            <Link href="/about">{t("navbar.about")}</Link>
          </Button>
          <Button
            asChild
            className="bg-transparent text-md text-orange-800 hover:bg-transparent hover:text-orange-400/50"
          >
            <Link href="/contact">{t("navbar.contact")}</Link>
          </Button>

          {/* Desktop Language Switcher */}
          <Button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="bg-gradient-to-r from-red-400 to-orange-300 text-white rounded-full px-5 py-2"
          >
            {lang === "en" ? "ES" : "EN"}
          </Button>

          <Button
            className="bg-gradient-to-r from-red-400 to-orange-300 text-white text-md transition-all shadow-lg hover:shadow-sm shadow-orange-400/50 hover:shadow-orange-400/50 rounded-full px-6"
          >
            {t("navbar.login")}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
