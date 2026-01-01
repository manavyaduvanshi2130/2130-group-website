import { motion } from "framer-motion";
import Container from "../common/Container";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/servicesData";

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent" />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do Best
          </h2>
          <p className="text-neutral-400 text-lg">
            We help companies design, build, and scale high-quality digital
            products through strategy, design, and engineering.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-black px-10 py-4 rounded-xl font-semibold transition"
          >
            Let’s Build Something
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
