import Projects from "@/app/components/main/Projects";
import Image from "next/image";
import React from "react";

const Audit = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[34px] md:text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pl-4 md:pl-0">
          Consultancy
        </h1>
        <div className="px-4 py-10 sm:px-8 md:px-20">
          <Image
            src="/const.jpg"
            alt="Consultancy Service"
            width={1500}
            height={500}
            style={{ maxHeight: "600px", height: "auto" }}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-[34px] md:text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pl-4 md:pl-0">
            01. Here&apos;s what we offer
          </h1>
          <div className="px-4 sm:px-8 md:px-20">
            <p className="mt-4 text-gray-300">
              At YSY Worldwide Technology, we are dedicated to providing
              top-tier management consultancy services to businesses across the
              globe. Our mission is to empower organizations to achieve peak
              performance, enhance productivity, and streamline their
              operations. We recognize that businesses often require specialized
              expertise in various aspects of management to bridge the gap
              between their current state and their aspirations for the future.
              As your trusted management consultants, we offer a wealth of
              experience and knowledge to help you achieve your objectives while
              maintaining the core values that define your organization.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              Why YSY Worldwide Technology ?
            </h2>
            <p className="mt-4 text-gray-300">
              Management consultants play a pivotal role in helping businesses
              thrive in today&apos;s dynamic and competitive landscape. Here&apos;s
              why you need YSY Worldwide Technology on your side.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              Expertise and Exposure :
            </h2>
            <p className="mt-4 text-gray-300">
              Our team of seasoned consultants brings a diverse range of skills
              and a depth of experience in various management areas that your
              business may not have internally. We offer fresh perspectives and
              insights, leveraging our expertise to catalyze your growth.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              Customized Solutions :
            </h2>
            <p className="mt-4 text-gray-300">
              We understand that every organization is unique. Our approach is
              not one-size-fits-all; instead, we tailor our solutions to align
              perfectly with your specific needs and challenges.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              Minimal Disruption :
            </h2>
            <p className="mt-4 text-gray-300">
              YSY Worldwide Technology ensures that our consultancy services
              seamlessly integrate into your business operations. We minimize
              disruption so that you can continue running your day-to-day
              activities while simultaneously improving and expanding your
              horizons.
            </p>
          </div>
          <div className="px-4 sm:px-8 md:px-20">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              What We Do :
            </h2>
            <p className="mt-4 text-gray-300">
              Our dedicated team of management consultants at YSY Worldwide
              Technology performs a wide array of functions to assist your
              organization in reaching new heights. Here are some key aspects of
              what we do.
            </p>
          </div>

          {/* Other sections and content here */}
          
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Audit;
