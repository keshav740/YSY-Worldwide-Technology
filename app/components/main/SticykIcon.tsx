"use client";



// components/StickyIcon.js
import React from 'react';
import { FaWhatsapp , FaArrowCircleUp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";



const StickyIcon = () => {
    const handleIconClick = () => {
        window.location.href = "mailto:Info@ysyworldwidetechnology.com"; // Replace 'your@email.com' with your email address
      };
    const phoneNumber = "7497876899"; // Replace with your WhatsApp number
    const message = "Hello! I would like to chat with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="fixed bottom-4 right-4 z-50">
       <p className="flex flex-row items-center my-[15px] cursor-pointer text-green-600 text-[26px]">
              <a href={whatsappUrl}>
                <FaWhatsapp />
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-600 text-[26px]">
    <a href="tel:+1234567890">
      <IoCall />
    </a>
  </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-red-500 text-[26px]" onClick={handleIconClick}>
              
                <CgMail />
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-white text-[26px]">
              <a href='#about-me'>
                <FaArrowCircleUp />
              </a>
            </p>
    </div>
  );
};

export default StickyIcon;
