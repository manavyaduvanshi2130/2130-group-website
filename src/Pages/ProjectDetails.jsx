import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import { projects } from "../data/ProjectsData";
import { employees } from "../data/employeesData";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="py-40">
        <Container>
          <p className="text-center text-gray-400">Project not found.</p>
        </Container>
      </section>
    );
  }

  const team = employees.filter((e) => project.employees?.includes(e.id));

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pt-40 pb-28 bg-black text-white relative overflow-hidden">
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />

        <Container>
          <Link
            to="/"
            className="relative z-10 inline-flex items-center gap-2 text-sm text-red-500 mb-10 hover:underline"
          >
            ← Back to Home
          </Link>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                  {project.category}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                  {project.status}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                {project.name}
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-10">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                    bg-white text-black px-8 py-4 rounded-full
                    font-semibold hover:bg-red-500 hover:text-white transition"
                >
                  Visit Product →
                </a>
              )}
            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-10 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-64 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-28 bg-white">
        <Container>
          <div className="max-w-4xl mb-20">
            <span className="text-sm uppercase tracking-widest text-red-500 font-semibold">
              Overview
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Built for Real-World Use
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Production Ready",
                desc: "Designed, tested, and deployed with real users and real data in mind.",
              },
              {
                title: "Scalable Architecture",
                desc: "Built to handle growth without compromising performance or stability.",
              },
              {
                title: "Security-Focused",
                desc: "Data integrity and security were core principles from the start.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border rounded-3xl p-10 hover:border-red-500 transition"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= TEAM ================= */}
      {team.length > 0 && (
        <section className="py-28 bg-gray-50">
          <Container>
            <div className="max-w-3xl mb-16">
              <span className="text-sm uppercase tracking-widest text-red-500 font-semibold">
                Team
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                People Behind the Product
              </h2>
              <p className="text-gray-600">
                A small, focused team responsible for designing, building, and
                shipping this product.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
              {team.map((emp) => (
                <div
                  key={emp.id}
                  className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={emp.avatar || emp.image}
                    alt={emp.name}
                    className="w-24 h-24 rounded-full mx-auto mb-5 object-cover"
                  />
                  <h4 className="font-semibold text-gray-900">{emp.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{emp.role}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
