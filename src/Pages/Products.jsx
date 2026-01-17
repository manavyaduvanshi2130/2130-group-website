import { Link } from "react-router-dom";
import Container from "../components/common/Container";

export default function Products() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="py-28 bg-black text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-red-500 mb-4 uppercase">
              Products
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Real Products. <br /> Real Usage.
            </h1>

            <p className="text-lg text-gray-300">
              Digital products built, launched, and actively used by real
              customers in real environments.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= FEATURED PRODUCT ================= */}
      <section className="py-24 bg-white">
        <Container>
          <div className="border rounded-3xl p-12 shadow-sm hover:shadow-md transition">
            <div className="grid lg:grid-cols-3 gap-14 items-center">
              {/* LEFT CONTENT */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-red-500">
                    Agri-Tech / Utility
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                    Live & Working
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-5">
                  Aapni Dairy
                </h2>

                <p className="text-gray-600 mb-6 max-w-2xl">
                  Aapni Dairy is a production-grade digital platform designed
                  for local dairy owners and milk collectors. It replaces
                  traditional <strong>Bahi-Khata</strong> with a secure,
                  easy-to-use digital ledger system optimized for rural users.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600 mb-10">
                  <li>• Digital milk collection & payments</li>
                  <li>• Farmer & customer ledger management</li>
                  <li>• Daily, monthly & yearly reports</li>
                  <li>• Simple UI for non-technical users</li>
                </ul>

                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap items-center gap-6">
                  {/* INTERNAL VIEW BUTTON */}
                  <Link
                    to="/projects/aapni-dairy"
                    className="
                  inline-flex items-center
                  bg-red-600 text-white
                  px-6 py-3 rounded-full
                  text-sm font-semibold
                  hover:bg-red-700
                  transition
                "
                  >
                    View Details →
                  </Link>

                  {/* EXTERNAL PLAY STORE */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.aapnidairy.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:underline"
                  >
                    View on Play Store
                  </a>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-2xl border bg-gray-50 p-10">
                  <img
                    src="/src/assests/images/projects/aapnidairy.jpg"
                    alt="Aapni Dairy Logo"
                    className="h-36 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              Want a Product Like This?
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              We design and build scalable, production-ready apps and platforms
              tailored for real-world business problems.
            </p>

            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                bg-black text-white
                px-12 py-5 rounded-full
                font-semibold
                hover:bg-red-500 transition
              "
            >
              Start Your Project
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
