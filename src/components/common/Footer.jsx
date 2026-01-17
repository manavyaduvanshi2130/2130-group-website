import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-4">
        {/* BRAND WITH LOGO */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/src/assests/images/logos/logo1.png"
              alt="2130 Group Logo"
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-white text-lg font-semibold">2130 GROUP</h3>
          </div>

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Digital Product Studio
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CURRENT PRODUCT */}
        <div>
          {" "}
          <h4 className="text-white font-semibold mb-4">
            Current Product
          </h4>{" "}
          <p className="text-sm text-white font-medium mb-2">Aapni Dairy</p>{" "}
          <p className="text-sm leading-relaxed mb-4">
            {" "}
            Digital ledger & management app for dairy owners and milk
            collectors.{" "}
          </p>{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.aapnidairy.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-500 font-medium hover:underline"
          >
            {" "}
            View on Play Store →{" "}
          </a>{" "}
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
          <p className="text-sm">Follow Aapni Dairy or reach out directly.</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <SocialLinks />
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} 2130 GROUP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
