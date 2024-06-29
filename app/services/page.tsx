import Projects from "@/components/main/Projects";
import { title } from "process";
import React from "react";

export const metadata = {
  title: "Services - YSY WorldWide Technology",
  description:
    "Explore our expert services in app development, web development, machine learning, artificial intelligence, and compliance. Innovate with cutting-edge solutions tailored to elevate your business.",
};

const Services = () => {
  return (
    <div className="mt-20">
      <Projects />
    </div>
  );
};

export default Services;
