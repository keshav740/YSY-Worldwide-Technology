import Projects from "@/app/components/main/Projects";
import Image from "next/image";
import React from "react";

const AppDevelopment = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          APP Development
        </h1>
        <div className="px-4 py-10 sm:px-8 md:px-20">
          <Image
            src="/app.webp"
            alt="Ai Ml"
            width={1500}
            height={500}
            style={{ maxHeight: "600px", height: "auto" }}
            className="rounded-lg"
          />
        </div>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:space-x-8 pt-0">
          <div className="md:w-1/2 p-8">
            <p className="mt-4 text-gray-300">
              At YSY WorldWide Technology, we specialize in creating
              high-quality App applications that meet your business needs. Our
              team of experienced developers uses the latest technologies and
              best practices to build apps that are not only functional but also
              user-friendly and visually appealing.
            </p>

            <p className="mt-4 text-gray-300">
              Whether you need an app for iOS, Android, or both, we have the
              expertise to deliver a product that exceeds your expectations.
              From initial concept to final deployment, we work closely with you
              to ensure that your app is tailored to your specific requirements.
            </p>
            <p className="mt-4 text-gray-300">
              Our services include app design, development, testing, and
              maintenance. We are committed to providing you with a seamless and
              efficient development process, ensuring that your app is delivered
              on time and within budget.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full">
            <Image src="/app2.jpg" alt="About Image" width={450} height={600} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
            Why Choose Us .
          </h1>
          <div className="px-4 sm:px-8 md:px-20">
            <p className="mt-8 text-gray-300">
              Our mobile app development organization stands out as the premier
              choice for individuals and businesses alike. With a proven track
              record of delivering innovative, user-friendly solutions, we
              prioritize excellence in every aspect of our work. Our team of
              seasoned developers harnesses cutting-edge technologies to craft
              bespoke mobile applications tailored to our clients&apos; unique needs.
              We pride ourselves on our commitment to transparency,
              communication, and unparalleled customer satisfaction. By choosing
              us, you&apos;re not just selecting a development partner; you&apos;re
              investing in a collaborative journey towards success in the
              digital landscape.
            </p>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default AppDevelopment;
