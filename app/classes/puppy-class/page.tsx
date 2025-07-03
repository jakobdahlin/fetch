"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function PuppyClass() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white via-pink-100 to-orange-100 text-white px-6 py-20">
<div className="space-y-6 text-orange-800 max-w-5xl mx-auto">
<Link
  href="/classes"
  className="text-orange-800 md:hover:text-black text-md inline-block cursor-pointer transition-colors duration-300"
> Back to classes
</Link>
<div className="flex items-center justify-between flex-wrap gap-4">
  <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
    Puppy Class
  </h2>
  <Button
    size="lg"
    className="bg-gradient-to-r from-red-400 to-orange-300 
      rounded-full border border-transparent text-white px-8 py-4 text-md
      shadow-xl md:shadow-orange-600/20 md:hover:shadow-sm md:hover:md:shadow-orange-600/20 duration-200 transition-all"
  >
    Begin class - $149
  </Button>
</div>

  <p>
    This is the ideal class if you have recently brought a puppy into your life.
    It gives you both a positive start with the knowledge and tools to create a
    fun and rewarding training experience. You will learn how to train your puppy
    in a kind, structured way — using play, praise, and clear communication.
  </p>

  <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
    How It Works
  </h3>
  <p>
    This class is divided into <strong>8 modules</strong>, each designed to
    take around <strong>1 hour</strong> to complete. You will follow the class
    directly from your phone while you're actively training with your puppy —
    whether you're at home, in the backyard, or at the park.
  </p>
  <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
<ul className="list-disc list-inside ml-4 mt-2">
  <li>Step-by-step exercises</li>
  <li>Trainer tips and short explanations</li>
  <li>Checklists and progress tracking</li>
</ul>

  <p className="mt-2">
    You are encouraged to complete one module per session, and repeat any
    session as needed. The structure mirrors our physical classes, but with
    full flexibility.
  </p>

  <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
    What You will Learn (Modules)
  </h3>
  <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
    <li>
      <strong>Connection & Focus</strong> - Build trust and attention using
      your body language and voice.
    </li>
    <li>
      <strong>Follow the Leader</strong> - Encourage your puppy's natural
      tendency to stay close and responsive.
    </li>
    <li>
      <strong>Staying Still</strong> - Practice calmness and impulse control
      through sit, stay, and relaxed waiting.
    </li>
    <li>
      <strong>Recall Basics</strong> - Teach your puppy to come when called —
      with joy and speed.
    </li>
    <li>
      <strong>Handling & Daily Care</strong> - Help your puppy get used to
      being touched, groomed, and checked over.
    </li>
    <li>
      <strong>Polite Greetings</strong> - Guide your puppy into calm and
      friendly interactions with people.
    </li>
    <li>
      <strong>Play, Reward & Motivation</strong> - Learn to use play and praise
      as powerful training tools.
    </li>
    <li>
      <strong>How Puppies Learn</strong> - Understand your puppy's development
      and learning stages, and how to avoid common mistakes.
    </li>
  </ol>

  <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
    Who Is It For?
  </h3>
  <p>
    This class is for <strong>puppies aged 3 to 6 months</strong>. No previous
    training experience is needed. If your puppy is older than 6 months, we
    recommend starting with our{" "}
    <span className="font-semibold">Basic Everyday Obedience</span> class
    instead.
  </p>

  <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
    Good to Know
  </h3>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      <strong>Train in short bursts:</strong> Puppies learn best in 5-10 minute
      sessions. You don't need to complete a whole module at once.
    </li>
    <li>
      <strong>Use soft treats:</strong> Bring lots of small, tasty rewards to
      every training session. Your puppy should love working with you!
    </li>
    <li>
      <strong>Practice in calm environments first:</strong> Start at home, then
      slowly increase distractions as your puppy gains confidence.
    </li>
    <li>
      <strong>Be patient:</strong> Learning takes time. It's normal to revisit
      certain modules or exercises more than once.
    </li>
    <li>
      <strong>Track your progress:</strong> Mark completed modules and use the
      built-in checklists to stay on track.
    </li>
    <li>
      <strong>End on a high note:</strong> Always finish sessions with praise
      and something fun. Leave your puppy wanting more.
    </li>
    <li>
      <strong>After the class:</strong> Once you've completed all 8 modules, we
      recommend continuing with our next-level class:
      <Link
  href="/classes"
  className="text-orange-800 font-bold"
> Basic Obedience
</Link> to build
      on your foundation with more advanced skills.
    </li>
  </ul>

  <Link
  href="/classes"
  className="text-orange-800 md:hover:text-black text-md 
  inline-block cursor-pointer transition-colors duration-300 mt-10"
> Back to classes
</Link>
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
