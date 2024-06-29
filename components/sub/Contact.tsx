"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/components/sub/api/contact.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center" id="contact">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact Us
      </h1>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] mb-4 px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[16px] md:text-[24px]">
          Let&apos;s Connect With Us!
        </h1>
      </motion.div>

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <div className="md:w-1/2 p-8">
          <div className="px-20 mb-20">
            <Image src="/cnt2.png" width={300} height={300} alt="Contact" />
          </div>
          <h2 className="text-xl md:text-2xl text-gray-300">Get in touch with us!</h2>
          <p className="mt-4 text-gray-300">
            We would love to hear from you. Whether you have a question about our services, need
            assistance, or just want to talk, we are here to help.
          </p>
        </div>
        <div className="md:w-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-sm text-gray-300">Surname</label>
              <input
                type="text"
                id="surname"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm text-gray-300">Contact Number</label>
              <input
                type="text"
                id="contact"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-purple-600 hover:bg-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
