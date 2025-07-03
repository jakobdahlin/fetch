"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnvironmentGoodHabitsClass() {
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
            Environment & Good Habits
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-400 to-orange-300 
              rounded-full border border-transparent text-white px-8 py-4 text-md
              shadow-xl md:shadow-orange-600/20 md:hover:shadow-sm md:hover:md:shadow-orange-600/20 duration-200 transition-all"
          >
            Begin class – $119
          </Button>
        </div>

        <p>
          This class is designed to give you practical tools and strategies to help your dog build lasting habits in a wide variety of environments. From busy streets to new spaces, we focus on teaching your dog how to stay calm, focused, and responsive even when surroundings change.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          This class is structured into <strong>8 modules</strong>, each designed to take about <strong>1 hour</strong> to complete. You’ll follow the modules directly from your phone while practicing with your dog — indoors, outside, or in real-world locations around your city.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Step-by-step exercises</li>
          <li>Trainer tips for applying habits in new spaces</li>
          <li>Checklists to track progress and reflect</li>
        </ul>

        <p className="mt-2">
          All theory and preparation can be done at home, while the practical modules will be completed out in different environments. A car is required for this class since you’ll be traveling to various training spots.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>First Impressions</strong> – Teach your dog how to enter a new environment calmly and with focus.</li>
          <li><strong>Immediate Contact</strong> – Build the habit of getting eye contact and attention right away.</li>
          <li><strong>Loose Leash & Follower Mindset</strong> – Practice staying connected while walking through distractions.</li>
          <li><strong>Stay & Settle</strong> – Reinforce calm waiting, even in unfamiliar places.</li>
          <li><strong>Dog Encounters</strong> – Navigate other dogs respectfully and confidently on walks.</li>
          <li><strong>Passive Observation</strong> – Practice letting your dog relax while the world moves around you.</li>
          <li><strong>Training on the Go</strong> – Work in parks, parking lots, and urban areas to generalize your dog’s skills.</li>
          <li><strong>Consistency Across Contexts</strong> – Build habits that stick regardless of where you are.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is ideal for <strong>dogs who have already completed a basic obedience class</strong> or have equivalent skills. Your dog should be able to give eye contact, walk in heel position, and stay focused around mild distractions. Because we train in multiple locations, a car is required to participate.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Start in a calm place:</strong> Begin each module in a quiet environment before building up to busier areas.</li>
          <li><strong>Practice between sessions:</strong> Repetition is key — revisit exercises in new places throughout the week.</li>
          <li><strong>Bring high-value treats:</strong> Your dog will need extra motivation in novel settings.</li>
          <li><strong>Training = teamwork:</strong> Be ready to adapt and support your dog based on how they respond in different spaces.</li>
          <li><strong>After the class:</strong> You’ll have built an incredibly strong foundation for everyday life — and can continue into more specialized classes like 
            <Link href="/classes" className="text-orange-800 font-bold"> Impulse Control</Link> or 
            <span className="font-semibold"> Without a Word</span> for advanced focus work.
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
