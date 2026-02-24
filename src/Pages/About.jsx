import { motion } from "framer-motion";
import Container from "../components/common/Container";

export default function About() {
  const leadership = [
    { name: "Rahul Yadav", role: "Founder", image: "/founder.png.png" },
    { name: "Ramesh Kumar Yadav", role: "CEO", image: "/ceo.png.png" },
  ];

  const team = [
    {
      name: "Mahesh Kumar Yadav",
      role: "Product Manager (20+ Years Dairy Industry Experience)",
      image: "/defaultAvatar.png",
    },
    {
      name: "Suresh Kumar Yadav",
      role: "Marketing Head (10+ Years Marketing Experience)",
      image: "/defaultAvatar.png",
    },
    {
      name: "Pooja Yadav",
      role: "Agri. Advisor (Agri. B.Sc.)",
      image: "/girl.png.png",
    },
    {
      name: "Priyanshu Singh Lodhi",
      role: "Lead Developer (B.Tech. CSE)",
      image: "/defaultAvatar.png",
    },
    {
      name: "Prince Singh Rao",
      role: "Web Developer (B.Tech. CSE)",
      image: "/defaultAvatar.png",
    },
    {
      name: "Mohit Suthar",
      role: "App Developer (B.Tech. CSE)",
      image: "/defaultAvatar.png",
    },
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
              Our Leadership & Core Team
              <span className="block text-rose-600">
                Driving Innovation in Dairy & Technology
              </span>
            </h1>

            <p className="text-lg text-gray-600">
              We combine agriculture expertise, marketing strategy, and modern
              technology to build scalable, high-impact solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-gray-600">
              Visionary leadership driving long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 text-center border-2 border-yellow-400 shadow-xl hover:shadow-2xl transition"
              >
                <div className="relative inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 mx-auto rounded-full mb-6 border-4 border-yellow-500 object-cover"
                  />
                  <span className="absolute -top-3 -right-3 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                    LEADER
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CORE TEAM ================= */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-gray-600">
              The people who execute with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-6 border-4 border-rose-500 object-cover"
                />

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
