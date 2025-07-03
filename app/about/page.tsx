"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();

  // Fallback empty array if undefined
  const paragraphs = t("about.paragraphs") as string[] ?? [];
  const highlights = t("about.highlights") as string[] ?? [];

  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white via-pink-100 to-orange-100 px-6 py-20 text-orange-800">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent text-center"
        >
          {t("about.title")}
        </motion.h1>

        {/* Paragraphs */}
        {Array.isArray(paragraphs) && paragraphs.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            {text}
          </motion.p>
        ))}

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 pt-10"
        >
          {Array.isArray(highlights) && highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1" />
              <p className="text-md leading-relaxed">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
