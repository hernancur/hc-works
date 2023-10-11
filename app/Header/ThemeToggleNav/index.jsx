import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { PiSunLight, PiMoonLight } from "react-icons/pi";
import { useTheme } from "next-themes";

export default function ThemeToggleNav({ className, rel, mouseX, ...props }) {
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
      <PiSunLight className="hidden w-6/12 transition  dark:block dark:stroke-neutral-300 stroke-neutral-900" />
    </motion.div>
  );
}
