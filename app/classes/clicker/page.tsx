"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClickerClass() {
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
            Clicker & Learning
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
          Learn how to make training more fun and efficient with one of the most powerful tools in dog learning: the clicker. This class will teach you how to use timing and reward to shape behaviors and build stronger communication — while boosting your dog’s confidence and motivation.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          The class is divided into <strong>8 modules</strong>, each taking around <strong>1 hour</strong>. You’ll follow the steps on your phone while practicing at home, outdoors, or during walks.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Clicker timing drills and shaping exercises</li>
          <li>Step-by-step examples for new behaviors</li>
          <li>Practice logs and skill-building games</li>
        </ul>

        <p className="mt-2">
          You'll learn to reinforce your dog’s own behavior choices, shape complex tasks one step at a time, and communicate with precision. Clicker training is a proven method used in everything from guide dog work to dolphin training — and works just as well with your dog at home.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>Clicker Basics</strong> – How it works, why it works, and when to use it.</li>
          <li><strong>Timing & Mechanics</strong> – Learn the split-second skill of marking at the right moment.</li>
          <li><strong>Capturing Behaviors</strong> – Reinforce things your dog offers naturally.</li>
          <li><strong>Shaping Step-by-Step</strong> – Guide your dog to build complex behaviors through tiny increments.</li>
          <li><strong>Introducing New Cues</strong> – Add words or signals after behavior is reliable.</li>
          <li><strong>Problem-Solving with Positivity</strong> – Use clicker thinking to fix confusion or hesitation.</li>
          <li><strong>Applying Clicker to Everyday Life</strong> – Build habits around grooming, doorways, and more.</li>
          <li><strong>Fluent & Fun</strong> – Practice games that turn learning into play.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is perfect for <strong>any dog and handler</strong>, regardless of training experience. Whether you want to add a powerful tool to your routine or dive into learning theory, clicker training helps build better timing, more engagement, and clearer communication.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>No experience required:</strong> The class is designed for total beginners.</li>
          <li><strong>Works indoors and outdoors:</strong> Train at home, on walks, or anywhere you like.</li>
          <li><strong>No clicker?</strong> A marker word or sound can work too — we’ll show you how.</li>
          <li><strong>Practice makes timing:</strong> The more you try, the smoother and more natural it becomes.</li>
          <li><strong>After the class:</strong> You're ready to explore 
            <Link href="/classes" className="text-orange-800 font-bold"> Trick Training</Link> or go deeper into behavior shaping with
            <span className="font-semibold"> Without A Word</span>.
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
