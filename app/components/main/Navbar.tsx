"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  const handleIconClick = () => {
    window.location.href = "mailto:Info@ysyworldwidetechnology.com"; // Replace 'your@email.com' with your email address
  };
  const phoneNumber = "7497876899"; // Replace with your WhatsApp number
  const message = "Hello! I would like to chat with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-2 md:ml-4 hidden sm:block text-gray-300">
            YSY WorldWide Technology
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-auto h-full items-center justify-between" id="nav">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <Link href="/about" className="cursor-pointer px-2">
              About Us
            </Link>
            <Link href="/skills" className="cursor-pointer px-2">
              Skills
            </Link>
            <a href="/services" className="cursor-pointer px-2">
              Services
            </a>
            <a
              href="/contact-us"
              className="cursor-pointer py-2"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-2 sm:gap-5">
          <Link
            className="text-pink-500"
            href="https://www.instagram.com/stories/ysyworldwidetechnology/3189397138998492317/"
          >
            <FaInstagram />
          </Link>
          <Link
            className="text-blue-700"
            href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link className="text-green-500" href={whatsappUrl} target="_blank">
            <FaWhatsapp />
          </Link>
          <Link
            className="text-blue-500"
            href="https://www.instagram.com/stories/ysyworldwidetechnology/3189397138998492317/"
          >
            <FaFacebook />
          </Link>
          <Link
            className="text-red-500"
            href="https://www.facebook.com/profile.php?id=100090959557942"
            target="_blank"
            onClick={handleIconClick}
          >
            <CgMail style={{ pointerEvents: "none" }} />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full backdrop-blur-md border-t border-[#7042f861] py-4 text-gray-200 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center bg-[#39393dcc]">
          <a
            href="/about"
            className="cursor-pointer py-2"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="/skills"
            className="cursor-pointer py-2"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="/services"
            className="cursor-pointer py-2"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="/contact-us"
            className="cursor-pointer py-2"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
