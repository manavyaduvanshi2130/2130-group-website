import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now: client-side success
    console.log("Contact Form Data:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm text-neutral-400 mb-2">Your Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-neutral-400 mb-2">
          Email Address
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition"
          placeholder="john@company.com"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-neutral-400 mb-2">
          Project Details
        </label>
        <textarea
          required
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition resize-none"
          placeholder="Tell us about your project, timeline, and goals..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-400 text-black font-semibold py-4 rounded-xl transition"
      >
        Send Message
      </button>

      {/* Success Message */}
      {submitted && (
        <p className="text-green-400 text-sm text-center">
          Thanks! We’ll be in touch shortly.
        </p>
      )}
    </motion.form>
  );
}
