import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socials = [
    {
      id: 1,
      name: "Instagram",
      username: "glassworldkenya",
      desc: "Explore our premium glass installations and modern architectural inspirations.",
      icon: <FaInstagram size={22} />,
      link: "https://www.instagram.com/glassworldkenya/",
    },
    {
      id: 2,
      name: "Facebook",
      username: "Glassworld kenya",
      desc: "Follow our latest projects, customer showcases and company updates.",
      icon: <FaFacebook size={22} />,
      link: "https://web.facebook.com/glassworldkenya/",
    },
    {
      id: 3,
      name: "TikTok",
      username: "@glassworld28",
      desc: "Watch satisfying installations and behind-the-scenes transformations.",
      icon: <FaTiktok size={20} />,
      link: "https://www.tiktok.com/@glassworld28",
    },
    {
      id: 4,
      name: "WhatsApp",
      username: "+254 701 781 432, 0112358855",
      desc: "Reach us directly for quotations and fast consultations.",
      icon: <MessageCircle size={22} />,
      link: "https://wa.me/254701781432",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // HERE YOU CAN CONNECT EMAILJS OR BACKEND
    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0F172A] py-24 px-6 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 leading-tight">
            Let’s Create
            <span className="text-cyan-400">
              {" "}
              Elegant Glass Spaces
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-loose mt-8">
            Have a project in mind? Reach out through our social platforms
            or send us a direct message using the contact form below.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* LEFT SIDE - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-white">
              Send Us A Message
            </h2>

            <p className="text-gray-400 mt-4 leading-loose">
              Fill in your details and our team will get back to you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 mt-10"
            >
              {/* Name */}
              <div>
                <label className="text-gray-300 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-300 text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-300 text-sm">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none resize-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-cyan-400 text-black font-semibold py-4 rounded-2xl hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - SOCIALS + INFO */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Phone />
                </div>

                <h3 className="text-white text-xl font-semibold mt-6">
                  Phone Number
                </h3>

                <p className="text-gray-400 mt-3 flex flex-col">
                  +254 701 781 432 
                  <span>+254 112 358 855</span>
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Mail />
                </div>

                <h3 className="text-white text-xl font-semibold mt-6">
                  Email Address
                </h3>

                <p className="text-gray-400 mt-3 break-words">
                  ronaldglassworld@gmail.com
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-6 sm:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <MapPin />
                </div>

                <h3 className="text-white text-xl font-semibold mt-6">
                  Office Location
                </h3>

                <p className="text-gray-400 mt-3">
                  Machakos Junction, Kenya
                </p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-8">
              <h2 className="text-3xl font-bold text-white">
                Connect With Us
              </h2>

              <p className="text-gray-400 mt-4 leading-loose">
                Follow our social platforms for project showcases,
                updates and direct communication.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      {social.icon}
                    </div>

                    <h3 className="text-white text-xl font-semibold mt-5">
                      {social.name}
                    </h3>

                    <p className="text-cyan-400 mt-2 text-sm">
                      {social.username}
                    </p>

                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                      {social.desc}
                    </p>

                    <div className="flex items-center gap-2 mt-5 text-white group-hover:text-cyan-400 transition duration-300">
                      <span className="text-sm font-medium">
                        Connect Now
                      </span>

                      <Send size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;