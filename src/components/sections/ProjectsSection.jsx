import { motion } from "framer-motion";
import Container from "../common/Container";
import { projects } from "../../data/projectsData";

export default function ProjectsSection() {
  return (
    <section className="py-32">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-neutral-400 text-lg">
            A snapshot of the products we’ve helped bring to life.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-500/40 transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-neutral-400 text-sm">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
