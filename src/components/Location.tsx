import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock3,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import  { Link } from "react-router-dom";

function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#0B1120] py-24 px-6 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Our Location
          </p>

          <h1 className="text-5xl lg:text-6xl font-black text-white mt-6 leading-tight">
            Visit Our
            <span className="text-cyan-400"> Glass Studio</span>
          </h1>

          <p className="text-gray-400 text-lg leading-loose mt-8 max-w-xl">
            We are located at Machakos Junction, providing modern architectural
            glass solutions for homes, offices, and commercial spaces. Visit us
            for consultations, custom projects, and premium installations.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col gap-5 mt-10">

            {/* Address */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <MapPin />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Office Address
                </h3>

                <p className="text-gray-400 mt-2">
                  Machakos Junction, Nairobi Highway,
                  Kenya. p.o box 8 Machakos
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Phone />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Contact Number
                </h3>

                <p className="text-gray-400 mt-2">
                  +254 701 781 432
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Mail />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Email Address
                </h3>

                <p className="text-gray-400 mt-2">
                  ronaldglassworld@gmail.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Clock3 />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Working Hours
                </h3>

                <p className="text-gray-400 mt-2">
                  Monday - Saturday
                  <br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link to="/Get_Direction" className="mt-10 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold flex items-center gap-2 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">
            Get Directions
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        {/* RIGHT SIDE MAP */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Map Container */}
          <div className="overflow-hidden rounded-[35px] border border-white/10 shadow-2xl h-[500px]">
            <iframe
              src="YOUR_GOOGLE_MAP_LINK"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-6 py-4">
            <p className="text-cyan-400 font-semibold">
              GlassWorld Solutions
            </p>

            <p className="text-gray-300 text-sm mt-1">
              Machakos Junction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;