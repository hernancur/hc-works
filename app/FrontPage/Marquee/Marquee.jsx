"use client";
import { motion } from "framer-motion";
import { marqueeVariants } from "@/utils/variants";

export default function Marquee({ text }) {
  return (
    <div>
      <div className="marquee  relative my-12 h-10 max-w-6xl overflow-x-hidden">
        <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <div className=" flex gap-x-5 mt-2 uppercase font-semibold justify-evenly text-sm text-neutral-700">
            {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦{" "}
            {text} ✦{text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text}{" "}
            ✦ {text} ✦{text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦{" "}
            {text} ✦ {text} ✦{text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦ {text}{" "}
            ✦ {text} ✦ {text} ✦{text} ✦ {text} ✦ {text} ✦ {text} ✦ {text} ✦{" "}
            {text} ✦ {text} ✦ {text} ✦
          </div>
        </motion.div>
        <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
      </div>
    </div>
  );
}
