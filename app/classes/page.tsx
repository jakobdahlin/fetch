"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
    name: "Person Trail",
    description:
      "Scent work is a dog's superpower — and this class gives your dog the chance to take the lead.",
    slug: "person-trail",
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

export default function ClassesPage() {
  const router = useRouter();

  const handleStartClass = (slug: string) => {
    const isLoggedIn = false;
    if (isLoggedIn) {
      router.push(`/class/${slug}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-orange-100 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              Our Classes
            </span>
          </h1>
          <p className="text-xl text-orange-800 max-w-2xl mx-auto">
            Build a stronger connection with your dog through knowledge, play, and teamwork.
          </p>
        </motion.div>

        <section className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Signature Classes
              </span>
            </h1>
            <p className="text-md text-orange-800 max-w-5xl mx-auto">
              Our signature classes — Puppy Class, Daily Obedience, and Root Class — are designed to give every dog and owner the strongest possible foundation. These classes focus on building trust, communication, and lifelong skills that support a well-balanced, confident dog. Whether you're starting with a young puppy or helping an older dog refine essential behaviors, these classes are the key to creating harmony in daily life and setting the stage for all future training.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {signatureClasses.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col rounded-2xl bg-white md:hover:bg-gradient-to-r md:hover:from-red-400/5 md:hover:to-orange-300/5 backdrop-blur-sm border-orange-300/50 duration-300 md:hover:shadow-xl">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="h-[250px] w-auto object-cover rounded-xl mb-4"
                      style={{
                        WebkitMaskImage:
                          "linear-gradient(to top, transparent 0%, black 25%, black 85%, transparent 100%), linear-gradient(to left, transparent 0%, black 25%, black 45%, transparent 100%)",
                        maskImage:
                          "linear-gradient(to top, transparent 0%, black 25%, black 85%, transparent 100%), linear-gradient(to left, transparent 0%, black 25%, black 85%, transparent 100%)",
                        WebkitMaskComposite: "intersect",
                        maskComposite: "intersect",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                      }}
                    />
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                      {cls.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-grow">
                    <p className="text-orange-800 text-base leading-relaxed">{cls.description}</p>
                    <div className="flex mt-8 gap-3 mx-auto">
                      <Button
                        variant="outline"
                        className="px-8 rounded-full text-orange-800 bg-white/30 duration-100 transition-all py-4 text-md shadow-xl shadow-orange-600/20 border border-orange-200/50 md:hover:bg-white/20 md:hover:shadow-lg md:hover:shadow-orange-600/20 md:hover:text-orange-700"
                        onClick={() => router.push(`/classes/${cls.slug}`)}
                      >
                        Learn More
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-red-400 to-orange-300 rounded-full border border-transparent text-white px-8 py-4 text-md md:hover:shadow-xl md:hover:shadow-orange-600/20 duration-100 transition-all"
                        onClick={() => handleStartClass(cls.slug)}
                      >
                        Start Class
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Everyday Life
              </span>
            </h1>
            <p className="text-md text-orange-800 max-w-5xl mx-auto">
              Everyday Life classes are designed to help you and your dog thrive together in real-world situations. These classes focus on developing good habits, calm behavior, clear communication, and reliable responses that make daily life easier and more enjoyable. Whether it’s navigating busy environments, mastering recall, improving impulse control, or having fun with tricks, these classes provide practical skills that strengthen your relationship and support a well-balanced, confident dog.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {everydayLife.map((cls, index) => (
              <motion.div
                key={cls.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col rounded-2xl bg-white md:hover:bg-gradient-to-r md:hover:from-red-400/5 md:hover:to-orange-300/5 backdrop-blur-sm border-orange-300/50 duration-300 md:hover:shadow-xl">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="h-[250px] w-auto object-cover rounded-xl mb-4"
                      style={{
                        WebkitMaskImage:
                          "linear-gradient(to top, transparent 0%, black 25%, black 85%, transparent 100%), linear-gradient(to left, transparent 0%, black 25%, black 45%, transparent 100%)",
                        maskImage:
                          "linear-gradient(to top, transparent 0%, black 25%, black 85%, transparent 100%), linear-gradient(to left, transparent 0%, black 25%, black 85%, transparent 100%)",
                        WebkitMaskComposite: "intersect",
                        maskComposite: "intersect",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                      }}
                    />
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                      {cls.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-grow">
                    <p className="text-orange-800 text-base leading-relaxed">{cls.description}</p>
                    <div className="flex mt-8 gap-3 mx-auto">
                      <Button
                        variant="outline"
                        className="px-8 rounded-full text-orange-800 bg-white/30 duration-100 transition-all py-4 text-md shadow-xl shadow-orange-600/20 border border-orange-200/50 md:hover:bg-white/20 hover:shadow-lg md:hover:shadow-orange-600/20 md:hover:text-orange-700"
                        onClick={() => router.push(`/classes/${cls.slug}`)}
                      >
                        Learn More
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-red-400 to-orange-300 rounded-full border border-transparent text-white px-8 py-4 text-md md:hover:shadow-xl md:hover:shadow-orange-600/20 duration-100 transition-all"
                        onClick={() => handleStartClass(cls.slug)}
                      >
                        Start Class
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}