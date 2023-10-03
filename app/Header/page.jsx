"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { PiSunThin, PiMoonLight } from "react-icons/pi";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HeaderLinks } from "../utils/constants";

function Headpage() {
  let mouseX = useMotionValue(Infinity);
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="  fixed z-50 flex bottom-8 left-1/2 -translate-x-1/2 "
      >
        <div className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 backdrop-blur-md dark:ring-[#1a1a1a] ">
          {HeaderLinks.map((link, i) => {
            return (
              <div key={i}>
                <AppIcon
                  setClicked={setClicked}
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

export default Headpage;

function AppIcon({ mouseX, imgs, href, setClicked }) {
  const handleClick = () => {
    setClicked(true); // Se marca como clicado
  };
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 140, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        onClick={handleClick}
        className="z-30 flex items-center  justify-center rounded-full  border border-neutral-400/20 dark:border-neutral-700 dark:bg-neutral-900/70 cursor-pointer aspect-square "
      >
        <span className="text-3xl">{imgs}</span>
      </motion.div>
    </Link>
  );
}

export function ThemeToggleNav({ className, rel, mouseX, ...props }) {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer bg-neutral-200/70 dark:bg-neutral-900/70 aspect-square "
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      onClick={() => setTheme(otherTheme)}
    >
      <PiMoonLight className="w-6/12 transition  dark:hidden dark:stroke-neutral-300 stroke-neutral-900" />
      <PiSunThin className="hidden w-6/12 transition  dark:block dark:stroke-neutral-300 stroke-neutral-900" />
    </motion.div>
  );
}
