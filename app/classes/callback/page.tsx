"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallbackClass() {
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
            Callback
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
          Is your dog easily distracted by other dogs, people, or exciting things in the environment? This class will teach you how to turn those distractions into opportunities — helping your dog choose to come back to you instead of running toward what catches their eye.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          The class is structured into <strong>8 modules</strong>, each taking around <strong>1 hour</strong> to complete. You’ll follow each module from your phone while actively training with your dog, either at home or outside.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Step-by-step recall and "look & return" exercises</li>
          <li>Real-life distraction scenarios</li>
          <li>Checklists and confidence-building games</li>
        </ul>

        <p className="mt-2">
          The training focuses on building what's called a "callback reflex" using a technique known as *Look & Return*. Your dog will learn to automatically turn back to you when it sees something interesting — without you needing to say a word. This allows your dog to do the work of monitoring the environment, not you.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>Introduction to Look & Return</strong> – What the technique is and how it works in real life.</li>
          <li><strong>Eye Contact on Cue</strong> – Building reliable check-ins from your dog.</li>
          <li><strong>Recognizing Triggers</strong> – Teaching your dog to notice distractions and turn toward you instead.</li>
          <li><strong>Rewarding the Callback</strong> – Creating value for coming back immediately.</li>
          <li><strong>Combining with Verbal Recall</strong> – Strengthen your normal recall with layered habits.</li>
          <li><strong>Distraction Proofing</strong> – Practice with other dogs, people, and wildlife at increasing levels.</li>
          <li><strong>Walks That Train Themselves</strong> – Let the environment help you train — without constant micro-management.</li>
          <li><strong>Everyday Applications</strong> – Use this habit in parks, trails, or off-leash areas with confidence.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is suitable for <strong>dogs of all ages</strong> and requires no previous training. It’s perfect for dogs who are curious, high-energy, or have a tendency to focus too much on the world around them instead of their person.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>No previous experience needed:</strong> You’ll learn everything step by step.</li>
          <li><strong>Indoor & outdoor mix:</strong> Practice where you are — and build up to the real world.</li>
          <li><strong>Small class structure:</strong> Originally designed for up to 8 participants, so we keep the training focused.</li>
          <li><strong>Repeat modules freely:</strong> Repetition helps build fluency. It’s encouraged!</li>
          <li><strong>After the class:</strong> Continue with 
            <Link href="/classes" className="text-orange-800 font-bold"> Impulse Control</Link> or 
            <span className="font-semibold"> Tricks & Tricks</span> to build deeper focus and motivation.
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
