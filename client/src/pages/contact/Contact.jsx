import React from "react";
import Layout from "../../componets/contact/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE: Contact Details */}
        <div className="left md:w-1/2 p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg">
          <h3 className="text-lime-300 font-extrabold text-center uppercase text-xl mb-8">
            Get in Touch
          </h3>

          {/* Contact Links */}
          <div className="space-y-6">
            <a
              href="https://wa.me/917818962299"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center md:text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <span className="font-semibold">WhatsApp:</span>
              <span className="ms-2 text-lime-300 underline">Chat Now</span>
            </a>

            <a
              href="https://instagram.com/YogeshWebDev"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center md:text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <span className="font-semibold">Instagram:</span>
              <span className="ms-2 text-lime-300 underline">@YogeshWebDev</span>
            </a>

            <a
              href="mailto:yogesh12lohaghat@gmail.com"
              className="block text-center md:text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <span className="font-semibold">Email:</span>
              <span className="ms-2">yogesh12lohaghat@gmail.com</span>
            </a>

            <div className="block text-center md:text-left p-3 rounded-lg bg-white/10">
              <span className="font-semibold">Mobile:</span>
              <span className="ms-3">+91 7818962299</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="right md:w-1/2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div className="w-full rounded-full py-2 text-center font-bold text-2xl text-lime-900 dark:text-lime-400 border-b-2 mb-4">
              Contact Form
            </div>

            {/* Name */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="name" className="w-full md:w-1/4 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 w-full md:w-3/4 rounded-full py-2 px-4 outline-none focus:border-lime-500 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="email" className="w-full md:w-1/4 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 w-full md:w-3/4 rounded-full py-2 px-4 outline-none focus:border-lime-500 transition"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="subject" className="w-full md:w-1/4 font-medium">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter Subject"
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 w-full md:w-3/4 rounded-full py-2 px-4 outline-none focus:border-lime-500 transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <label htmlFor="message" className="w-full md:w-1/4 font-medium mt-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 w-full md:w-3/4 rounded-2xl py-2 px-4 outline-none focus:border-lime-500 transition"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <input
                type="submit"
                value="Send Message"
                className="bg-lime-700 text-white font-semibold w-full rounded-full py-2 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-500/50 cursor-pointer transition"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
