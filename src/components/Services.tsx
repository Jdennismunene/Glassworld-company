import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      id: 1,
      title: "Frameless Glass Doors",
      price: "From $180",
      desc: "Elegant frameless glass doors designed for modern homes and office interiors.",
      image: assets.service1,
    },

    {
      id: 2,
      title: "Office Partitioning",
      price: "From $350",
      desc: "Premium office glass partitions creating open, bright and productive spaces.",
      image: assets.service2,
    },

    {
      id: 3,
      title: "Shower Cubicles",
      price: "From $220",
      desc: "Luxury tempered-glass shower installations with sleek modern finishing.",
      image: assets.service3,
    },

    {
      id: 4,
      title: "Decorative Glass Art",
      price: "From $120",
      desc: "Creative artistic glass designs crafted to elevate interior aesthetics.",
      image: assets.service4,
    },

    {
      id: 5,
      title: "Glass Railings",
      price: "From $400",
      desc: "Minimal and durable railing systems for balconies, staircases and decks.",
      image: assets.service5,
    },

    {
      id: 6,
      title: "Custom Glass Installations",
      price: "Custom Pricing",
      desc: "Tailor-made glass solutions engineered specifically for your project.",
      image: assets.service6,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0F172A] py-24 px-6 lg:px-20 scroll-mt-24"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 leading-tight">
            Precision Crafted
            <span className="text-cyan-400">
              {" "}Glass Solutions
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-loose mt-8">
            We specialize in premium architectural glass installations,
            decorative artistry and custom modern solutions.
          </p>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-[260px]">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* PRICE */}
                <div className="absolute top-5 right-5 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {service.price}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h2 className="text-2xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mt-4">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <div className="flex items-center justify-between mt-8">

                  <button className="text-cyan-400 font-medium hover:text-cyan-300 transition duration-300">
                    Learn More
                  </button>

                  <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black transition duration-300 cursor-pointer">
                    <ArrowRight size={18}  />
                  </button>

                </div>
              </div>

              {/* SHINE EFFECT */}
              <div className="absolute top-0 left-[-120%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[140%] transition-all duration-1000" />

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >

          <Link to="all_service" className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20 cursor-pointer">
            View All Services
          </Link>

        </motion.div>
      </div>
    </section>
  );
}

export default Services;