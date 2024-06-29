"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const HeroContent = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Project Experience",
    "Web Development",
    "UI/UX Design",
    "App Development",
    "Compliance Services",
    "ISO/ICV And Further Certifications",
    "Digital Product Strategy",
    "Brand Strategy",
  ];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum]); // Add all relevant dependencies here

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-sm md:text-base">
            World Class IT Solution
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 md:mt-6 text-3xl md:text-6xl font-bold text-white max-w-[300px] md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi! This is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              YSY WorldWide Technology{" "}
            </span>
            <span
              className="txt-rotate"
              data-rotate='[ "Project Experience", "Web Development", "UI/UX Design", "App Development","Compliance Services" ,"ISO/ICV And Further Certifications", "Digital Product Strategy", "Brand Strategy" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[300px] md:max-w-[600px]"
        >
          At YSY WORLDWIDE Technology, we specialize in creating bespoke
          solutions that cater to the unique needs of established corporations,
          SMEs, and innovation startups. Our clientele spans a wide spectrum,
          from global giants to small enterprises, ensuring diverse expertise.
        </motion.p>
        
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] md:max-w-[200px]"
        >
          <Link href="/about" className="">
          Learn More!
          </Link>
        </motion.a>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 md:mt-0"
      >
        <div className={styles.container}>
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={450}
            width={450}
            className={styles.animateUpDown}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
