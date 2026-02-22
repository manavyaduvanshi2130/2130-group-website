import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import CurrentProject from "../components/sections/CurrentProject";
import { services } from "../data/ServicesData";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-black text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <Container>
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full items-center">
              {/* LEFT */}
              <div>
                <p className="text-sm tracking-widest text-red-500 mb-4">
                  HIRE AND WORK WITH
                </p>

                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Expert Professional <br /> Contractors
                </h1>

                <p className="text-gray-300 max-w-xl mb-10">
                  We design, build, and scale digital products with precision,
                  clarity, and real-world expertise.
                </p>

                <div className="flex items-center gap-8">
                  <Link
                    to="/contact"
                    className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
                  >
                    Start Project
                  </Link>

                  <Link
                    to="/products"
                    className="
                      relative font-medium
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-0 after:bg-red-500
                      after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    Our Products →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm tracking-widest text-red-500 uppercase font-semibold">
                About Us
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">
                Building Digital Products <br className="hidden md:block" />
                With Long-Term Impact
              </h2>

              <p className="text-gray-600 text-lg mb-6 max-w-xl">
                2130 Group is a technology-driven initiative focused on solving
                real-world problems through digital solutions, especially in
                dairy management and local business ecosystems.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-gray-300 px-8 py-4 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
              >
                Read More About Us →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Senior-Level Execution",
                "Clean & Scalable Architecture",
                "Business-Focused Development",
                "Long-Term Technical Support",
              ].map((item) => (
                <div
                  key={item}
                  className="p-6 rounded-2xl border bg-gray-50 hover:border-red-500 transition"
                >
                  <p className="font-semibold text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CURRENT PRODUCT ================= */}
      <section className="">
        <CurrentProject />

        {/* VIEW ALL PRODUCTS CTA */}
        <div className="text-center pb-16">
          <Link
            to="/products"
            className="
              inline-block
              bg-black
              text-white
              border-black border-2
              px-10 py-4
              rounded-full
              font-medium
              hover:bg-red-500
              hover:border-red-500
              hover:text-white
              transition
            "
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical, real-world services built for businesses that need
              reliability and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <p className="text-red-500 font-bold mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-block border border-gray-300 px-10 py-4 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
