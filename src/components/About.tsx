import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, Sparkles, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      icon: <Sparkles size={24} />,
      title: "Modern Glass Design",
      desc: "Elegant and minimal installations crafted for modern living spaces.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Premium Durability",
      desc: "High-quality tempered and laminated glass built for long-term safety.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Architectural Precision",
      desc: "Engineered with detail for homes, offices, and commercial projects.",
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Trusted Expertise",
      desc: "Years of experience delivering exceptional glass solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 lg:px-20 py-24 bg-[#0B1120] scroll-mt-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src={assets.abt_img}
            alt="About GlassWorld"
            className="w-full h-[650px] object-cover rounded-[40px]"
          />

          {/* Frosted Glass Card */}
          <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl max-w-xs">
            <h3 className="text-white text-3xl font-bold">20+</h3>
            <p className="text-gray-500 mt-2">
              Years crafting premium glass experiences for modern architecture.
            </p>
          </div>

          {/* Floating Mini Card */}
          <div className="absolute top-8 -right-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-cyan-300 font-semibold">
              Trusted By 500+ Clients
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Small Heading */}
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            About GlassWorld
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mt-5">
            Crafting Modern Spaces With
            <span className="text-cyan-400"> Elegant Transparency</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-loose mt-8 max-w-2xl">
            GlassWorld Engineering specializes in premium architectural glass,
            aluminum systems, and innovative interior installations. We combine
            precision engineering with sophisticated aesthetics to transform
            homes, offices, and commercial spaces into timeless environments.
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent my-10" />

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-white text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="learn_more" className="mt-10 w-fit px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20 cursor-pointer">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default About;