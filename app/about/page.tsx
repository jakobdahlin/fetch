"use client"

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white via-pink-100 to-orange-100 px-6 py-20 text-orange-800">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent text-center"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          Welcome to our world of dog training, connection, and mutual respect. What began as a small family business in Sweden over 20 years ago has grown into a modern platform for dog owners around the world who want to do better—for their dogs, and for themselves. Our philosophy is simple: to raise a healthy, balanced dog, we must first become responsible and engaged humans. We’re not just here to help you teach your dog—we’re here to teach you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          With two decades of experience and a lifelong passion for animals, we’ve developed programs that are rooted in science, empathy, and a deep understanding of canine behavior. Our background in positive reinforcement, canine psychology, and everyday practical training ensures that you’ll learn not just how to get results, but how to build a strong and healthy relationship with your dog.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          We believe that every dog deserves clear communication, gentle guidance, and daily opportunities to move their body. Whether you live in a city apartment or out in the countryside, your dog’s need for exercise and mental stimulation remains essential. And when those needs are met, behavior problems become less frequent and connection becomes effortless.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          That’s why our classes aren’t just about obedience—they’re about empowering dog owners to become thoughtful leaders. We give you the tools to better understand your dog’s signals, set boundaries with love, and meet their physical and emotional needs through movement, structure, and play. We don’t just want you to succeed—we want your dog to feel understood and safe every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 pt-10"
        >
          {[
            "Over 20 years of hands-on dog training experience",
            "Rooted in modern, science-backed methods",
            "Family-run with deep Swedish values",
            "Classes designed for both dogs and humans",
            "Flexible, real-life focused training modules",
            "Built to strengthen connection, not just control",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1" />
              <p className="text-md leading-relaxed">{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg leading-relaxed pt-10"
        >
          Our mission has always been to help people and dogs live better lives together. Whether you’re raising your very first puppy or working through challenges with a rescue dog, we’re here to support you. With accessible guidance, encouragement, and community—we’ll help you grow as a handler and deepen the relationship with your four-legged best friend.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          Thank you for trusting us to be a part of your dog training journey. It’s an honor to share what we’ve learned over the past 20 years with a new generation of dog owners—just like you.
        </motion.p>
      </div>
    </div>
  )
}
