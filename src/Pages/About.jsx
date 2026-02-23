import { motion } from "framer-motion";
import Container from "../components/common/Container";

export default function About() {
  const team = [
    { name: "Rahul Yadav", role: "Founder" },
    { name: "Ramesh Kumar Yadav", role: "CEO" },
    {
      name: "Mahesh Kumar Yadav",
      role: "Product Manager (20+ Dairy Industry Experience)",
    },
    {
      name: "Suresh Kumar Yadav",
      role: "Marketing Head (10+ Marketing Experience)",
    },
    { name: "Pooja Yadav", role: "Agri. Advisor (Agri. B.Sc.)" },
    { name: "Priyanshu Singh Lodhi", role: "Lead Developer (B.Tech. CSE)" },
    { name: "Prince Singh Rao", role: "Web Developer (B.Tech. CSE)" },
    { name: "Mohit Suthar", role: "App Developer (B.Tech. CSE)" },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Building Digital Products
              <span className="block text-rose-600">
                That Actually Matter
              </span>
            </h1>

            <p className="text-lg text-gray-600">
              2130 Group is a digital product studio helping startups,
              enterprises, and agencies turn ideas into scalable,
              high-impact software.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 mb-4">
                We started 2130 Group with a simple belief — great products are
                built at the intersection of design, engineering, and strategy.
              </p>

              <p className="text-gray-600">
                Today, we partner with ambitious teams to design, build, and
                scale digital products that are fast, reliable, and loved by
                users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden h-[300px] bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Team Workspace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 bg-gray-50">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Believe In
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide how we work, collaborate, and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Clarity First",
                desc: "Simple solutions always outperform complex ones.",
              },
              {
                title: "Design with Purpose",
                desc: "Every pixel and decision serves a real business goal.",
              },
              {
                title: "Engineering Excellence",
                desc: "Scalable, maintainable, and future-ready code.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership & Core Team
            </h2>
            <p className="text-gray-600">
              Driven by experience, clarity, and execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-rose-600 to-pink-600">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Let’s Build Something Great
            </h2>
            <p className="text-white/90 mb-10">
              Have an idea or product in mind? We’d love to hear about it.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition hover:rounded-full"
            >
              Start a Project
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
