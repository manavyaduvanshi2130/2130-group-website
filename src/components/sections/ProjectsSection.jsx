import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { projects } from "../../data/projectsData";
import { employees } from "../../data/employeesData";

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
          {projects.map((project) => {
            const team = employees.filter((e) =>
              project.employees?.includes(e.id)
            );

            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                className="
                  rounded-2xl overflow-hidden
                  bg-white/5 border border-white/10
                  hover:border-red-500/40
                  transition
                "
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{project.name}</h3>

                  <p className="text-neutral-400 text-sm mb-4">
                    {project.category}
                  </p>

                  {/* Team */}
                  {team.length > 0 && (
                    <div className="mb-5">
                      <p className="text-xs text-neutral-500 mb-2">Team</p>
                      <div className="flex -space-x-3">
                        {team.map((emp) => (
                          <img
                            key={emp.id}
                            src={emp.avatar}
                            alt={emp.name}
                            title={`${emp.name} — ${emp.role}`}
                            className="
                              w-8 h-8 rounded-full
                              border border-black
                              object-cover
                            "
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="
                      inline-block mt-4
                      bg-red-600 text-white
                      text-xs font-semibold
                      px-5 py-2 rounded-full
                      hover:bg-red-700
                      transition
                    "
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
