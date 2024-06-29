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

export const metadata = {
  title: "Compliance - Services - YSY WorldWide Technology",
  description:
    "Ensure your business meets all regulatory standards with our comprehensive compliance services. Specializing in accounting, auditing, and Country-by-Country (CbC) reporting, Consultancy, amc-cft-compliance-services, economic-substance-regularty, icv-certification-in-india, UAE-golden-visa and specialized-restuarant-accounting we offer tailored solutions to keep your operations compliant and efficient. Explore our expert services and stay ahead in the ever-evolving compliance landscape.",
};

const Comp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[34px] md:text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pl-4 md:pl-0">
          Compliance Services
        </h1>
        <p className="mt-4 px-4 text-gray-300 md:px-20">
          YSY Worldwide Technology is a leading management consulting firm in
          Dubai, UAE, assisting emerging enterprises with company formation and
          offering expert financial services like Best Accounting and Auditing
          Firm. Their auditing and accounting services support SMEs in
          accounting, auditing, bookkeeping, VAT consultation, and company
          formation, poised for substantial growth.
        </p>
        <p className="mt-4 text-gray-300 px-4 md:px-20">
          YSY WorldWide Technology, at the forefront of web design and
          development, offers a distinctive approach that extends beyond mere
          aesthetics. We&apos;re not just in the business of creating visually
          appealing websites; our mission is to construct digital spaces that
          excel in performance, all while captivating your target audience in a
          truly remarkable way. User Experience (UX) is the cornerstone of our
          design philosophy, where we painstakingly tailor every element of your
          website for a seamless, engaging, and delightful experience.
        </p>
        <div className="container mx-auto mt-20 px-4 md:px-20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
            <Link href="/services/compliance/accounting">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <MdAccountBalance />

                <p className="px-10">Accounting</p>
              </div>
            </Link>
            <Link href="/services/compliance/specialized-restuarant-account">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <MdSwitchAccount />

                <p className="px-10">Specialized Restuarant Account</p>
              </div>
            </Link>
            <Link href="/services/compliance/complete-cfo-services">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <MdDynamicForm />

                <p className="px-10">Complete CFO Services</p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
            <Link href="/services/compliance/audit">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <AiOutlineAudit />

                <p className="px-10">Auditing</p>
              </div>
            </Link>
            <Link href="/services/compliance/economic-substance-regulations-in-the-UAE">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <TbIrregularPolyhedronPlus />

                <p className="pl-10">
                  Economic Substance Regulations in the UAE
                </p>
              </div>
            </Link>
            <Link href="/services/compliance/amc-cft-compliance-services">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <MdAccountBalanceWallet />

                <p className="px-10">AMC / CFT Compliance Services</p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-4 bg-transparent">
            <Link href="/services/compliance/ICV-certification-in-India-&-UAE">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <PiCertificateBold />

                <p className="px-10">ICV Certification In India & UAE</p>
              </div>
            </Link>
            <Link href="/services/compliance/CBC-reporting">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <TbReportSearch />

                <p className="px-10">CBC Reporting</p>
              </div>
            </Link>
            <Link href="/services/compliance/UAE-golden-visa">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <FaCcVisa />

                <p className="px-10">UAE Golden VISA</p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-4 bg-transparent">
            <Link href="/services/compliance/consultancy">
              <div className="bg-white/10 p-4 shadow rounded flex items-center">
                <FaRegLightbulb />

                <p className="px-10">Consultancy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp;
