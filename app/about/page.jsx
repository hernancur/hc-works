"use client";
import {
  SiNotion,
  SiAdobeaftereffects,
  SiFigma,
  SiSpotify,
  SiDiscord,
  SiGooglechrome,
} from "react-icons/si";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomCarousel from "./Carousel/Custom";
import { aboutImgs } from "../../utils/constants";
import { TbArrowBackUp } from "react-icons/tb";

function Aboutpage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      {isLoading ? (
        <div className="text-center">{"Please wait :)"}</div>
      ) : (
        <div className="relative max-w-5xl mx-auto px-8">
          <div className="relative mt-14">
            <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
              ABOUT ME
            </h2>
            <Link href={"/"}>
              <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
                <TbArrowBackUp className="dark:text-white  text-black text-xl" />
              </div>
            </Link>
          </div>

          <div className="mt-10">
            <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
              Thanks for visiting my site. My objective is straightforward.
              Create exceptional things alongside exceptional individuals. By
              collaborating, and having real commitment we can accomplish this
              goal very easy.
            </p>
            <div style={{ width: "100%" }}>
              <CustomCarousel images={aboutImgs} />
            </div>

            <h4 className="my-11 font-InterBold">About me</h4>

            <p className="my-9">
              Passionate about Formula 1, sports and reading. Exploring new
              places, cultures, and meeting people is something I find super
              enjoyable. In my free time I like spending time with family and
              friends.
            </p>

            <h4 className="my-11 font-InterBold">How it all started</h4>

            <p className="my-9">
              Exploring different fields during my years before pandemic, while
              having problems finding videogame tricks or information, coding
              caught my attention. Luckily, I joined with friends to learn more
              about development. Despite struggling with other languages,
              Javascript was very intuitive for me and made me fall in love. I
              learned the importance of performance, data driven decisions, and
              scalability which led to my first and valuable experience.
            </p>

            <h4 className="my-10 font-InterBold">What's to come</h4>

            <p className="my-10">
              As an engineer, I'm particularly interested in learning from my
              peers and introducing new people to web development by teaching
              them what I have learned and how they can apply their skills to
              create amazing things. I give free courses for beginners.
            </p>

            <p>
              I'm also interested in AI and development, and how we can create
              better experiences. In the future, I hope to keep pushing to use
              my skills to make real impact. I'm excited to see where this
              journey takes me, and I look forward to sharing my experiences and
              insights along the way. Till then keep iterating!
            </p>

            <h4 className="font-InterBold">Technology stack</h4>

            <div className="flex gap-x-8 justify-around  mt-16">
              <SiNotion className="text-2xl" />
              <SiAdobeaftereffects className="text-[#00005F] text-2xl" />
              <SiFigma className="text-[#00BDFD] text-2xl" />
              <SiSpotify className="text-[#00DA4C] text-2xl" />
              <SiDiscord className="text-[#5264FA] text-2xl" />
              <SiGooglechrome className="text-2xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Aboutpage;
