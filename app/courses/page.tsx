"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const courseCategories = [
  {
    name: "Obedience & Everyday Life",
    description:
      "Foundational courses designed to build a strong relationship with your dog through everyday obedience, focus, and communication skills.",
    courses: [
      {
        name: "Puppy Class – Everyday Obedience",
        description:
          "For puppies aged 3–5 months. A fun and informative start to build positive habits early. No prior knowledge required.",
      },
      {
        name: "Basic Class – Everyday Obedience",
        description:
          "For dogs over 6 months. Build a strong foundation of obedience, focus, and trust. First class without dogs.",
      },
      {
        name: "Recall & Distraction Training",
        description:
          "For dogs easily distracted outdoors or around other dogs. Learn reliable recall and attention even in challenging situations.",
      },
      {
        name: "Without a Word",
        description:
          "Enhance non-verbal communication. Learn to guide your dog through body language, context, and clear cues—without nagging or words.",
      },
      {
        name: "The Place – Settle & Stay",
        description:
          "Teach your dog to relax on a mat, bed, or designated place. Great for home manners, restaurants, and training environments.",
      },
    ],
  },
  {
    name: "Nose Work",
    description:
      "A rewarding scent-based activity that engages your dog’s natural abilities. Great mental stimulation for dogs of all ages.",
    courses: [
      {
        name: "Nose Work – Beginner",
        description:
          "Teach your dog to search for a target odor (eucalyptus). Perfect introduction to scent work for fun or competition.",
      },
      {
        name: "Nose Work – Advanced",
        description:
          "Build on your beginner skills with more challenging searches, better handler skills, and stronger odor recognition.",
      },
      {
        name: "Nose Work – Preparing for Level 2 & 3",
        description:
          "For teams working toward higher competition levels. Focus on complex search patterns and problem-solving.",
      },
      {
        name: "Nose Work – Independent Sessions",
        description:
          "Book individual sessions to practice searches under competition-like conditions with instructor feedback.",
      },
    ],
  },
  {
    name: "Scent Detection (Special Search)",
    description:
      "Train your dog to detect a specific scent, like red Kong, commonly used in professional scent work or competitions.",
    courses: [
      {
        name: "Scent Detection – Level 1",
        description:
          "Introduction to special search (detecting red Kong). Fun, enriching, and mentally challenging for your dog.",
      },
      {
        name: "Scent Detection – Level 3 (Competition Prep)",
        description:
          "Advanced training focused on search complexity, handler techniques, and preparing for competitions.",
      },
      {
        name: "Scent Detection – Independent Sessions",
        description:
          "Practice searches on different setups with private time and direct feedback from the instructor.",
      },
    ],
  },
  {
    name: "Dog Sports & Tricks",
    description:
      "Courses that develop teamwork, focus, and fun through dog sports and creative tricks.",
    courses: [
      {
        name: "Rear-End Awareness",
        description:
          "Improve your dog's control of its rear. Essential for precise heelwork, pivoting, and sports performance.",
      },
      {
        name: "Engagement & Reward Techniques",
        description:
          "A theory-based workshop to learn how to motivate your dog with the right reward strategies for both training and competition. (No dogs during the session.)",
      },
      {
        name: "Trick Training",
        description:
          "Fun tricks that improve engagement, mental stimulation, and can prepare you for sports like freestyle.",
      },
      {
        name: "Heelwork to Music – Beginner",
        description:
          "Learn the basics of heelwork combined with tricks set to music. A fun, creative sport that strengthens connection.",
      },
    ],
  },
  {
    name: "Rally Obedience",
    description:
      "Rally is a fun and interactive dog sport that builds focus, teamwork, and obedience skills while following a course of signs.",
    courses: [
      {
        name: "Rally Obedience – Beginner",
        description:
          "Learn the basic exercises and signs of rally obedience. Focus on teamwork, focus, and fun.",
      },
      {
        name: "Rally Obedience – Intermediate",
        description:
          "Build on the beginner level with longer sequences, increased difficulty, and stronger handler-dog connection.",
      },
      {
        name: "Rally Obedience – Course Practice",
        description:
          "Run full rally courses to improve flow, consistency, and readiness for competition or fun practice.",
      },
    ],
  },
  {
    name: "Special Skills",
    description:
      "Unique courses for scent tracking, mushroom hunting, or practical working dog skills.",
    courses: [
      {
        name: "Mushroom Search – Chantarelle Training",
        description:
          "Teach your dog to find chantarelles (wild mushrooms). Combines outdoor activity with practical scent work.",
      },
      {
        name: "Mantrailing – Tracking Level 1",
        description:
          "Learn how to let your dog follow human scent trails. A fun, collaborative way to build your dog’s natural tracking abilities.",
      },
    ],
  },
]

export default function CoursesPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null)
  const [openCourse, setOpenCourse] = useState<number | null>(null)

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index)
    setOpenCourse(null) // Reset open course when switching category
  }

  const toggleCourse = (index: number) => {
    setOpenCourse(openCourse === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-orange-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              Our Courses
            </span>
          </h1>
          <p className="text-xl text-orange-800 max-w-2xl mx-auto">
            Build a stronger connection with your dog through knowledge, play, and teamwork.
          </p>
        </motion.div>

   {/* 🔥 GRID HERE */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((category, catIndex) => (
            <motion.div key={catIndex} {...fadeInUp}>
              <Card className="bg-white/60 backdrop-blur-sm rounded-3xl border border-orange-300/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <CardHeader
                  onClick={() => toggleCategory(catIndex)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                    {category.name}
                  </CardTitle>
                  {openCategory === catIndex ? (
                    <ChevronUp className="w-6 h-6 text-orange-800" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-orange-800" />
                  )}
                </CardHeader>

                {openCategory === catIndex && (
                  <CardContent className="text-orange-800">
                    <p className="text-sm mb-4">{category.description}</p>
                    <div className="space-y-4">
                      {category.courses.map((course, courseIndex) => (
                        <div key={courseIndex}>
                          <div
                            onClick={() => toggleCourse(courseIndex)}
                            className="flex items-center justify-between cursor-pointer"
                          >
                            <h3 className="text-lg font-semibold">
                              {course.name}
                            </h3>
                            {openCourse === courseIndex ? (
                              <ChevronUp className="w-5 h-5 text-orange-800" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-orange-800" />
                            )}
                          </div>
                          {openCourse === courseIndex && (
                            <p className="text-xs mt-2">{course.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-400 to-orange-300 
              rounded-full border border-transparent text-white px-8 py-4 text-md
              hover:shadow-xl hover:shadow-orange-600/20 duration-100 transition-all"
          >
            Book a Course
          </Button>
        </div>
      </div>
    </div>
  )
}
