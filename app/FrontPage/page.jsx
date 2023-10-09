"use client";

import Status from "@/app/Status/page";

import React, { useState } from "react";
import Link from "next/link";
import { PiLockThin } from "react-icons/pi";
import Image from "next/image";
import LinkedinPhoto from "../../public/img/linkedin.jpg";

import { motion } from "framer-motion";
import { projectsFrontPage, linkFrontPage } from "../../utils/constants";
import { marqueeVariants } from "../../utils/variants";

function Frpage() {
  const [hoveredStates, setHoveredStates] = useState(
    Array(projectsFrontPage.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = true;
    setHoveredStates(updatedStates);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = false;
    setHoveredStates(updatedStates);
  };

  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <Image
          width={300}
          height={300}
          className="w-16 h-16 rounded-full object-cover"
          src="/img/me.jpg"
          alt="Profile"
        />
        <div>
          <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
            Hernan Garcia
          </h2>
          <Link href={"https://instagram.com/hernan.cur"}>
            <span className="text-neutral-500 ">@hernan.cur</span>
          </Link>
          <Status isAvailbale />
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <h3 className="text-neutral-500 text-xs font-InterBold  uppercase ">
          About Me
        </h3>
        <p className="dark:text-neutral-300  font-InterMedium  mt-3">
          Hernan is an entrepreneur, engineer & development instructor 👨‍💻 from
          Uruguay, Formula 1 enthusiast 🏎️ and an active 5-a-side football
          player ⚽. He's passionate about helping people have a better quality
          of life by providing them with solutions and knowledge that allow them
          to improve themselves.
        </p>

        <Link
          target="blank"
          href={
            "https://drive.google.com/file/d/1oZWUs5O5Nd4ytoRzU5hspc-VaWx2a3jz/view?usp=sharing"
          }
        >
          <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
            View resume
          </button>
        </Link>
      </div>

      <div className="mt-6">
        <Image
          width={1280}
          height={627}
          src={LinkedinPhoto}
          alt={`How to grow my company`}
          className="w-full h-72 rounded-lg object-cover"
          priority={true}
        />
      </div>

      {/* Marquee text */}

      <div>
        <div className="marquee  relative my-24 h-10 max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-semibold justify-evenly text-sm text-neutral-700">
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦ FEATURED ✦
              FEATURED ✦ FEATURED ✦ FEATURED ✦
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      {/* Projects */}

      <div className="">
        {projectsFrontPage.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <div
                className="h-60 w-full md:w-64 relative"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <Link target="blank" href={each.link}>
                  <Image
                    width={850}
                    height={850}
                    alt="project"
                    className="w-full h-full object-cover rounded-md transition-transform transform scale-100 hover:scale-110"
                    src={hoveredStates[i] ? each.imgLink2 : each.imgLink}
                    priority={true}
                  />
                </Link>
              </div>

              <div>
                <div className="w-fit flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                    <span>{each.year}</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Status
                      Relaxing={each.status}
                      stat={each.status}
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="font-InterBold text-lg max-w-lg mt-4">
                    {each.title}
                  </h1>
                  <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>

                  <Link target="blank" href={each.link}>
                    <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>

      {/* Marque texts */}

      <div>
        <div className="marquee my-24 h-10 relative  max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦
              Experience ✦
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      {/* Experience */}

      <div className="">
        <div className=" ">
          {linkFrontPage.map((each, i) => (
            <div key={i} className="my-8  p-2 rounded-md ">
              <div className="border border-neutral-700 rounded-full  w-fit px-2 p-1 flex items-center ">
                <span className="text-xs text-neutral-700 dark:text-neutral-300 ">
                  {each.date}
                </span>
              </div>

              <div>
                <div className="flex gap-x-4 my-6">
                  <Image
                    width={400}
                    height={400}
                    className="w-14 h-14 rounded-full"
                    src={each.imgLink}
                    alt=""
                    priority={true}
                  />
                  <div>
                    <h1 className="font-InterBold  text-lg ">{each.title}</h1>
                    {/* you can add your desired links hrefs in the lnk array n wrap here with href */}
                    <Link className="font-semibold hover:underline" href={"/"}>
                      {each.sub}
                    </Link>
                  </div>
                </div>

                <p className=" text-neutral-500 text-lg max-w-3xl">
                  {each.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marque texts */}

      <div>
        <div className="marquee  relative my-24 h-10 max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
              CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      {/* <div>
        <p className="flex justify-center text-lg ">
          I'm enthusiastic about assisting with any queries you may have.
        </p>
      </div> */}
    </div>
  );
}

export default Frpage;
