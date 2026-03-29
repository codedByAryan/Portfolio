import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nr9ap12",
        "template_tz437mg",
        form.current,
        "FYgpI0lizDyWVXOtj"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          e.target.reset();
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Contact Me
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Let’s work together 🚀
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project idea or opportunity? Feel free to reach out.
            I will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400 text-2xl" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400 text-sm">
                  aryanchauhan3229@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-400 text-sm">+91 9557573229</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-400 text-sm">India</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-gray-400 leading-7">
                I am open to internships, freelance work, and full-time
                opportunities. Let’s build something amazing together.
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-3xl border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-black/50 border border-green-400/20 text-white outline-none focus:border-green-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-black/50 border border-green-400/20 text-white outline-none focus:border-green-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-black/50 border border-green-400/20 text-white outline-none focus:border-green-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-green-400 text-black font-semibold hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;