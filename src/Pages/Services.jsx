import { motion } from "framer-motion";
import Container from "../components/common/Container";

export default function Services() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <Container>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services That Build
              <span className="block text-red-500">
                Real-World Digital Products
              </span>
            </h1>

            <p className="text-lg text-gray-600">
              From dairy-tech solutions to AI assistants — we design, develop,
              and scale products that solve real business problems.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-20 max-w-6xl mx-auto">
            <ServiceBlock
              number="01"
              title="Dairy Management Systems"
              description="End-to-end digital systems for dairy owners and milk collectors."
              points={[
                "Digital ledger (Bahi-Khata replacement)",
                "Milk collection & payment tracking",
                "Farmer & customer management",
              ]}
              image="../src/assests/images/hero/Dairy.jpg"
            />

            <ServiceBlock
              number="02"
              title="Web Development"
              description="High-performance websites and dashboards built for scale."
              points={[
                "Admin panels & dashboards",
                "Business websites",
                "Secure backend systems",
              ]}
              image="../src/assests/images/hero/Website.jpg"
              reversed
            />

            <ServiceBlock
              number="03"
              title="App Development"
              description="Production-ready Android applications for real users."
              points={[
                "Play Store deployment",
                "User-friendly UI",
                "Performance optimization",
              ]}
              image="../src/assests/images/hero/AppDevelopment.jpg"
            />

            <ServiceBlock
              number="04"
              title="AI Assistant Development"
              description="Smart AI-powered assistants for automation and insights."
              points={[
                "Custom AI assistants",
                "Chatbots & voice assistants",
                "Workflow automation",
              ]}
              image="../src/assests/images/hero/AIAssitant.jpg"
              reversed
            />

            <ServiceBlock
              number="05"
              title="IT Consulting"
              description="Senior-level guidance for architecture and scaling."
              points={[
                "System architecture",
                "Tech stack decisions",
                "Long-term support & optimization",
              ]}
              image="../src/assests/images/hero/ITConsultant.jpg"
            />
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="rounded-3xl bg-black px-12 py-14 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Have a Project in Mind?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Let’s build something meaningful together.
            </p>
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                bg-red-500 text-white
                px-10 py-4 rounded-full font-semibold
                hover:bg-red-600 transition
              "
            >
              Start a Project
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ================= COMPONENT ================= */

function ServiceBlock({ number, title, description, points, image, reversed }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-14 items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <div>
        <span className="text-sm font-semibold text-red-500">{number}</span>
        <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 max-w-md">{description}</p>

        <ul className="space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="h-2 w-2 bg-red-500 rounded-full" />
              <span className="text-gray-700 text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden border bg-gray-100">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
    </motion.div>
  );
}
