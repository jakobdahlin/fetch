"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BookOpen, MessageCircle, TrendingUp, Brain, Camera, Users } from "lucide-react";
import { useTranslation } from "@/app/hooks/useTranslation";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: BookOpen,
      title: t("features.interactiveLearning.title"),
      description: t("features.interactiveLearning.description"),
    },
    {
      icon: MessageCircle,
      title: t("features.aiDogCoach.title"),
      description: t("features.aiDogCoach.description"),
    },
    {
      icon: TrendingUp,
      title: t("features.structuredPrograms.title"),
      description: t("features.structuredPrograms.description"),
    },
    {
      icon: Brain,
      title: t("features.behaviorTracking.title"),
      description: t("features.behaviorTracking.description"),
    },
    {
      icon: Camera,
      title: t("features.imageAnalysis.title"),
      description: t("features.imageAnalysis.description"),
    },
    {
      icon: Users,
      title: t("features.communitySupport.title"),
      description: t("features.communitySupport.description"),
    },
  ];

  const pricingTiers = [
    {
      name: t("pricing.singleClass.name"),
      price: "$99",
      period: t("pricing.singleClass.period"),
      description: t("pricing.singleClass.description"),
      features: [
        t("pricing.singleClass.features.0"),
        t("pricing.singleClass.features.1"),
        t("pricing.singleClass.features.2"),
        t("pricing.singleClass.features.3"),
      ],
      cta: t("pricing.singleClass.cta"),
    },
    {
      name: t("pricing.monthly.name"),
      price: "$49",
      period: t("pricing.monthly.period"),
      description: t("pricing.monthly.description"),
      features: [
        t("pricing.monthly.features.0"),
        t("pricing.monthly.features.1"),
        t("pricing.monthly.features.2"),
        t("pricing.monthly.features.3"),
        t("pricing.monthly.features.4"),
      ],
      cta: t("pricing.monthly.cta"),
    },
    {
      name: t("pricing.annual.name"),
      price: "$390",
      period: t("pricing.annual.period"),
      description: t("pricing.annual.description"),
      features: [
        t("pricing.annual.features.0"),
        t("pricing.annual.features.1"),
        t("pricing.annual.features.2"),
        t("pricing.annual.features.3"),
      ],
      cta: t("pricing.annual.cta"),
      savingsPercent: 17,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-100 via-pink-100 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 shadow-xl shadow-orange-600/20 bg-white/30 backdrop-blur-sm border border-orange-200/50 rounded-full px-6 py-2 mb-8"
            >
              <span className="text-sm font-medium text-orange-800">
                {t("hero.helperText")}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-orange-800 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-red-400 to-orange-300 rounded-full text-white px-8 py-4 text-md">
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full text-orange-800 bg-white/30 px-8 py-4 text-md">
                {t("hero.ctaSecondary")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <div className="relative w-full max-w-7xl mx-auto mt-10">
  {/* Video Background */}
  <video
    src="/running2.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="w-full h-auto opacity-80"
    style={{
      WebkitMaskImage: `
        linear-gradient(to top, transparent 0%, black 45%, black 65%, transparent 100%),
        linear-gradient(to left, transparent 0%, black 45%, black 85%, transparent 100%)
      `,
      maskImage: `
        linear-gradient(to top, transparent 0%, black 65%, black 65%, transparent 100%),
        linear-gradient(to left, transparent 0%, black 45%, black 55%, transparent 100%)
      `,
      WebkitMaskComposite: "intersect",
      maskComposite: "intersect",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
    }}
  />

  {/* Overlay Content */}
  <motion.div
    className="hidden md:flex absolute inset-0 flex-col justify-center ml-4 px-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
        {t("features.videoOverlayTitle")}
      </span>
    </h2>
    <p className="text-xl text-orange-800 max-w-2xl">
      {t("features.videoOverlaySubtitle")}
    </p>
  </motion.div>
</div>


      {/* Features */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="h-full rounded-2xl bg-gradient-to-r from-red-400/10 to-orange-300/10"
              >
                <CardHeader>
                  <feature.icon className="w-6 h-6 text-orange-600 mb-4" />
                  <CardTitle className="text-xl font-bold text-orange-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-orange-800">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              {t("pricing.title")}
            </h2>
            <p className="text-xl text-orange-800 max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="h-full rounded-2xl bg-white/50 backdrop-blur-sm border-orange-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-orange-800">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-orange-900">{tier.price}</div>
                  <CardDescription className="text-orange-800">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-orange-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full mt-4">
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
