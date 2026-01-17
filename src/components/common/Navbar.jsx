import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItem = (active = false) =>
    `
    relative block py-2 text-base font-medium transition cursor-pointer
    ${active ? "text-red-500" : "text-gray-300 hover:text-white"}
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-red-500
    after:transition-all after:duration-300
    hover:after:w-full
    ${active ? "after:w-full" : ""}
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-xl md:text-2xl font-extrabold text-white tracking-wide"
          >
            2130<span className="text-red-500">Group</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={navItem(isActive("/"))}>
              Home
            </Link>

            <Link to="/services" className={navItem(isActive("/services"))}>
              Services
            </Link>

            <Link to="/products" className={navItem(isActive("/products"))}>
              Products
            </Link>

            <Link to="/about" className={navItem(isActive("/about"))}>
              About
            </Link>

            <Link to="/contact" className={navItem(isActive("/contact"))}>
              Contact
            </Link>
          </nav>

          {/* DESKTOP CTA */}
          <Link
            to="/contact"
            className="
              hidden md:inline-flex items-center justify-center
              bg-red-500 px-6 py-3 rounded-full
              text-white font-semibold
              hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30
              transition
            "
          >
            Start Project
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {/* ✅ HOME */}
            <Link
              onClick={() => setOpen(false)}
              to="/"
              className={navItem(isActive("/"))}
            >
              Home
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/services"
              className={navItem(isActive("/services"))}
            >
              Services
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/products"
              className={navItem(isActive("/products"))}
            >
              Products
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/about"
              className={navItem(isActive("/about"))}
            >
              About
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className={navItem(isActive("/contact"))}
            >
              Contact
            </Link>

            {/* MOBILE CTA */}
            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="
                block mt-6 text-center
                bg-red-500 py-3 rounded-full
                font-semibold text-white
                hover:bg-red-600
                transition
              "
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
