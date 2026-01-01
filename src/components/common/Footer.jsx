import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-4">
            2130<span className="text-red-500">GROUP</span>
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            A digital product studio focused on building scalable, reliable, and
            business-driven software solutions.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-red-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-red-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CURRENT PRODUCT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Current Product</h4>
          <p className="text-sm text-white font-medium mb-2">Aapni Dairy</p>
          <p className="text-sm leading-relaxed mb-4">
            Digital ledger & management app for dairy owners and milk
            collectors.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.aapnidairy.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-500 font-medium hover:underline"
          >
            View on Play Store →
          </a>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <p className="text-sm mb-4">
            Follow Aapni Dairy or reach out directly.
          </p>
          <SocialLinks />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>©{new Date().getFullYear()} 2130 GROUP. All rights reserved.</p>
          <p className="text-gray-500">Built with clarity & performance</p>
        </div>
      </div>
    </footer>
  );
}
