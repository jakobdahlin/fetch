"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RootClass() {
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
            Root Class – Everyday Obedience
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-400 to-orange-300 
              rounded-full border border-transparent text-white px-8 py-4 text-md
              shadow-xl md:shadow-orange-600/20 md:hover:shadow-sm md:hover:md:shadow-orange-600/20 duration-200 transition-all"
          >
            Begin class – $129
          </Button>
        </div>

        <p>
          This is the foundational class for building everyday obedience and a great relationship between you and your dog. You’ll learn how to create reliable routines, communicate more clearly, and understand your dog’s behavior on a deeper level.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          How It Works
        </h3>
        <p>
          This class is structured into <strong>8 modules</strong>, each taking about <strong>1 hour</strong> to complete. You’ll follow the class on your phone while practicing together with your dog — indoors or outside.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Each Module Includes:
        </h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Step-by-step exercises</li>
            <li>Helpful guidance and real-world examples</li>
            <li>Checklists and reflection prompts</li>
          </ul>

        <p className="mt-2">
          The first module focuses on theory without your dog present. After that, each module includes practical work with your dog and builds on your progress in a structured and realistic way.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          What You’ll Learn (Modules)
        </h3>
        <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
          <li><strong>Foundations of Contact</strong> – Build attention and engagement in all environments.</li>
          <li><strong>Leash Skills & Walking Together</strong> – Develop calm leash manners and consistent following.</li>
          <li><strong>Impulse Control & Patience</strong> – Teach your dog to wait, settle, and stay calm when needed.</li>
          <li><strong>Reliable Recall</strong> – Strengthen your dog's response when called, even at longer distances.</li>
          <li><strong>Distance Obedience</strong> – Practice sit, stay, and direction cues from a distance.</li>
          <li><strong>Practical Behavior Understanding</strong> – Learn how to recognize and adapt to your dog’s development stages.</li>
          <li><strong>Working Together in Public</strong> – Translate skills into real-world environments and public settings.</li>
          <li><strong>Everyday Routines</strong> – Apply training into your day-to-day life to keep learning long-term.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Who Is It For?
        </h3>
        <p>
          This class is ideal for <strong>dogs over 6 months old</strong>. It’s a great entry point for dogs of any breed or background who need structure, better communication, or a fresh start. No previous training is required.
        </p>

        <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          Good to Know
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>First module = theory:</strong> Start without your dog to set yourself up for success.</li>
          <li><strong>Indoor & outdoor friendly:</strong> Practice wherever it fits your lifestyle — at home, in the yard, or on walks.</li>
          <li><strong>Repeat modules as needed:</strong> If something doesn’t click right away, that’s totally okay.</li>
          <li><strong>Be consistent:</strong> Aim for short sessions a few times per week instead of long ones less often.</li>
          <li><strong>Build your understanding:</strong> The more you know about how dogs learn, the smoother your progress will be.</li>
          <li><strong>After the class:</strong> You're ready to move on to a focused class like 
            <Link href="/classes" className="text-orange-800 font-bold"> Recall & Distraction</Link> or 
            <span className="font-semibold"> Rally Obedience</span> for more fun and precision.
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
