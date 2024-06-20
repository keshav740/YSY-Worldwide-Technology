import Projects from "@/app/components/main/Projects";
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

const ComplianceService = () => {
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
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-[34px] md:text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pl-4 md:pl-0">
            Features
          </h1>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">1:-</span> Visually Stunning
              Designs :
            </h2>
            <p className="mt-4 text-gray-300">
              Our team comprises creative and skilled designers who don&apos;t merely
              follow the latest design trends; they ensure that your website&apos;s
              design is distinctive and perfectly aligned with your brand. We
              believe aesthetics play a pivotal role in creating a remarkable
              first impression.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">2:-</span> Exceptional Performance
              :
            </h2>
            <p className="mt-4 text-gray-300">
              Our website isn&apos;t just a static digital brochure; it&apos;s a dynamic
              platform that needs to load quickly and operate efficiently. We
              meticulously optimize every aspect of your website to ensure it
              performs exceptionally well, providing a smooth and
              frustration-free experience for your users.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">3:-</span> User-centric approach :
            </h2>
            <p className="mt-4 text-gray-300">
              Your target audience is our top priority. Through in-depth user
              research and analysis, we guarantee that your website aligns
              perfectly with the preferences and needs of your visitors.
              Navigation is intuitive, content is engaging, and the overall
              experience is user-friendly.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">4:-</span> Engagement and Delight :
            </h2>
            <p className="mt-4 text-gray-300">
              We don&apos;t just inform; we engage and delight users. Interactive
              elements, captivating visuals, and a compelling narrative are
              seamlessly integrated to keep visitors hooked and eager to explore
              further.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">5:-</span> Responsive Design :
            </h2>
            <p className="mt-4 text-gray-300">
              In today&apos;s multi-device world, we design with responsiveness in
              mind. Your website adapts gracefully to various screen sizes,
              ensuring a consistent and appealing experience on desktops,
              tablets, and smartphones.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">6:-</span> Lasting Impression :
            </h2>
            <p className="mt-4 text-gray-300">
              We understand the significance of making a lasting impact. With
              our design and development expertise, your online presence will
              stand out from the crowd, leaving an indelible mark on your
              audience&apos;s memory.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">7:-</span> Customised Solutions :
            </h2>
            <p className="mt-4 text-gray-300">
              We reject the notion of one-size-fits-all solutions. Each project
              is unique, and our design and development strategies are tailored
              to meet your specific goals and objectives. By focusing on your
              individual needs, we ensure that our solutions are both effective
              and innovative.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">8:-</span> Continual Improvement :
            </h2>
            <p className="mt-4 text-gray-300">
              The digital landscape is in perpetual evolution, and so are our
              designs. We keep pace with the latest technologies and trends to
              ensure your website remains cutting-edge and relevant.
            </p>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default ComplianceService;
