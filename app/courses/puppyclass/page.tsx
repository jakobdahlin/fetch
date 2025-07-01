"use client"

import { motion } from "framer-motion";

export default function PuppyClass() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-orange-100 text-white px-6 py-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">🐾 Puppy Class</div>
          <p className="mt-6 text-orange-800 max-w-2xl mx-auto">
          The must-have course for new puppy owners!
          </p>
          <p className="mt-6 text-orange-800 max-w-2xl mx-auto">
            The must-have course for new puppy owners! Set your puppy up for
            success with our Puppy Class. Learn how to build a strong, positive
            relationship while mastering the essentials of puppy care and
            training.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              Enroll Now
            </button>
            <button className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800">
              Get a Free Lesson
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trusted Section */}
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">Trusted by happy puppies worldwide</p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-orange-800">
          <div>PawParents Club</div>
          <div>HappyTails</div>
          <div>Canine Collective</div>
          <div>DogLovers Sweden</div>
          <div>Woof Academy</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24">
        <FeatureCard
          title="Gentle, Positive Training"
          description="Nurture your puppy’s curiosity, focus, and desire to learn with positive reinforcement."
          icon="🐶"
        />
        <FeatureCard
          title="Flexible Learning"
          description="Train at home, outside, or in quiet public spaces. Perfect for busy schedules."
          icon="🏡"
        />
        <FeatureCard
          title="For Puppies 3–6 Months"
          description="Tailored for young puppies. No prior training needed."
          icon="🎯"
        />
      </div>

      {/* Course Structure Section */}
      <div className="max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-6">🗂️ Course Structure</h2>
          <ul className="space-y-4 text-neutral-300">
            <li>• Getting Started – Puppy setup & mindset</li>
            <li>• Puppy Foundations – Focus, engagement, following</li>
            <li>• Calm & Confidence – Patience, stillness, handling</li>
            <li>• Socialization & Experiences – Safe exposure</li>
            <li>• Problem Prevention – Nipping, chewing, jumping</li>
            <li>• Next Steps – Transition to future training</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">📦 What’s Included</h2>
          <ul className="space-y-4 text-neutral-300">
            <li>• Step-by-step video lessons</li>
            <li>• Printable checklists & guides</li>
            <li>• Practical exercises</li>
            <li>• Lifetime access</li>
            <li>• Certificate of Completion</li>
          </ul>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="max-w-4xl mx-auto mt-32 text-center">
        <h2 className="text-3xl font-semibold mb-4">🔧 Requirements</h2>
        <p className="text-neutral-400 mb-4">
          A positive mindset, leash, treats, and a playful puppy!
        </p>
        <p className="text-neutral-500">
          No prior courses needed. Puppies aged 3–6 months. If older, check out
          our Basic Obedience Course.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-neutral-800 pt-10 text-center text-neutral-600">
        © 2025 Pawtential. All rights reserved.
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <motion.div
      className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
}
