import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SocialLinks from "../components/common/SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    console.log("New Contact Query:", formData);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

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
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                    katnaxit@gmail.com
                  </p>
                </div>

                {/* ✅ PHONE ADDED HERE */}
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+916367580153"
                    className="font-medium text-gray-900 hover:text-rose-600 transition"
                  >
                    +91 6367580153
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    Rampura, Raithal, Jaipur, Rajasthan 303801
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Response Time</p>
                  <p className="font-medium text-gray-900">Within 24 hours</p>
                </div>
              </div>

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

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full bg-rose-600 text-white
                      py-4 rounded-xl font-semibold text-lg
                      hover:bg-rose-500 transition
                      disabled:opacity-60
                    "
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {success && (
                  <p className="md:col-span-2 text-green-600 text-sm">
                    Your query has been submitted successfully.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
