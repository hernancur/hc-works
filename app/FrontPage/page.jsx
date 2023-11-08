"use client";
import { motion } from "framer-motion";
import Status from "@/app/Status/page";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./Marquee/Marquee";
import useHovered from "./useHovered";
import Techs from "./Techs/techs";
import Projects from "./Project/Project";
import NextCourse from "./NextCourse/NextCourse";

function Frpage() {
  const { hoverTitle, enterTitle, leaveTitle } = useHovered();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="relative max-w-5xl mx-auto px-8"
      id="motion"
    >
      <div className="mt-32">
        {/* PICTURE */}
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
            <Link href={"https://www.linkedin.com/in/hernan-garcia-fullstack/"}>
              <span className="text-neutral-500 ">@hernan</span>
            </Link>
            <Status isAvailbale />
          </div>
        </div>
        {/* ME TEXT */}
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
          <p className="dark:text-neutral-300  font-InterMedium  mt-3">
            On the other hand I'm a F1 fan 🏎️ and an active 5-a-side football
            player ⚽. Passionate about helping people providing them with
            solutions and knowledge that allow them to improve their quality of
            life.
          </p>
          <Link
            target="blank"
            href={
              "https://drive.google.com/file/d/1O7mdswIpz0zCAJhbey52UsWldQe6wX9N/view?usp=sharing"
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

        <Marquee text={"FEATURED"} />
        <Projects />

        <Marquee text={"LEARN WITH ME"} />
        <NextCourse />

        <Marquee text={"Tech stack"} />
        <Techs />
      </div>
    </motion.div>
  );
}

export default Frpage;
