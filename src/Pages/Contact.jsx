import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SocialLinks from "../components/common/SocialLinks";

export default function Contact() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm tracking-widest text-rose-600 font-semibold">
              CONTACT
            </span>

            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Let’s Build Something <br />
              <span className="text-rose-600">That Actually Works</span>
            </h1>

            <p className="text-lg text-gray-600">
              Have a product idea or need technical guidance? Tell us what
              you’re building — we’ll help you shape it.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ================= MAIN CONTACT ================= */}
      <section className="py-5 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* LEFT – QUICK CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>

              <p className="text-gray-600 mb-8">
                Prefer quick communication? Reach us directly.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">
                    rahulyadavmlsu2130@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    Rampura,Raithal, Jaipur, Rajasthan 303801
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Response Time</p>
                  <p className="font-medium text-gray-900">Within 24 hours</p>
                </div>
              </div>

              {/* SOCIAL + WHATSAPP */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Aapni Dairy
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Follow, download, or chat with us directly.
                </p>
                <SocialLinks />
              </div>
            </motion.div>

            {/* RIGHT – FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tell Us About Your Project
              </h3>

              <form className="grid md:grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows="5"
                    placeholder="What are you building? What help do you need?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                {/* BUTTON */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="
                      w-full bg-rose-600 text-white
                      py-4 rounded-xl font-semibold text-lg
                      hover:bg-rose-500 transition
                    "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
