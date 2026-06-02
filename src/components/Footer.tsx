import {
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

function Footer() {
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Location",
    "Contact",
  ];

  const services = [
    "Glass Installations",
    "Shower Cubicles",
    "Office Partitioning",
    "Glass Railings",
    "Decorative Glass Art",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#08101F] pt-24 pb-10 px-6 lg:px-20 border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10">
        
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div>
            <h1 className="text-4xl font-black text-white">
              Glass<span className="text-cyan-400">World</span>
            </h1>

            <p className="text-gray-400 leading-loose mt-6">
              Crafting elegant architectural glass solutions with precision,
              transparency, and modern innovation for homes and commercial
              spaces.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="https://www.instagram.com/glassworldkenya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://web.facebook.com/glassworldkenya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@glassworld28"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://wa.me/254701781432"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-white text-2xl font-bold">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  {link}

                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-white text-2xl font-bold">
              Our Services
            </h2>

            <div className="flex flex-col gap-4 mt-8">
              {services.map((service, index) => (
                <p
                  key={index}
                  className="text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-white text-2xl font-bold">
              Contact Info
            </h2>

            <div className="flex flex-col gap-6 mt-8">

              <div>
                <p className="text-cyan-400 font-medium">
                  Phone
                </p>

                <p className="text-gray-400 mt-2">
                  +254 701 781 432
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-medium">
                  Email
                </p>

                <p className="text-gray-400 mt-2 break-words">
                  ronaldglassworld@gmail.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-medium">
                  Location
                </p>

                <p className="text-gray-400 mt-2">
                  Machakos Junction, Kenya
                  p.o box 8 Machakos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 GlassWorld Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <p className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;