"use client";

import React from "react";
import {
  FaWhatsapp,
  FaCode,
  FaAppStoreIos,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { AiFillAccountBook } from "react-icons/ai";
import { MdOutlineSocialDistance } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const handleIconClick = () => {
    window.location.href = "mailto:Info@ysyworldwidetechnology.com";
  };

  const phoneNumber = "7497876899";
  const message = "Hello! I would like to chat with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] py-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-around flex-wrap">
          {/* Your logo section */}
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start text-left">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="logo"
                width={100}
                height={100}
                className="cursor-pointer hover:animate-slowspin"
              />
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              Nehru Place, Delhi India
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              Shortland Street, Queen Street, Auckland 1010, New Zealand
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              700 Van Ness Ave. #110, Fresno, CA 93721, California
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              Internet City, Business Bay, Dubai, Dubai
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              223 Liverpool St HQ, Darlinghurst, Australia
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              Offshore, Takapuna, Auckland 0622, New Zealand
              </span>
            </p>
          </div>
          {/* Your services section */}
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start text-left">
            <div className="font-bold text-[26px]">Services</div>
            <Link href="/services/web-development">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-pink-500">
                <FaCode />
                <span className="text-[15px] ml-[6px] text-white">
                  Web Design & Development
                </span>
              </p>
            </Link>
            <Link href="/services/app-development">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-purple-600">
                <FaAppStoreIos />
                <span className="text-[15px] ml-[6px] text-white">
                  App Development
                </span>
              </p>
            </Link>
            <Link href="/services/aiml">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-600">
                <AiFillAccountBook />
                <span className="text-[15px] ml-[6px] text-white">AI / ML</span>
              </p>
            </Link>
            <Link href="/services/social-media">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-red-500">
                <MdOutlineSocialDistance />
                <span className="text-[15px] ml-[6px] text-white">
                  Social Media Marketing
                </span>
              </p>
            </Link>
            <Link href="/services/iso-certification">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-500">
                <TbFileCertificate />
                <span className="text-[15px] ml-[6px] text-white">
                  ISO/ICV And Further Certifications
                </span>
              </p>
            </Link>
            <Link href="/services/compliance">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
                <MdOutlineMiscellaneousServices />
                <span className="text-[15px] ml-[6px] text-white">
                  Compliance Services
                </span>
              </p>
            </Link>
            <Link href="/services/brand-development">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
                <MdOutlineMiscellaneousServices />
                <span className="text-[15px] ml-[6px] text-white">
                  Brand Development
                </span>
              </p>
            </Link>
          </div>
          {/* Your contact section */}
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start text-left">
            <div className="font-bold text-[26px]">Contact Us</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-purple-500">
              <FaClock />
              <span className="text-[15px] ml-[6px] text-white">
                Mon – Sat 10:00pm - 8:00pm
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-purple-500">
              <FaPhone />
              <span className="text-[15px] ml-[6px] text-white">
                +91 7497876899
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-red-600">
              <CgMail />
              <span className="text-[15px] ml-[6px] text-white">
                ysyworldwidetechnology@gmail.com
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-red-600">
              <CgMail />
              <span className="text-[15px] ml-[6px] text-white">
                info@ysyworldwidetechnology.com
              </span>
            </p>
            <Link
              href="https://www.instagram.com/stories/ysyworldwidetechnology/3189397138998492317/"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-pink-700">
                <FaInstagram />
                <span className="text-[15px] ml-[6px] text-white">
                  Instagram
                </span>
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-700">
                <FaLinkedin />
                <span className="text-[15px] ml-[6px] text-white">
                  LinkedIn
                </span>
              </p>
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <CiLocationOn />
              <span className="text-[15px] ml-[6px] text-white">
                Internet city, Dubai
              </span>
            </p>
          </div>
          {/* Your social media section */}
          <div className="min-w-[200px] h-auto flex flex-row justify-between items-start  text-left">
            <p
              className="flex flex-row items-center my-[15px] cursor-pointer text-red-600"
              onClick={handleIconClick}
            >
              <CgMail style={{ pointerEvents: "none" }} />
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-600">
              <Link
                href="https://www.facebook.com/profile.php?id=100090959557942"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-pink-700">
              <Link
                href="https://www.instagram.com/stories/ysyworldwidetechnology/3189397138998492317/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-700">
              <Link
                href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-green-600">
              <a href={whatsappUrl}>
                <FaWhatsapp />
              </a>
            </p>
          </div>
        </div>
        {/* Copyright text */}
        <div className="mb-[20px] mt-4 py-5 text-[15px] text-center">
         <span className="text-red-500 px-2">&copy;</span>YSY WorldWide Technology. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
