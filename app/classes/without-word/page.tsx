"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WithoutWordClass() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white via-pink-100 to-orange-100 text-white px-6 py-20">
      <div className="space-y-6 text-orange-800 max-w-5xl mx-auto">

        <Link
          href="/classes"
          className="text-orange-800 md:hover:text-black text-md inline-block cursor-pointer transition-colors duration-300"
        >
        Back to classes
        </Link>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            Without A Word
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-400 to-orange-300 
              rounded-full border border-transparent text-white px-8 py-4 text-md
              shadow-xl md:shadow-orange-600/20 md:hover:shadow-sm md:hover:md:shadow-orange-600/20 duration-200 transition-all"
          >
            Begin class – $99
          </Button>
        </div>

        <p>
          Tired of repeating commands? This class helps you build clear, silent communication with your dog using only body language and visual signals. It’s an incredibly fun and rewarding way to strengthen your partnership and reduce misunderstandings — all without saying a word.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          The class is divided into <strong>8 modules</strong>, each built to take around <strong>1 hour</strong>. You’ll follow the class from your phone while practicing with your dog — focusing entirely on visual communication, presence, and movement-based cues.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Silent exercises for daily routines and obedience</li>
          <li>Body language-based cue training</li>
          <li>Progress tracking to reduce nagging and increase trust</li>
        </ul>

        <p className="mt-2">
          By shifting the responsibility to your dog, you'll create a more balanced and responsive relationship. Your dog learns to pay closer attention to you, rather than just waiting to be told what to do.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>Why Go Silent?</strong> – The value of working without verbal commands.</li>
          <li><strong>Understanding Visual Signals</strong> – How dogs read body language and space.</li>
          <li><strong>Building the Habit of Observation</strong> – Teaching your dog to watch and respond to you naturally.</li>
          <li><strong>Micro-Movements for Cues</strong> – Using small, intentional movements as consistent signals.</li>
          <li><strong>Silent Stay & Recall</strong> – Holding attention and encouraging return without speaking.</li>
          <li><strong>Handling Transitions Smoothly</strong> – Moving between positions, doors, or directions using silent structure.</li>
          <li><strong>Reducing Dependence on Words</strong> – Making non-verbal cues your default system.</li>
          <li><strong>Fluent Silent Routines</strong> – Practice daily life using only body-based communication.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is for <strong>any dog and handler</strong> who want to improve communication, reduce verbal repetition, or explore a more subtle way of working together. No previous experience required — just curiosity and a willingness to try something new.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>No words allowed:</strong> You’ll challenge yourself to stay silent while guiding your dog through every exercise.</li>
          <li><strong>Works indoors:</strong> This class takes place fully inside, so it’s perfect year-round.</li>
          <li><strong>Group size:</strong> This class is designed for small groups — originally with up to 6 participants for focus and quality.</li>
          <li><strong>Build focus & responsibility:</strong> Dogs become more observant and thoughtful when trained this way.</li>
          <li><strong>After the class:</strong> You’re perfectly set up for advanced communication work like 
            <Link href="/classes" className="text-orange-800 font-bold"> Rally Obedience</Link> or our 
            <span className="font-semibold"> Clicker class</span> to combine precision and fun.
          </li>
        </ul>

        <Link
          href="/classes"
          className="text-orange-800 md:hover:text-black text-md inline-block cursor-pointer transition-colors duration-300 mt-10"
        >
        Back to classes
        </Link>
      </div>
    </div>
  )
}
