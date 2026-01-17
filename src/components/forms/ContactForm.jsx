import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuery = {
      id: Date.now().toString(),
      ...form,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("queries")) || [];
    localStorage.setItem("queries", JSON.stringify([newQuery, ...existing]));

    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-xl p-6 rounded-xl space-y-4"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full input"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
        className="w-full input"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="w-full input"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="w-full input h-28"
      />

      <button className="w-full bg-cyan-500 text-black py-2 rounded-lg font-semibold">
        Submit Query
      </button>

      {success && (
        <p className="text-green-400 text-sm text-center">
          Query saved successfully
        </p>
      )}
    </form>
  );
}
