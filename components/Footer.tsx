"use client";

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
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

        {/* Product */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-orange-800">
            <li>AI Dog Coach</li>
            <li>Step-by-Step Programs</li>
            <li>Behavior Tracking</li>
            <li>Community</li>
            <li>Mobile App</li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-4">Learn</h4>
          <ul className="space-y-2 text-orange-800">
            <li>Training Guides</li>
            <li>Behavior Tips</li>
            <li>Enrichment Ideas</li>
            <li>Help Center</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-orange-800">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10 py-6 text-center text-sm ">
      <p className="text-orange-800">
  © {new Date().getFullYear()} Helping humans be better dog owners.
</p>
      </div>
    </footer>
  );
}
