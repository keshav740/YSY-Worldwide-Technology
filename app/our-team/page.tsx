import Link from "next/link";
import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { MdSwitchAccount } from "react-icons/md";
import { MdDynamicForm } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { TbIrregularPolyhedronPlus } from "react-icons/tb";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaCcVisa } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import Image from "next/image";

const OurTeam = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[34px] md:text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pl-4 md:pl-0">
          Our Team ( Team of Experts )
        </h1>
        <p className="mt-4 px-4 text-gray-300 md:px-20">
          Our team is made up of developers who specialize in web and mobile app
          development. We’re passionate about what we do, and we love the
          challenges that come with creating new software. If you want to learn
          more about us, check out our website or give us a call!
        </p>
        <div className="container mx-auto mt-20 px-4 md:px-20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staf.jpg"
                alt="Cynthia Griffith"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Cynthia Griffith</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff2.jpg"
                alt="Melanie Thayer"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Melanie Thayer</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff9.jpg"
                alt="Harold White"
                width={1500}
                height={600}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Harold White</p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff4.jpg"
                alt="Ellise Sinclair"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Ellise Sinclair</p>
            </div>

            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff5.jpg"
                alt="Cynthia Griffith"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Cynthia Griffith</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff6.jpg"
                alt="Ravi Bhargav"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Ravi Bhargav</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff8.jpg"
                alt="Edward Oakley"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Edward Oakley</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staff3.jpg"
                alt="Lily Christian"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Lily Christian</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/staaff10.jpg"
                alt="Mike Cordon"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Mike Cordon</p>
            </div>
            <div className="bg-white/10 p-4 shadow rounded items-center cursor-pointer">
              <Image
                src="/IMG_3210.JPG"
                alt="Simran Aggarwal (Founder and CEO)"
                width={1500}
                height={500}
                style={{ maxHeight: "600px", height: "auto" }}
                className="rounded-lg"
              />

              <p className="px-1 mt-5">Simran Aggarwal (Founder and CEO)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
