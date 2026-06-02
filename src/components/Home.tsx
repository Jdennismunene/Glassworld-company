import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { bcgImages } from "../assets/assets";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bcgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden scroll-mt-20"
    >
      {/* ================================================= */}
      {/* BACKGROUND SLIDER */}
      {/* ================================================= */}

      <div className="absolute inset-0">

        {bcgImages.map((item, index) => (
          <img
            key={item.id}
            src={item.img}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms]
            ${
              index === currentImage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      </div>

      {/* ================================================= */}
      {/* GLOW EFFECTS */}
      {/* ================================================= */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full z-0" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full z-0" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-10 lg:px-20 pt-24">

        <div className="max-w-4xl">

          {/* SMALL TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[6px] text-cyan-400 text-sm md:text-base font-semibold"
          >
            Premium Glass & Aluminium Solutions
          </motion.p>

          {/* MAIN TITLE */}
          <AnimatePresence mode="wait">

            <motion.h1
              key={currentImage}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.8 }}
              className="text-white font-black leading-tight mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl"
            >
              {bcgImages[currentImage].title}
            </motion.h1>

          </AnimatePresence>

          {/* DESCRIPTION */}
          <AnimatePresence mode="wait">

            <motion.p
              key={bcgImages[currentImage].description}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 leading-loose mt-8 max-w-2xl
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl"
            >
              {bcgImages[currentImage].description}
            </motion.p>

          </AnimatePresence>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row gap-5 mt-10"
          >

            {/* PRIMARY BUTTON */}
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:scale-105"
            >
              Explore Services

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
              />
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 backdrop-blur-md bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Play size={18} />

              Contact Us
            </a>

          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 max-w-2xl"
          >

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-3xl font-black text-white">
                500+
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Completed Projects
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-3xl font-black text-white">
                20+
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Years Experience
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 col-span-2 sm:col-span-1">
              <h2 className="text-3xl font-black text-white">
                98%
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Client Satisfaction
              </p>
            </div>

          </motion.div>

          {/* SLIDER INDICATORS */}
          <div className="flex items-center gap-4 mt-12">

            {bcgImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all duration-500
                ${
                  index === currentImage
                    ? "w-12 bg-cyan-400"
                    : "w-3 bg-gray-500 hover:bg-gray-300"
                }`}
              />
            ))}

          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* FLOATING GLASS CARD */}
      {/* ================================================= */}

      <div className="absolute bottom-10 right-10 hidden xl:block backdrop-blur-xl bg-white/10 border border-white/10 rounded-[30px] p-8 z-10">

        <p className="uppercase tracking-[4px] text-cyan-400 text-sm">
          GlassWorld Engineering
        </p>

        <h2 className="text-white text-4xl font-black mt-4 leading-tight">
          Modern <br /> Architectural <br /> Transparency
        </h2>

        <div className="h-px w-full bg-white/10 my-6" />

        <p className="text-gray-300 leading-relaxed max-w-xs">
          Elegant glass installations crafted to transform homes,
          offices and commercial spaces.
        </p>

      </div>

      {/* ================================================= */}
      {/* SCROLL INDICATOR */}
      {/* ================================================= */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10">

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm tracking-[3px] uppercase text-gray-300">
            Scroll
          </p>

          <div className="w-[2px] h-10 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-cyan-400 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;