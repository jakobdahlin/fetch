"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TricksClass() {
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
            Tricks & Tricks
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
          Want to have more fun with your dog? This is a playful and rewarding class where you’ll teach your dog a variety of tricks that improve focus, confidence, and cooperation. Whether you're curious about freestyle or just want to explore creative training, this class is a great place to start.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          The class is structured into <strong>8 modules</strong>, each taking about <strong>1 hour</strong> to complete. Follow along with your dog using your phone, practicing each trick in small, fun sessions indoors or at home.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Trick breakdowns with clear steps</li>
          <li>Shaping tips and motivation boosters</li>
          <li>Challenges and fun variations</li>
        </ul>

        <p className="mt-2">
          Tricks are not just for show — they build better timing, engagement, and joy into your training. They're also excellent preparation if you want to explore sports like freestyle or canine musical routines.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>Intro to Tricks & Freestyle</strong> – What tricks offer beyond entertainment.</li>
          <li><strong>Paw & High Five</strong> – Teaching reliable front paw behaviors.</li>
          <li><strong>Spin & Twist</strong> – Fun movement patterns with great flow.</li>
          <li><strong>Bow & Crawl</strong> – Playful postures that build body awareness.</li>
          <li><strong>Circle Me & Back Up</strong> – Tricks that encourage spatial awareness and control.</li>
          <li><strong>Hold & Carry</strong> – Object-based tricks that require focus and calm handling.</li>
          <li><strong>Stringing Tricks Together</strong> – How to chain multiple behaviors into sequences.</li>
          <li><strong>Showtime!</strong> – Combine your favorite tricks into a mini routine.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is for <strong>dogs of all ages</strong> and is especially fun for anyone interested in creative training, building better engagement, or getting started with freestyle. No previous experience required.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>No experience needed:</strong> You can start from scratch — or pick up where you left off.</li>
          <li><strong>Fun-focused:</strong> Trick training strengthens your bond and adds joy to every session.</li>
          <li><strong>Indoor-based:</strong> All modules can be done inside with minimal space.</li>
          <li><strong>Motivation is key:</strong> Bring your dog's favorite treats or toys for best results.</li>
          <li><strong>After the class:</strong> You can dive deeper into 
            <Link href="/classes" className="text-orange-800 font-bold"> Clicker & Learning</Link> or explore 
            <span className="font-semibold"> Heelwork to Music</span> for more advanced creative routines.
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
