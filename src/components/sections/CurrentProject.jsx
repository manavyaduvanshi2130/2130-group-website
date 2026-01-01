import { projects } from "../../data/ProjectsData";
import ProjectCard from "../cards/ProjectCard";
import Container from "../common/Container";

export default function CurrentProject() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Current Product (Live)
          </h2>
          <p className="text-gray-600">
            A real-world product built, launched, and actively used by
            customers.
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-10 shadow-sm">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-red-500 font-medium">
                  Agri-Tech / Utility
                </span>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  Live & Working
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Aapni Dairy
              </h3>

              <p className="text-gray-600 max-w-2xl mb-6">
                Aapni Dairy is a comprehensive digital solution designed for
                local dairy owners and milk collectors to manage daily
                operations. It replaces traditional Bahi-Khata with a secure
                digital ledger system.
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=com.aapnidairy.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-500 font-medium hover:underline"
              >
                View on Play Store →
              </a>
            </div>

            {/* RIGHT LOGO */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white border rounded-2xl p-6">
                <img
                  src="../src/assests/images/projects/aapnidairy.jpg"
                  alt="Aapni Dairy Logo"
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
