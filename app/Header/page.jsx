"use client";
import { motion, useMotionValue } from "framer-motion";
import { HeaderLinks } from "../utils/constants";
import AppIcon from "./AppIcon";
import ThemeToggleNav from "./ThemeToggleNav";

export default function Headpage() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="fixed z-50 flex bottom-8 left-1/2 -translate-x-1/2 "
      >
        <div className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 backdrop-blur-md dark:ring-[#1a1a1a] ">
          {HeaderLinks?.map((link, i) => {
            return (
              <div key={i}>
                <AppIcon
                  href={link.href}
                  rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                  target={link.target || null}
                  aria-label={link.label}
                  outline={link.outline}
                  mouseX={mouseX}
                  imgs={link.Icon}
                />
              </div>
            );
          })}
          <hr className=" h-10 w-[1px]  bg-neutral-300 dark:bg-neutral-700 mt-2.5 border-none" />

          <ThemeToggleNav mouseX={mouseX} />
        </div>
      </motion.div>
    </div>
  );
}
