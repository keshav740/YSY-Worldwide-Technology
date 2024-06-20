"use client";

import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="services">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Our Services
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="Welcome-box py-[8px] mb-4 px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[16px] md:text-[24px]">
          Think better with YSY WorldWide Technology
        </h1>
      </motion.div>
      <div className="h-full w-full flex flex-col mt-4 md:flex-row gap-10 px-10">
        <Link href="/services/web-development">
          <ProjectCard
            src="/NextWebsite.png"
            title="Web Designing & Development"
            description="At YSY WorldWide Technology, we specialize in creating high-quality Web applications that meet your business needs. Our team of experienced developers uses the latest technologies and best practices to build apps that are not only functional but also user-friendly and visually appealing."
            onClick={() =>("")}
          />
        </Link>
        <Link href="/services/aiml">
          <ProjectCard
            src="/ai.jpg"
            title="AI / ML"
            description="At YSY WorldWide Technology, we harness the transformative power of Artificial Intelligence (AI) and Machine Learning (ML) to drive innovation and efficiency across various industries. Our team of experts is dedicated to creating cutting-edge solutions that empower businesses to make data-driven decisions, automate processes, and achieve unprecedented levels of performance and productivity."
            onClick={() =>("")}
          />
        </Link>
        <Link href="/services/app-development">
          <ProjectCard
            src="/app.webp"
            title="App Development"
            description="At YSY WorldWide Technology, we specialize in creating high-quality App applications that meet your business needs. Our team of experienced developers uses the latest technologies and best practices to build apps that are not only functional but also user-friendly and visually appealing."
            onClick={() =>("")}
          />
        </Link>

        <Link href="/services/social-media">
          <ProjectCard
            src="/socialm.jpeg"
            title="Digital Marketing With AI"
            description="At YSY, we ensure that you reach potential customers early in their buying journey. By working with our team of specialists, you can stay ahead of the competition and achieve results by implementing the latest innovations, testing new ideas, and measuring data."
            onClick={() =>("")}
          />
        </Link>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 mt-4 px-10">
        <Link href="/services/iso-certification">
          <ProjectCard
            src="/iso.webp"
            title="ISO/ICV And Further Certifications"
            description="YSY Worldwide Technology provides expert ISO certification services for quality, safety, and environmental standards, bolstering global business competitiveness. Their experienced team ensures efficient compliance and tailored solutions, earning trust as a top ISO certification partner."
            onClick={() =>("")}
          />
        </Link>
        <Link href="/services/compliance">
          <ProjectCard
            src="/comp.webp"
            title="Compliance Services"
            description="YSY Worldwide Technology is a leading management consulting firm in Dubai, UAE, assisting emerging enterprises with company formation and offering expert financial services like Best Accounting and Auditing Firm. Their auditing and accounting services support SMEs in accounting, auditing, bookkeeping, VAT consultation, and company formation, poised for substantial growth."
            onClick={() =>("")}
          />
        </Link>
        <Link href="/services/brand-development">
          <ProjectCard
            src="/brand.jpg"
            title="Brand Development"
            description="YSY Worldwide Technology's brand development services go beyond
              the surface to create meaningful and enduring brand identities. We
              combine creativity and strategy in a holistic manner, meticulously
              crafting digital representations that resonate with authenticity
              and innovation."
              onClick={() =>("")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
