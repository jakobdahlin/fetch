"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/language-context";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex bg-orange-50 border border-orange-300 rounded-full p-1 w-36">
      {/* Sliding indicator */}
      <motion.div
        className="absolute top-1 left-1 w-1/2 h-8 bg-gradient-to-r from-red-400 to-orange-300 rounded-full shadow-md"
        layout
        animate={{
          x: lang === "es" ? "100%" : "0%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      {/* Buttons */}
      <div className="relative z-10 flex w-full justify-between text-sm font-medium">
        <button
          onClick={() => setLang("en")}
          className={`w-1/2 text-center rounded-full transition-colors duration-200 ${
            lang === "en" ? "text-white" : "text-orange-800"
          }`}
        >
          Eng
        </button>
        <button
          onClick={() => setLang("es")}
          className={`w-1/2 text-center rounded-full transition-colors duration-200 ${
            lang === "es" ? "text-white" : "text-orange-800"
          }`}
        >
          Esp
        </button>
      </div>
    </div>
  );
}
