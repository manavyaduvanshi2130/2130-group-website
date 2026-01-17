import Container from "../components/common/Container";
import { employees } from "../data/employeesData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EmployeesSection() {
  return (
    <section className="py-28 bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-500 text-lg">
            The people who design, build, and ship our products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {employees.map((emp) => (
            <Link key={emp.id} to={`/employees/${emp.id}`} className="block">
              <motion.div
                whileHover={{ y: -6 }}
                className="
                  group bg-white
                  border rounded-2xl
                  p-8 text-center
                  transition
                  cursor-pointer
                  hover:shadow-xl
                  hover:border-red-500
                  hover:border-2
                "
              >
                {/* Avatar */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="
                      w-full h-full
                      rounded-full
                      object-cover
                      border
                    "
                  />

                  {/* Accent ring */}
                  <span
                    className="
                      absolute inset-0
                      rounded-full
                      ring-2 ring-red-500/20
                      group-hover:ring-red-500
                      transition
                    "
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {emp.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500 mt-1">{emp.role}</p>

                <p className="text-sm text-gray-500 mt-1">
                  <span className="text-black font-medium">Team:</span>{" "}
                  {emp.team}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
