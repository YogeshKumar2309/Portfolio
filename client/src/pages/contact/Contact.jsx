import React from "react";
import Layout from "../../componets/contact/Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Server response", result);
        reset(data);
        setLoading(false);
        alert("Message send successfully!");
      }
    } catch (error) {
      console.log(error);
      setLoading(flase);
      alert("Failed to send message ! Try again");
    }
  };

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
              <span className="ms-2 text-lime-300 underline">
                @YogeshWebDev
              </span>
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
        <div className="right md:w-1/2 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full text-center font-bold text-2xl text-lime-900 dark:text-lime-400 border-b-2 pb-2 mb-6">
              Contact Form
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
     
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 w-full rounded-full py-2 px-4 outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
         
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 w-full rounded-full py-2 px-4 outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
       
              <input
                {...register("subject", { required: "Subject is required" })}
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter Subject"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 w-full rounded-full py-2 px-4 outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
            
              <textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                name="message"
                placeholder="Enter Your Message"
                rows="5"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 w-full rounded-2xl py-2 px-4 outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <input
                disabled={loading}
                type="submit"
                value={loading ? "Sending..." : "Send Message"}
                className="bg-lime-700 text-white font-semibold w-full md:w-1/2 rounded-full py-2 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-500/50 cursor-pointer transition"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
