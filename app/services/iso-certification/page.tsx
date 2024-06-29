import Projects from "@/components/main/Projects";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Ml-Ai - Services - YSY WorldWide Technology",
  description:
    "Enhance your business standards with our ISO and ICV certification services. Our experts guide you through the certification process, ensuring compliance and quality improvement. Achieve industry recognition and operational excellence with our tailored certification solutions.",
};

const IsoCert = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          ISO / ICV And Further Certifications
        </h1>
        <div className="px-4 py-10 sm:px-8 md:px-20">
          <Image
            src="/iso.webp"
            alt="Ai Ml"
            width={1500}
            height={500}
            style={{ maxHeight: "600px", height: "auto" }}
            className="rounded-lg"
          />
        </div>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:space-x-8 pt-0">
          <div className="md:w-1/2 p-8">
            <h2 className="text-xl md:text-2xl text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              ISO Service .
            </h2>
            <p className="mt-4 text-gray-300">
              YSY Worldwide Technology provides expert ISO certification
              services for quality, safety, and environmental standards,
              bolstering global business competitiveness. Their experienced team
              ensures efficient compliance and tailored solutions, earning trust
              as a top ISO certification partner.
            </p>
            <h2 className="text-xl md:text-2xl text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              ICV Services .
            </h2>
            <p className="mt-4 text-gray-300">
              YSY Worldwide Technology provides ICV certification services to
              ensure industrial control system reliability and compliance. Their
              expert engineers and advanced technology rigorously evaluate and
              validate systems, enhancing efficiency and reducing downtime. They
              are a trusted partner for industries dependent on robust control
              systems, maintaining high industry standards.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full">
            <Image src="/cert.jpg" alt="About Image" width={450} height={600} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-20">
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              ISO Certification :
            </h2>
            <p className="mt-4 text-gray-300">
              ISO (International Organization for Standardization)
              certifications are universally recognized as benchmarks of
              quality, safety, and environmental performance. For businesses
              today, achieving and maintaining ISO certifications is crucial not
              only for compliance but also for gaining a competitive edge. This
              chapter explores the significance of ISO certifications in the
              contemporary business landscape.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              The Role of ISO Certifications :
            </h2>
            <p className="mt-4 text-gray-300">
              ISO certifications serve as the bedrock of modern business
              operations for several key reasons:
            </p>
            <p className="mt-4 text-gray-300">
              ISO standards, such as ISO 9001, are renowned for their emphasis
              on quality management systems. Businesses that attain ISO 9001
              certification demonstrate their commitment to delivering
              high-quality products and services, which instills confidence in
              customers and partners.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">1:-</span> Quality Assurance :
            </h2>
            <p className="mt-4 text-gray-300">
              ISO standards, such as ISO 9001, are renowned for their emphasis
              on quality management systems. Businesses that attain ISO 9001
              certification demonstrate their commitment to delivering
              high-quality products and services, which instills confidence in
              customers and partners.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">2:-</span> Environmental
              Responsibility
            </h2>
            <p className="mt-4 text-gray-300">
              In an era marked by growing environmental concerns, ISO 14001
              certification signifies an organization&apos;s dedication to
              minimizing its environmental footprint. This not only satisfies
              regulatory requirements but also appeals to
              environmentally-conscious consumers.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">3:-</span> Occupational Health and
              Safety :
            </h2>
            <p className="mt-4 text-gray-300">
              ISO 45001 certification highlights a company&apos;s focus on
              ensuring the safety and well-being of its employees. This not only
              reduces workplace accidents but also boosts morale and
              productivity.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              <span className="text-red-500">4:-</span> Competitive Advantage: :
            </h2>
            <p className="mt-4 text-gray-300">
              ISO certifications are often used as differentiators in the
              market. They provide businesses with a competitive advantage,
              making it easier to secure contracts and partnerships, especially
              with organizations that prioritize ISO compliance.
            </p>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default IsoCert;
