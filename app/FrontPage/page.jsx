"use client";
import Status from "@/app/Status/page";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsFrontPage } from "../../utils/constants";
import Marquee from "./Marquee/Marquee";
import useHovered from "./useHovered";
import Techs from "./Techs/techs";

function Frpage() {
  const {
    hoveredStates,
    enterCard,
    leaveCard,
    hoverTitle,
    enterTitle,
    leaveTitle,
  } = useHovered();

  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <Image
          width={1080}
          height={1080}
          className="w-16 h-16 rounded-full object-cover"
          src="/img/me.jpg"
          alt="Profile"
        />
        <div>
          <h2
            className={`font-extrabold font-InterBlack text-3xl ${
              hoverTitle ? "text-orange-600" : "dark:text-white"
            }`}
            onMouseEnter={() => enterTitle()}
            onMouseLeave={() => leaveTitle()}
          >
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
          Entrepreneur, developer, and instructor with +4 years of experience.
          Specialized in web presence, growing and development for
          professionals.
        </p>
        <p className="dark:text-neutral-300  font-InterMedium  mt-3">
          My experience has enabled me to learn the business, develop data
          driven thinking for accurate decision making, and time management.
        </p>
        {/* <p className="dark:text-neutral-300  font-InterMedium  mt-3">
          On the other hand I'm a F1 fan 🏎️ and an active 5-a-side football
          player ⚽. Passionate about helping people providing them with
          solutions and knowledge that allow them to improve their quality of
          life.
        </p> */}
        <Link
          target="blank"
          href={
            "https://drive.google.com/file/d/1oZWUs5O5Nd4ytoRzU5hspc-VaWx2a3jz/view?usp=sharing"
          }
        >
          <button
            style={{ transition: "transform 0.2s ease-in-out" }}
            className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold hover:scale-110"
          >
            View resume
          </button>
        </Link>
      </div>

      {/* Marquee text */}

      <Marquee text={"FEATURED"} />

      {/* Projects */}

      <div className="">
        {projectsFrontPage.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <div
                className="h-60 w-full md:w-64 relative"
                onMouseEnter={() => enterCard(i)}
                onMouseLeave={() => leaveCard(i)}
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
                  <h1
                    className={`font-InterBold text-lg max-w-lg mt-4 ${
                      hoveredStates[i] ? "text-orange-600" : ""
                    }  `}
                  >
                    {each.title}
                  </h1>
                  <p
                    className={`text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg   `}
                  >
                    {each.subT}
                  </p>

                  <Link target="blank" href={each.link}>
                    <button
                      style={{ transition: "transform 0.2s ease-in-out" }}
                      className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md   hover:scale-110 "
                    >
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

      <Marquee text={"Tech stack"} />

      <Techs />
    </div>
  );
}

export default Frpage;
