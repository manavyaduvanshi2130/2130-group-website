import Container from "../components/common/Container";

export default function Products() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-lg text-gray-600">
              Real-world digital products built, launched, and actively used by
              customers.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= CURRENT PRODUCT ================= */}
      <section className="pb-28 bg-white">
        <Container>
          <div className="bg-white border rounded-3xl p-10 shadow-sm">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-red-500">
                    Agri-Tech / Utility
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                    Live & Working
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Aapni Dairy
                </h2>

                <p className="text-gray-600 mb-6 max-w-2xl">
                  Aapni Dairy is a comprehensive digital solution designed for
                  local dairy owners and milk collectors to manage daily
                  operations. It replaces traditional
                  <strong> Bahi-Khata </strong>
                  with a secure, easy-to-use digital ledger system.
                </p>

                <ul className="space-y-2 text-gray-600 mb-8 text-sm">
                  <li>• Digital milk collection & payment tracking</li>
                  <li>• Farmer & customer ledger management</li>
                  <li>• Daily, monthly & yearly reports</li>
                  <li>• Simple interface for rural users</li>
                </ul>

                <a
                  href="https://play.google.com/store/apps/details?id=com.aapnidairy.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-red-500 font-medium
                    hover:underline
                  "
                >
                  View on Play Store →
                </a>
              </div>

              {/* RIGHT LOGO / VISUAL */}
              <div className="flex justify-center md:justify-end">
                <div className="border bg-white rounded-2xl p-8">
                  <img
                    src="../src/assests/images/projects/aapnidairy.jpg"
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
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want a Product Like This?
            </h2>
            <p className="text-gray-600 mb-8">
              We design and build production-ready apps and platforms for
              real-world businesses.
            </p>

            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                bg-red-500 text-white
                px-10 py-4 rounded-full
                font-semibold
                hover:bg-red-600 transition
              "
            >
              Start Your Project
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
