import { motion } from "framer-motion";

export default function ProductCard({ name, description, image, tag }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-indigo-500/40 transition"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-indigo-400 text-sm font-medium">{tag}</span>

        <h3 className="text-2xl font-semibold mt-2 mb-3">{name}</h3>

        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
