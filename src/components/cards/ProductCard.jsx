import { motion } from "framer-motion";
import { employees } from "../../data/employeesData";

export default function ProductCard({
  name,
  description,
  image,
  tag,
  employeeIds = [],
}) {
  // Resolve employees working on this project
  const team = employees.filter((e) => employeeIds.includes(e.id));

  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        group relative rounded-2xl overflow-hidden
        bg-white/5 backdrop-blur
        border border-white/10
        hover:border-red-500/40
        transition
      "
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
        <span className="text-red-400 text-sm font-medium">{tag}</span>

        <h3 className="text-2xl font-semibold mt-2 mb-3">{name}</h3>

        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* 👇 Employees */}
        {team.length > 0 && (
          <div className="mt-5">
            <p className="text-xs text-neutral-500 mb-2">Team</p>
            <div className="flex items-center -space-x-3">
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
                    hover:scale-110
                    transition
                  "
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
