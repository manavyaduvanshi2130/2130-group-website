import { motion } from "framer-motion";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />

      <Container>
        <div className="min-h-[85vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              We Build <span className="text-indigo-400">Future-Ready</span>
              <br /> Digital Products
            </h1>

            <p className="text-neutral-400 text-lg mb-10">
              2130 Group helps companies design, build, and scale technology
              that lasts.
            </p>

            <div className="flex gap-4">
              <a className="bg-indigo-500 hover:bg-indigo-400 text-black px-8 py-4 rounded-xl font-semibold">
                Get Started
              </a>
              <a className="border border-white/20 px-8 py-4 rounded-xl">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
