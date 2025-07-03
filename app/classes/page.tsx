"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/hooks/useTranslation";

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Static class data with slugs and images
const staticSignatureClasses = [
  {
    slug: "puppy-class",
    image: "/images/classes/puppy.jpg",
  },
  {
    slug: "root-class",
    image: "/images/classes/root.jpg",
  },
];

const staticEverydayLife = [
  {
    slug: "environment-good-habits",
    image: "/images/classes/environment.jpg",
  },
  {
    slug: "callback",
    image: "/images/classes/callback.jpg",
  },
  {
    slug: "without-word",
    image: "/images/classes/withoutword.jpg",
  },
  {
    slug: "person-trail",
    image: "/images/classes/puppy.jpg",
  },
  {
    slug: "clicker",
    image: "/images/classes/clicker.jpg",
  },
  {
    slug: "tricks-tricks",
    image: "/images/classes/trickstricks.jpg",
  },
];

export default function ClassesPage() {
  const router = useRouter();
  const { t } = useTranslation();

  // Get translated text
  const translatedSignatureClasses = t("classesPage.signatureClasses");
  const translatedEverydayLife = t("classesPage.everydayLife");

  // Merge static data with translations
  const signatureClasses = staticSignatureClasses.map((cls, index) => ({
    ...cls,
    ...translatedSignatureClasses[index],
  }));

  const everydayLife = staticEverydayLife.map((cls, index) => ({
    ...cls,
    ...translatedEverydayLife[index],
  }));

  const handleStartClass = (slug: string) => {
    const isLoggedIn = false; // Replace with real auth later
    if (isLoggedIn) {
      router.push(`/class/${slug}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-orange-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              {t("classesPage.headerTitle")}
            </span>
          </h1>
          <p className="text-xl text-orange-800 max-w-2xl mx-auto">
            {t("classesPage.headerSubtitle")}
          </p>
        </motion.div>

        {/* Signature Classes */}
        <section className="mt-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                {t("classesPage.signatureTitle")}
              </span>
            </h1>
            <p className="text-md text-orange-800 max-w-5xl mx-auto">
              {t("classesPage.signatureSubtitle")}
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {signatureClasses.map((cls, index) => (
              <motion.div key={cls.slug} variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col rounded-2xl bg-white backdrop-blur-sm border-orange-300/50 duration-300 md:hover:shadow-xl">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="h-[250px] w-auto object-cover rounded-xl mb-4"
                    />
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                      {cls.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-orange-800">{cls.description}</p>
                    <div className="flex flex-col gap-3 mt-4">
  <Button
    variant="outline"
    className="w-full rounded-full text-orange-800 bg-white/30 duration-100 transition-all py-4 text-md shadow-xl"
    onClick={() => router.push(`/classes/${cls.slug}`)}
  >
    {t("classesPage.buttons.learnMore")}
  </Button>
  <Button
    className="w-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full text-white px-8 py-4 text-md"
    onClick={() => handleStartClass(cls.slug)}
  >
    {t("classesPage.buttons.startClass")}
  </Button>
</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Everyday Life */}
        <section className="mt-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-5xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                {t("classesPage.everydayTitle")}
              </span>
            </h1>
            <p className="text-md text-orange-800 max-w-5xl mx-auto">
              {t("classesPage.everydaySubtitle")}
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {everydayLife.map((cls, index) => (
              <motion.div key={cls.slug} variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col rounded-2xl bg-white backdrop-blur-sm border-orange-300/50 duration-300 md:hover:shadow-xl">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="h-[250px] w-auto object-cover rounded-xl mb-4"
                    />
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                      {cls.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-orange-800">{cls.description}</p>
                    <div className="flex flex-col gap-3 mt-4">
  <Button
    variant="outline"
    className="w-full rounded-full text-orange-800 bg-white/30 duration-100 transition-all py-4 text-md shadow-xl"
    onClick={() => router.push(`/classes/${cls.slug}`)}
  >
    {t("classesPage.buttons.learnMore")}
  </Button>
  <Button
    className="w-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full text-white px-8 py-4 text-md"
    onClick={() => handleStartClass(cls.slug)}
  >
    {t("classesPage.buttons.startClass")}
  </Button>
</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
