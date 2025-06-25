"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Brain,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Users,
  Camera,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Step-by-step guides for walking, enrichment, leash reactivity, and more with videos and checklists.",
  },
  {
    icon: MessageCircle,
    title: "AI Dog Coach",
    description: "24/7 support for questions like 'Why won't my dog stop barking?' with personalized guidance.",
  },
  {
    icon: TrendingUp,
    title: "Structured Programs",
    description: "30-day plans like 'Better Walks' and 'Separation Anxiety Basics' with daily tasks and reminders.",
  },
  {
    icon: Brain,
    title: "Behavior Tracking",
    description: "Track training progress and problem behaviors to stay motivated and see real improvements.",
  },
  {
    icon: Camera,
    title: "Image Analysis",
    description: "Upload photos of setups, injuries, or behaviors for instant AI-powered feedback and advice.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other owners to share success stories, ask questions, and learn together.",
  },
]

const pricingTiers = [
  {
    name: "Basic",
    price: "$20",
    period: "month",
    description: "Perfect for getting started",
    features: [
      "Basic AI chat for simple questions",
      "Access to community",
      "Basic enrichment tips",
      "Progress tracking",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "month",
    description: "Everything you need to be a better dog owner",
    features: [
      "Full AI Dog Coach with image analysis",
      "All training programs & lessons",
      "Advanced behavior guides",
      "Priority community support",
      "Personalized training plans",
      "Progress analytics",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Annual",
    price: "$499",
    period: "per year",
    description: "Best value for committed owners",
    features: [
      "Everything in Pro",
      "2 months free",
      "Exclusive webinars",
      "Early access to new features",
      "Direct trainer consultations",
    ],
    cta: "Save 31%",
    popular: false,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-pink-100 to-white">


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 shadow-xl shadow-orange-600/20 bg-white/30 backdrop-blur-sm border border-orange-200/50 rounded-full px-6 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-800">Teach humans how to be better dog owners</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Unlock Your Dog's
              </span>
              <br />
              <span className="text-orange-800">Pawtential</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              It's not about fixing your dog. It's about educating <i className="font-bo">you</i> to show up for your dog —
              <span className="font-semibold text-orange-800"> physically, emotionally, mentally.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-400 to-orange-300 
                rounded-full border border-transparent text-white px-8 py-4 text-lg
                hover:shadow-xl hover:shadow-orange-600/20 duration-100 transition-all"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 rounded-full text-orange-800 bg-white/30 duration-100 transition-all 
                py-4 text-lg shadow-xl shadow-orange-600/20 border border-orange-200/50
                hover:bg-white/20 hover:shadow-lg hover:shadow-orange-600/20 hover:text-orange-700"
              >
                Try AI Coach Free
              </Button>
            </motion.div>
          </motion.div>
        </div>

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
      linear-gradient(to top, transparent 0%, black 45%, black 65%, transparent 100%),
      linear-gradient(to left, transparent 0%, black 45%, black 55%, transparent 100%)
    `,
    WebkitMaskComposite: 'intersect',
    maskComposite: 'intersect',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }}
/>

{/* Overlay Content */}
<motion.div 
  className="hidden md:flex absolute inset-0 flex-col items-center justify-center text-center px-4"
  {...fadeInUp}
>
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    <span className="text-black">
      Features That Actually Help
    </span>
  </h2>
  <p className="text-xl text-black max-w-2xl">
    Everything you need to build a stronger relationship with your dog
  </p>
</motion.div>

</div>
      </section>

      {/* Features Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div 
  className="text-center mb-16 block md:hidden" 
  {...fadeInUp}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4">
    <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
      Features That Actually Help
    </span>
  </h2>
  <p className="text-xl text-orange-800 max-w-2xl mx-auto">
    Everything you need to build a stronger relationship with your dog
  </p>
</motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full rounded-2xl bg-white/30 backdrop-blur-sm border-white/80 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-300 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-black text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-orange-800 max-w-2xl mx-auto">
              Start free, upgrade when you're ready to unlock your dog's full potential
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 py-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full relative rounded-2xl ${
                    tier.popular
                      ? "bg-gradient-to-b from-red-400/20 to-orange-300/20 border-orange-200 shadow-xl hover:scale-105"
                      : "bg-white/50 hover:bg-white backdrop-blur-sm border-white/80"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="shadow-lg bg-gradient-to-r from-red-400 to-orange-300 text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-800">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-black ml-1">/{tier.period}</span>
                    </div>
                    <CardDescription className="text-black mt-2">{tier.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full mt-8  ${
                        tier.popular
                          ? "bg-gradient-to-r from-red-400 to-orange-300 rounded-full border border-transparent text-white px-8 py-4 text-sm hover:shadow-xl hover:shadow-orange-600/20 duration-100 transition-all"
                          : "px-8 rounded-full text-orange-800 bg-white/30 duration-100 transition-all py-4 text-sm border:transparent hover:bg-transparent shadow-xl shadow-orange-600/20 border border-orange-200/50 hover:shadow-lg hover:shadow-orange-600/20 hover:text-orange-700"
                      }`}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <div className="bg-gradient-to-r from-red-400 to-orange-300 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Be a Better Dog Owner?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of owners who've transformed their relationship with their dogs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                <Button
                  size="lg"
                  className="px-8 rounded-full text-orange-800 bg-white duration-100 
                  transition-all py-4 text-sm border:transparent hover:bg-white/80 
                  shadow-xl shadow-orange-600/20 border border-orange-200/50 hover:shadow-lg 
                  hover:shadow-orange-600/20 hover:text-orange-700"
                >
                  Start Free Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white rounded-full bg-transparent text-white 
                  hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                >
                  Chat with AI Coach
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-300 rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              K9Coach
            </span>
          </div>
          <p className="text-black">
  © {new Date().getFullYear()} Helping humans be better dog owners.
</p>
        </div>
      </footer>
    </div>
  )
}
