import  { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        isScroll
          ? "bg-[#08101F]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">

            <img
              src={assets.logo}
              alt="logo"
              className="w-14 h-14 object-contain"
            />

            <h1 className="text-2xl lg:text-3xl font-black text-white tracking-wide">
              GLASS
              <span className="text-red-900 offset-2">W🌏RLD</span>
            </h1>

          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">

            <a
              href="#home"
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300 text-[16px] font-medium group"
            >
              Home

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#about"
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300 text-[16px] font-medium group"
            >
              About

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#services"
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300 text-[16px] font-medium group"
            >
              Services

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#location"
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300 text-[16px] font-medium group"
            >
              Location

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300 text-[16px] font-medium group"
            >
              Contact

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              Contact Us

              <ArrowUpRight size={18} />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#08101F]/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-8 gap-6">

              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium border-b border-white/5 pb-4"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium border-b border-white/5 pb-4"
              >
                About
              </a>

              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium border-b border-white/5 pb-4"
              >
                Services
              </a>

              <a
                href="#location"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium border-b border-white/5 pb-4"
              >
                Location
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium border-b border-white/5 pb-4"
              >
                Contact
              </a>

              {/* MOBILE CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-cyan-400 text-black py-4 rounded-2xl font-semibold mt-4"
              >
                Contact Us

                <ArrowUpRight size={18} />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;