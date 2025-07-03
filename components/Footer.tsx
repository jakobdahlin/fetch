"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const signatureClasses = [
  {
    name: "Puppy Class",
    description:
      "For puppies aged 3-5 months. A fun and informative start to build positive habits early. No prior knowledge required.",
    slug: "puppy-class",
    image: "/images/classes/puppy.jpg",
  },
  {
    name: "Root Class",
    description:
      "For dogs easily distracted outdoors or around other dogs. Learn reliable recall and attention even in challenging situations.",
    slug: "root-class",
    image: "/images/classes/root.jpg",
  },
];

const everydayLife = [
  {
    name: "Environment & Good Habits",
    description:
      "Learn how to navigate real-world environments while building calmness and good habits.",
    slug: "environment-good-habits",
    image: "/images/classes/environment.jpg",
  },
  {
    name: "Callback",
    description:
      "Train a rock-solid recall so your dog comes back to you — even around distractions.",
    slug: "callback",
    image: "/images/classes/callback.jpg",
  },
  {
    name: "Without A Word",
    description:
      "Discover how to communicate clearly with your dog using only body language and context — no words needed.",
    slug: "without-word",
    image: "/images/classes/withoutword.jpg",
  },
  {
    name: "Impulse Control",
    description:
      "Help your dog master patience, calmness, and self-control in everyday situations.",
    slug: "impulse-control",
    image: "/images/classes/puppy.jpg",
  },
  {
    name: "Clicker",
    description:
      "Learn how to use clicker training to communicate faster and more clearly with your dog.",
    slug: "clicker",
    image: "/images/classes/clicker.jpg",
  },
  {
    name: "Tricks & Tricks",
    description:
      "Have fun while teaching your dog engaging tricks that build focus, creativity, and teamwork.",
    slug: "tricks-tricks",
    image: "/images/classes/trickstricks.jpg",
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-16 h-auto hover:rotate-12 transition duration-200">
              <img src="/fetch1.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="text-sm text-orange-800 mt-4">
            Helping humans become better dog owners.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-orange-800">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/classes">Classes</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Classes */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-4">Popular Classes</h4>
          <ul className="space-y-2 text-orange-800">
            <li><Link href="/classes/puppy-class">Puppy Class</Link></li>
            <li><Link href="/classes/root-class">Root Class</Link></li>
            <li><Link href="/classes/environment-good-habits">Environment & Good Habits</Link></li>
            <li><Link href="/classes/callback">Callback</Link></li>
            <li><Link href="/classes/without-word">Without A Word</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-orange-800">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm">
        <p className="text-orange-800">
          © {new Date().getFullYear()} Helping humans be better dog owners.
        </p>
      </div>
    </footer>
  );
}
