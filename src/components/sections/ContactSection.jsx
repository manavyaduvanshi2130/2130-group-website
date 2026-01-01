import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
      <ContactForm />
    </section>
  );
}
