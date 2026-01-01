import { motion } from "framer-motion";

export default function ServiceCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-indigo-500/40 transition"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
}
