import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import featuredWork from "../data/featuredWork";

export default function FeaturedProjectSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredWork.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const project = featuredWork[index];

  return (
    <div className="relative w-full max-w-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="
            bg-white rounded-2xl p-8
            shadow-xl border
          "
        >
          <span className="text-sm text-gray-500 block mb-2">
            Featured Project
          </span>

          <h4 className="text-xl font-semibold mb-3 text-black  ">
            {project.title}
          </h4>

          <p className="text-gray-600 mb-6">{project.description}</p>

          <a
            href={project.link}
            className="text-red-500 font-medium hover:underline"
          >
            View Project →
          </a>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="flex gap-2 mt-4 justify-center">
        {featuredWork.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
