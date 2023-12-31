"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { linkFrontPage } from "@/utils/constants";

function Expage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="relative max-w-5xl mx-auto px-8"
    >
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          EXPERIENCE
        </h2>
      </div>
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
                    <Link
                      className="font-semibold hover:underline  hover:text-orange-600"
                      href={each.href}
                      target="blank"
                    >
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
    </motion.div>
  );
}

export default Expage;
