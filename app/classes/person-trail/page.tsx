"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PersonTrailClass() {
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
            Person Trail
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-400 to-orange-300 
              rounded-full border border-transparent text-white px-8 py-4 text-md
              shadow-xl md:shadow-orange-600/20 md:hover:shadow-sm md:hover:md:shadow-orange-600/20 duration-200 transition-all"
          >
            Begin class – $79
          </Button>
        </div>

        <p>
          Scent work is a dog’s superpower — and this class gives your dog the chance to take the lead. In Person Trail, you’ll learn how to work as a team while your dog follows a human scent trail through the forest. It’s a mentally rewarding and fun outdoor activity that strengthens your connection and helps you better read your dog’s signals.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          This class is divided into <strong>8 modules</strong>, with each module taking around <strong>1 hour</strong> to complete. You’ll follow the steps from your phone while out in the forest, combining theory and practical scent work at your own pace.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Tracking setup instructions</li>
          <li>Step-by-step scent exercises</li>
          <li>Tips on reading your dog’s body language</li>
        </ul>

        <p className="mt-2">
          You’ll start by learning how to lay a simple trail and encourage your dog to follow it. As your dog progresses, you’ll learn how to increase the challenge and complexity of the tracks. The class mixes practical fieldwork with supporting theory to help you understand how scent, wind, and ground conditions influence your dog’s behavior.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>Introduction to Scent Work</strong> – Understand how scent tracking works and why dogs love it.</li>
          <li><strong>First Trail</strong> – Lay your first human track and follow it together.</li>
          <li><strong>Reading the Dog</strong> – Learn to recognize signs that your dog is working the trail.</li>
          <li><strong>Turns & Obstacles</strong> – Add complexity by introducing changes of direction and distractions.</li>
          <li><strong>Longer Tracks</strong> – Increase duration and distance to build endurance and focus.</li>
          <li><strong>Surface & Weather Factors</strong> – Train in different conditions and adjust based on terrain.</li>
          <li><strong>Handler Skills</strong> – Practice timing, leash handling, and distance support.</li>
          <li><strong>Final Trail Challenge</strong> – Combine everything into a complete track to test your progress.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is great for <strong>dogs of all breeds and energy levels</strong>, and no previous experience is needed. Whether you’re looking for a new way to bond, stimulate your dog’s mind, or explore the outdoors together, Person Trail is a perfect fit.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>No experience needed:</strong> This class is built for beginners.</li>
          <li><strong>Outdoor only:</strong> All exercises are done in the forest, so dress accordingly.</li>
          <li><strong>Fun for handler too:</strong> You’ll learn how to read subtle body language and become a better teammate to your dog.</li>
          <li><strong>Solo-friendly:</strong> Tracks can be practiced alone or with a friend acting as the “trail layer.”</li>
          <li><strong>After the class:</strong> You can move into more advanced scent work like 
            <Link href="/classes" className="text-orange-800 font-bold"> Nose Work</Link> or explore sport tracking.
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
